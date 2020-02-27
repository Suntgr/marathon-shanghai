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
      title: 'sign'
    },
    component: () => import('@pages/login/sign.vue')
  }
]
