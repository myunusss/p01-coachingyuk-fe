export default {
  path: 'help',
  component: () => import(/* webpackChunkName: 'help' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'help' */ '@/views/Help/Index')
  }]
}
