import Vue from 'vue';
import VueRouter from 'vue-router';

import Activity from './activity'
import Dashboard from './dashboard'
import FindACoach from './findACoach'
import Profile from './profile'
import Topic from './topic'
import Question from './question'
import Comment from './comment'
import Coach from './becomeCoach'
import CoachPage from './coachPage'

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
      path: '/terms-and-conditions',
      name: 'TermsAndConditions',
      component: () => import(/* webpackChunkName: 'terms-and-conditions' */ '@/views/TermsCondition/Index')
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import(/* webpackChunkName: 'privacy-policy' */ '@/views/PrivacyPolicy/Index')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'login' */ '@/views/Login/Index')
    },
    {
      path: '/login-event',
      name: 'LoginEvent',
      component: () => import(/* webpackChunkName: 'login' */ '@/views/Login/Index')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: 'signUp' */ '@/views/SignUp/Index')
    },
    {
      path: '/sign-up-event',
      name: 'SignUpEvent',
      component: () => import(/* webpackChunkName: 'signUp' */ '@/views/SignUp/Index')
    },
    {
      path: '/become-a-coach',
      name: 'BecomeCoach',
      component: () => import(/* webpackChunkName: 'become-a-coach' */ '@/views/BecomeCoach/Index')
    },
    {
      path: '/event',
      name: 'Event',
      component: () => import(/* webpackChunkName: 'event' */ '@/views/Event/Index')
    },
    {
      path: '/search-coach',
      name: 'SearchCoach',
      component: () => import(/* webpackChunkName: 'search-coach' */ '@/views/FindACoach/Landing/Index')
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
        { ...Question },
        { ...Comment },
        { ...Coach },
        { ...CoachPage }
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
    if (to.path === '/login' || to.path === '/login-event'
      || to.path === '/sign-up' || to.path === '/sign-up-event'
      || to.path === '/terms-and-conditions' || to.path === '/privacy-policy'
      || to.path === '/become-a-coach' || to.path === '/event'
      || to.path === '/search-coach') {
      return next()
    }
    next('/landing')
  } else {
    next()
  }
})

export default router;
