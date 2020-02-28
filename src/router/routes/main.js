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
