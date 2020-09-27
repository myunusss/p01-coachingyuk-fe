export default {
  path: 'topic',
  component: () => import(/* webpackChunkName: 'topic' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    name: 'Topic',
    props: true,
    component: () => import(/* webpackChunkName: 'topic' */ '@/views/Topic/Index')
  }]
}
