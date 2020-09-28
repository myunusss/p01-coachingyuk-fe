export default {
  path: 'questions',
  component: () => import(/* webpackChunkName: 'question' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    name: 'Question',
    props: true,
    component: () => import(/* webpackChunkName: 'question' */ '@/views/Question/Index')
  }]
}
