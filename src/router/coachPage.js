export default {
  path: 'coach-page',
  component: () => import(/* webpackChunkName: 'coach-page' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    name: 'CoachPage',
    props: true,
    component: () => import(/* webpackChunkName: 'coach-page' */ '@/views/CoachPage/Index')
  }, {
    path: 'subscribe',
    name: 'CoachPageSubscribe',
    props: true,
    component: () => import(/* webpackChunkName: 'coach-page/subscribe' */ '@/views/CoachPage/Subscribe')
  }]
}
