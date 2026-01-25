import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/assess',
    component: Layout,
    redirect: '/assess/manage',
    meta: { title: '评估中心', icon: 'sfont system-chart' },
    children: [
      {
        path: 'manage',
        component: createNameComponent(() => import('@/views/provided/assess/assessManageList.vue')),
        meta: { title: '评估管理' }
      },
      {
        path: 'serviceAdd',
        name: 'serviceAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/assess/serviceAdd.vue')),
        meta: { title: '首次服务' }
      },
      {
        path: 'care',
        component: createNameComponent(() => import('@/views/provided/assess/careList.vue')),
        meta: { title: '照护评估' }
      },
      {
        path: 'cognitive',
        component: createNameComponent(() => import('@/views/provided/assess/cognitiveList.vue')),
        meta: { title: '认知评估' }
      },
    ]
  },
]

export default route