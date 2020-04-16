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
    path: '/marathon/:actId',
    name: 'marathon',
    redirect: { name: 'inter' },
    component: resolve => require(['@pages/marathon'], resolve),
    children: [
      {
        path: 'inter',
        name: 'inter',
        meta: {
          title: '上海国际马拉松',
          ignoreAuth: true
        },
        component: resolve => require(['@pages/Inter'], resolve)
      },
      {
        path: 'game',
        name: 'game',
        meta: {
          title: '赛事信息',
          ignoreAuth: true
        },
        component: () => import('@pages/game/game.vue')
      },
      {
        path: 'apply',
        name: 'apply',
        meta: {
          title: '我要报名'
        },
        component: () => import('@pages/apply/apply.vue')
      },
      {
        path: 'sponsor',
        name: 'sponsor',
        meta: {
          title: '赞助商',
          ignoreAuth: true
        },
        component: () => import('@pages/sponsor/sponsor.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          title: '个人中心'
        },
        redirect: { name: 'owner' },
        component: () => import('@pages/user/user.vue'),
        children: [
          {
            path: 'owner',
            name: 'owner',
            meta: {
              title: '我的上马'
            },
            component: () => import('@pages/user/userTabContainer/game.vue')
          },
          {
            path: 'apply',
            name: 'userApply',
            meta: {
              title: '我的报名'
            },
            component: () => import('@pages/user/userTabContainer/apply.vue')
          },
          {
            path: 'details/:sId',
            name: 'details',
            meta: {
              title: '报名详情'
            },
            component: () => import('@pages/user/userTabContainer/details.vue')
          },
          {
            path: 'results',
            name: 'results',
            meta: {
              title: '我的成绩'
            },
            component: () => import('@pages/user/userTabContainer/ranking.vue')
          },
          {
            path: 'certificate',
            name: 'certificate',
            meta: {
              title: '我的证书'
            },
            component: () => import('@pages/user/userTabContainer/certificate.vue')
          },
          {
            path: 'photo',
            name: 'photo',
            meta: {
              title: '我的照片'
            },
            component: () => import('@pages/user/userTabContainer/photo.vue')
          },
          {
            path: 'info',
            name: 'info',
            meta: {
              title: '个人信息'
            },
            component: () => import('@pages/user/userTabContainer/userCenter.vue')
          }
          // {
          //   path: 'photo',
          //   name: 'photo',
          //   meta: {
          //     title: '我的照片'
          //   },
          //   component: () => import('@pages/user/userTabContainer/photo.vue')
          // },
          // {
          //   path: 'photo',
          //   name: 'photo',
          //   meta: {
          //     title: '我的照片'
          //   },
          //   component: () => import('@pages/user/userTabContainer/photo.vue')
          // }
        ]
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: '上马',
      ignoreAuth: true
    },
    component: resolve => require(['@pages/Dashboard'], resolve)
  }
]
