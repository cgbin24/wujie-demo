import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '主页',
    component: () => import('../../layout/index.vue'),
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('../../pages/index/index.vue')
      },
      {
        path: 'mdEditor',
        name: '编辑器',
        component: () => import('../../pages/mdEditor/index.vue')
      },
    ]
  }
]

export default routes
