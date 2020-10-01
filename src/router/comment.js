export default {
  path: 'comment',
  component: () => import(/* webpackChunkName: 'comment' */ '@/views/RouteWrapper'),
  children: [{
    path: ':slug',
    name: 'Comment',
    props: true,
    component: () => import(/* webpackChunkName: 'comment' */ '@/views/Comment/Index')
  }]
}
