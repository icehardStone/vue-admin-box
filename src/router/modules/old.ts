import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/old',
    component: Layout,
    redirect: '/old/record',
    meta: { title: '长者管理', icon: 'sfont system-chart' },
    children: [
      {
        path: 'record',
        component: createNameComponent(() => import('@/views/provided/oldRecord/oldRecordList.vue')),
        meta: { title: '老人档案' }
      },
      {
        path: 'recordAdd',
        name: 'recordAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/oldRecord/oldRecordAdd.vue')),
        meta: { title: '新增' }
      },
      {
        path: 'bookManage',
        component: createNameComponent(() => import('@/views/provided/bookManage/bookManageList.vue')),
        meta: { title: '预约管理' }
      },
      {
        path: 'bookManageAdd',
        name: 'bookManageAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/bookManage/bookManageAdd.vue')),
        meta: { title: '新增' }
      },
      {
        path: 'contract',
        component: createNameComponent(() => import('@/views/provided/contract/contractList.vue')),
        meta: { title: '合同管理' }
      },
      {
        path: 'contractAdd',
        name: 'contractAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/contract/contractAdd.vue')),
        meta: { title: '新增合同' }
      },
    ]
  }
]

export default route