import { createRouter, createWebHistory } from "vue-router"

import Layout from "../layout/index.vue"
import ReactChild from "../subApp/reactChild.vue"
import VueChild from "../subApp/vueChild.vue"

const routes = [
  {
    path: "/",
    redirect: "/react-demo",
    component: Layout,
    children: [
      {
        path: '/react-demo',
        name: "react-demo",
        component: ReactChild,
        meta: {
          title: "react-demo"
        }
      },
      {
        path: '/vue-demo',
        name: "vue-demo",
        component: VueChild,
        meta: {
          title: "vue-demo"
        }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function useAppRouter(app) {
  app.use(router)
}

export default router