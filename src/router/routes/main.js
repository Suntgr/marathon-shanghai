/* eslint-disable prettier/prettier */
/** @format */
// eslint-disable-next-line prettier/prettier
export default [
  {
    path: '/explore',
    meta: {
      ignoreAuth: true,
      title: '发现更多'
    },
    component: resolve => require(['@pages/ExploreMore'], resolve)
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
