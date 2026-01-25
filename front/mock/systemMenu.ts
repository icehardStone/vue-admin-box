import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三', '性别', '婚姻状况']
export default [
    {
        url: `/mock/system/menu/list`,
        method: 'post',
        response: ({ body }) => {
            const { page, pageSize } = body
            return {
                code: 200,
                data: {
                    [`list`]: [
                        // 综合管理
                        {
                            "menuId": 111,
                            "path": "/",
                            "redirect": "/dashboard",
                            "status": "1",
                            "order": 1,
                            "title": "dashboard",
                            "icon": "sfont system-home",
                            "classfy": "comprehensive",
                            "children": [
                                {
                                    "path": "dashboard",
                                    "title": "首页",
                                    "icon": "sfont system-home",
                                    "hideClose": true,
                                    "classfy": "comprehensive",
                                    "component": "dashboard_dashboard"
                                }
                            ]
                        }, {
                            "menuId": 1121,
                            "path": "/",
                            "redirect": "/dashboard",
                            "status": "1",
                            "order": 1,
                            "title": "dashboard",
                            "icon": "sfont system-home",
                            "classfy": "comprehensive",
                            "children": [
                                {
                                    "path": "dashboard",
                                    "title": "首页",
                                    "icon": "sfont system-home",
                                    "hideClose": true,
                                    "classfy": "comprehensive",
                                    "component": "dashboard_dashboard"
                                }
                            ]
                        },
                    ],
                    pager: {
                        page: page,
                        pageSize: pageSize,
                        total: 198
                    }
                },
                msg: ''
            };
        }
    },
    {
        url: `/mock/system/menu/add`,
        method: 'post',
        response: ({ body }) => {
            return {
                code: 200,
                data: {},
                msg: ''
            };
        }
    },
    {
        url: `/mock/system/menu/update`,
        method: 'post',
        response: ({ body }) => {
            return {
                code: 200,
                data: {},
                msg: ''
            };
        }
    },
    {
        url: `/mock/system/menu/updateStatus`,
        method: 'post',
        response: ({ body }) => {
            return {
                code: 200,
                data: {},
                msg: ''
            };
        }
    },
    {
        url: `/mock/system/menu/del`,
        method: 'post',
        response: ({ body }) => {
            return {
                code: 200,
                data: {},
                msg: ''
            };
        }
    },
]