import Vue from 'vue';
import VueRouter from 'vue-router';

import Activity from './activity'
import Dashboard from './dashboard'
import FindACoach from './findACoach'
import Profile from './profile'
import Topic from './topic'
import Question from './question'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/landing',
      name: 'Landing',
      component: () => import(/* webpackChunkName: 'landing' */ '@/views/Landing/Index')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'login' */ '@/views/Login/Index')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: 'signUp' */ '@/views/SignUp/Index')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
      children: [
        { ...Activity },
        { ...Dashboard },
        { ...FindACoach },
        { ...Profile },
        { ...Topic },
        { ...Question }
      ]
    },
    {
      path: '/*',
      redirect: '/landing'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/landing' && !localStorage.getItem('user')) {
    if (to.path === '/login' || to.path === '/sign-up') {
      return next()
    }
    next('/landing')
  } else {
    next()
  }
})

export default router;
