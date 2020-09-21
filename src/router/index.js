import Vue from 'vue';
import VueRouter from 'vue-router';

import Activity from './activity'
import Dashboard from './dashboard'
import FindACoach from './findACoach'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
      children: [
        { ...Activity },
        { ...Dashboard },
        { ...FindACoach }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router;
