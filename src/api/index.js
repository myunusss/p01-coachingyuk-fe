import request from './request'

export default {
  login: params => request.post('/login', params),
  signUp: params => request.post('/register', params)
}
