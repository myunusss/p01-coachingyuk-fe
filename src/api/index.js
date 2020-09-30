import request from './request'

export default {
  login: params => request.post('/login', params),
  signUp: params => request.post('/register', params),
  user: {
    update: (id, params) => request.put(`/users/${id}`, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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
    ask: params => request.post('/questions', params),
    follow: params => request.post('/questions/follow', params)
  },
  answer: {
    list: params => request.get('/answers', { params }),
    listSlug: (slug, params) => request.get(`/answers/${slug}`, { params }),
    post: params => request.post('/answers', params),
    helpful: params => request.post('/answers/toggle-helpful', params)
  }
}
