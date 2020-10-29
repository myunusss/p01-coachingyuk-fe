export default {
  path: 'coach-chat',
  component: () => import(/* webpackChunkName: 'coach-chat' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'coach-chat' */ '@/views/CoachChat/Index')
  }]
}
