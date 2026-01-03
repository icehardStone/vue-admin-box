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
    path: '/nursing',
    component: Layout,
    redirect: '/nursing/record',
    meta: { title: '人员管理', icon: 'sfont system-chart' },
    children: [
      {
        path: 'record',
        component: createNameComponent(() => import('@/views/provided/nursing/nursingList.vue')),
        meta: { title: '人员信息' }
      },
      {
        path: 'nursingAdd',
        name: 'nursingAdd',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/nursing/nursingAdd.vue')),
        meta: { title: '人员新增' }
      },
      {
        path: 'nursingRelationship',
        component: createNameComponent(() => import('@/views/provided/nursingRelationship/nursingRelationshipList.vue')),
        meta: { title: '照护关系' }
      },
      {
        path: 'nursingRelationshipDetail',
        name: 'nursingRelationshipDetail',
        hideMenu: true,
        component: createNameComponent(() => import('@/views/provided/nursingRelationship/nursingRelationshipDetail.vue')),
        meta: { title: '关系详情' }
      },
    ]
  },
  {
    path: '/equipment',
    component: Layout,
    redirect: '/equipment/list',
    meta: { title: '设备管理', icon: 'sfont system-chart' },
    children: [
      {
        path: 'list',
        component: createNameComponent(() => import('@/views/provided/equipment/equipmentList.vue')),
        meta: { title: '设备列表' }
      },
      {
        path: 'statics',
        component: createNameComponent(() => import('@/views/provided/equipment/equipmentList.vue')),
        meta: { title: '设备统计' }
      },
    ]
  },
  {
    path: '/room',
    component: Layout,
    redirect: '/room/setting',
    meta: { title: '房间管理', icon: 'sfont system-chart' },
    children: [
      {
        path: 'setting',
        component: createNameComponent(() => import('@/views/provided/roomManage/roomSetting.vue')),
        meta: { title: '房间设置' }
      },
      {
        path: 'roomLevel',
        component: createNameComponent(() => import('@/views/provided/roomManage/roomLevel.vue')),
        meta: { title: '房间等级' }
      }, 
      {
        path: 'roomLevelAdd',
        hideMenu: true,
        name: 'roomLevelAdd',
        component: createNameComponent(() => import('@/views/provided/roomManage/roomLevelAdd.vue')),
        meta: { title: '新增房间等级' }
      },
    ]
  },
  {
    path: '/fee',
    component: Layout,
    redirect: '/fee/setting',
    meta: { title: '费用信息', icon: 'sfont system-chart' },
    children: [
      {
        path: 'setting',
        component: createNameComponent(() => import('@/views/provided/fee/index.vue')),
        meta: { title: '费用设置' }
      },
      {
        path: 'statits',
        component: createNameComponent(() => import('@/views/provided/fee/index.vue')),
        meta: { title: '费用查询' }
      }
    ]
  },
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