import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三', '性别', '婚姻状况']
export default [
    {
        url: `/mock/room/list`,
        method: 'post',
        response: ({ body }) => {
            const { page, pageSize } = body
            return {
                code: 200,
                data: {
                    [`list|${pageSize}`]: [
                        {
                            'id|+1': 0,
                            'operator': '@cname',
                            'content': '1221',
                            'operateDate': '2023-09-08 11:08:09',
                            'ip': '@ip'
                        }
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
        url: `/mock/room/states`,
        method: 'post',
        response: ({ body }) => {
            let startName = 0;
            return {
                code: 200,
                "data|10": [
                    {
                        "floorId|+1": 12,
                        "floorName": () => {
                            startName += 1;
                            return startName + '层'
                        },
                        "rooms|13": [
                            {
                                "roomId|+1": 12,
                                "roomName|+1": 1122,
                                "state|1": ['eng','hased','nothing'],
                                "olderlys|3": [
                                    {
                                        "olderlyId|+1": 122,
                                        "olderlyName": '@cname',
                                        "imageUrl|1": [
                                            "http://114.55.3.60:9006/sanlian_supervise_web/profile/upload/2026/01/18/tmp_09bd47edc7c8fb648da4674b291fd96bdca02ebd9e43c701_20260118120531A005.jpg",
                                            "http://114.55.3.60:9006/sanlian_supervise_web/profile/upload/2026/01/18/tmp_79aff3e1420ff50952be124855314a4c8121c87e61ea7737_20260118113309A758.jpg",
                                            "http://114.55.3.60:9006/sanlian_supervise_web/profile/upload/2026/01/17/tmp_f9c02f0b68f446d1112be796ec0b4d356707fcee069353af_20260117112228A020.jpg"
                                        ]
                                    }
                                ],
                                "nurses": ['王冰清', '刘玉洁', '张青村']
                            }
                        ]
                    }
                ],
                msg: ''
            };
        }
    },
    {
        url: `/mock/room/add`,
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
        url: `/mock/room/update`,
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
        url: `/mock/room/del`,
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