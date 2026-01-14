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
      {
        path: 'checkIn',
        component: createNameComponent(() => import('@/views/provided/checkIn/checkInList.vue')),
        meta: { title: '入住办理' }
      },
      {
        path: 'checkInAdd',
        name: 'checkInAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/checkIn/checkInAdd.vue')),
        meta: { title: '新增合同' }
      },
    ]
  },
 {
    path: '/out',
    component: Layout,
    redirect: '/out/registration',
    meta: { title: '外出管理', icon: 'sfont system-chart' },
    children: [
      {
        path: 'registration',
        component: createNameComponent(() => import('@/views/provided/out/outRegistration.vue')),
        meta: { title: '外出申请' }
      },
      {
        path: 'outRegistrationAdd',
        name: 'outRegistrationAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/out/outRegistrationAdd.vue')),
        meta: { title: '新增外出申请' }
      },
      {
        path: 'examine',
        component: createNameComponent(() => import('@/views/provided/out/outExamine.vue')),
        meta: { title: '外出审核' }
      },
      {
        path: 'statistics',
        component: createNameComponent(() => import('@/views/provided/out/outStatistics.vue')),
        meta: { title: '外出统计' }
      },
    ]
  },
]

export default route