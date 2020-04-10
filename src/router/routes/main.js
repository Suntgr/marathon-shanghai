/* eslint-disable prettier/prettier */
/** @format */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      ignoreAuth: true,
      title: '登录'
    },
    component: () => import('@pages/login/login.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    meta: {
      ignoreAuth: true,
      title: '注册'
    },
    component: () => import('@pages/login/sign.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      ignoreAuth: true,
      title: '个人中心'
    },
    component: () => import('@pages/user/user.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    meta: {
      ignoreAuth: true,
      title: '我要报名'
    },
    component: () => import('@pages/apply/apply.vue')
  },
  {
    path: '/game',
    name: 'game',
    meta: {
      ignoreAuth: true,
      title: '赛事信息'
    },
    component: () => import('@pages/game/game.vue')
  },
  // 国际官网
  {
    path: '/inter',
    meta: {
      ignoreAuth: true,
      title: '发现更多'
    },
    component: resolve => require(['@pages/Inter'], resolve)
  },
  {
    path: '/dashboard',
    meta: {
      ignoreAuth: true,
      title: '发现更多'
    },
    component: resolve => require(['@pages/Dashboard'], resolve)
  }
]
