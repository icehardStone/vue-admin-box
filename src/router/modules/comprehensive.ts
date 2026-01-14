import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
    {
        path: '/nursing',
        component: Layout,
        redirect: '/nursing/record',
        classfy: "comprehensive",
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
        classfy: "comprehensive",
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
        classfy: "comprehensive",
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
        path: '/note',
        component: Layout,
        redirect: '/note/list',
        meta: { title: 'message.menu.note.name', icon: 'sfont system-xitongzhuangtai' },
        alwayShow: true,
        classfy: "comprehensive",
        children: [
            {
                path: 'list',
                component: createNameComponent(() => import('@/views/main/note/list/index.vue')),
                meta: { title: 'message.menu.note.list' }
            }
        ]
    },
    {
        path: '/log',
        component: Layout,
        redirect: '/log/list',
        meta: { title: 'message.menu.log.name', icon: 'sfont system-xitongzhuangtai' },
        alwayShow: true,
        classfy: "comprehensive",
        children: [
            {
                path: 'list',
                component: createNameComponent(() => import('@/views/main/log/list/index.vue')),
                meta: { title: 'message.menu.log.list' }
            }
        ]
    },
    {
        path: '/systemManage',
        component: Layout,
        redirect: '/systemManage/menu',
        meta: { title: 'message.menu.systemManage.name', icon: 'sfont system-xitongzhuangtai' },
        alwayShow: true,
        classfy: "comprehensive",
        children: [
            {
                path: 'menu',
                component: createNameComponent(() => import('@/views/main/systemManage/menu/index.vue')),
                meta: { title: 'message.menu.systemManage.menu' }
            },
            {
                path: 'role',
                component: createNameComponent(() => import('@/views/main/systemManage/role/index.vue')),
                meta: { title: 'message.menu.systemManage.role' }
            },
            {
                path: 'user',
                component: createNameComponent(() => import('@/views/main/systemManage/users/index.vue')),
                meta: { title: 'message.menu.systemManage.user' }
            },
            {
                path: 'depart',
                component: createNameComponent(() => import('@/views/main/systemManage/depart/index.vue')),
                meta: { title: 'message.menu.systemManage.depart' }
            },
            {
                path: 'dict',
                component: createNameComponent(() => import('@/views/main/systemManage/dict/index.vue')),
                meta: { title: 'message.menu.systemManage.dict' }
            },
            {
                path: 'config',
                component: createNameComponent(() => import('@/views/main/systemManage/users/index.vue')),
                meta: { title: 'message.menu.systemManage.config' }
            },
            {
                path: 'basic',
                component: createNameComponent(() => import('@/views/main/systemManage/basic/index.vue')),
                meta: { title: 'message.menu.systemManage.basic' }
            }
        ]
    }
]

export default route