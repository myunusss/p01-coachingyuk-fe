import request from './request'

export default {
  login: params => request.post('/login', params),
  signUp: params => request.post('/register', params),
  user: {
    update: (id, params) => request.put(`/users/${id}`, params)
  },
  category: {
    list: params => request.get('/categories', { params })
  },
  topic: {
    list: params => request.get('/topics', { params }),
    join: params => request.post('/topics/join', params)
  },
  questions: {
    list: params => request.get('/questions', { params }),
    ask: params => request.post('/questions', params)
  }
}
