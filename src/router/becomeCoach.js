export default {
  path: 'apply-coach',
  component: () => import(/* webpackChunkName: 'apply-coach' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'apply-coach' */ '@/views/BecomeCoach/Apply')
  }]
}
