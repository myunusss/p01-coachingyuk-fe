export default {
  path: 'dashboard',
  component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/Dashboard/Index')
  }]
}
