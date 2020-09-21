export default {
  path: '/activity',
  component: () => import(/* webpackChunkName: 'activity' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'activity' */ '@/views/Activity/Index')
  }]
}
