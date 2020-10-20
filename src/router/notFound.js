export default {
  path: 'not-found',
  component: () => import(/* webpackChunkName: 'not-found' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'not-found' */ '@/views/NotFound/Index')
  }]
}
