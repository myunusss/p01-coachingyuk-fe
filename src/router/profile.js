export default {
  path: 'profile',
  component: () => import(/* webpackChunkName: 'profile' */ '@/views/RouteWrapper'),
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: 'profile' */ '@/views/Profile/Index')
  }, {
    path: 'edit',
    name: 'Edit',
    props: true,
    component: () => import(/* webpackChunkName: 'profile-edt' */ '@/views/Profile/Edit')
  }]
}
