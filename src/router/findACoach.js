export default {
  path: 'find-a-coach',
  component: () => import(/* webpackChunkName: 'find-a-coach' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'find-a-coach' */ '@/views/FindACoach/Index')
  }]
}
