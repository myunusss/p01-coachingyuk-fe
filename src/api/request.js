import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND_URL}/api`,
  timeout: 120000
})

instance.interceptors.request.use(req => {
  if (req.url !== '/api/login' || req.url !== '/api/register') {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return req
})

instance.interceptors.response.use(
  response => response,
  error => {
    // Safari can't get the OK response and shows 'Network Error' instead
    const safariUnrealError = error.code === undefined && error.message === 'Network Error'
    const nonSafariUnauthorized = error.response && error.response.status === 401
    // Safari don't have response on error 4xx
    const safariUnauthorized = !error.response
    const refreshRequest = error.config.url.endsWith('/auth/cms/refresh')
    const loginRequest = error.config.url.endsWith('/auth/cms/login')

    if (loginRequest) {
      return Promise.reject(error)
    } else if (safariUnrealError) {
      return Promise.resolve()
    }

    return Promise.reject(error)
  }
)

export default instance
