export default {
  path: 'update-password',
  component: () => import(/* webpackChunkName: 'update-password' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'update-password' */ '@/views/Password/Index')
  }]
}
