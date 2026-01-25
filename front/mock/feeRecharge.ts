import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三', '性别', '婚姻状况']
export default [
    {
        url: `/mock/recharge/list`,
        method: 'post',
        response: ({ body }) => {
            const { page, pageSize } = body
            return {
                code: 200,
                data: {

                    [`list|10`]: [
                        {
                            'id|+1': 0,
                            'category|1': ['餐费', '护理费', '床位费'],
                            'name|1': ['餐费', '一级护理费', '包房费'],
                            'method|1': ['按月', '按日', '计次'],
                            'price': () => parseFloat((Math.random() * 100).toFixed(2)),
                            'startDate': '@date',
                            'reduction|+1': 1,
                            'endDate': '@date',
                            'count': parseFloat((Math.random() * 100).toFixed(2)),
                            'amount': () => parseFloat((Math.random() * 100).toFixed(2)),
                            'cardNo|+1': 10023232,
                            'recharger': '张三',
                            'rechargeDate': '@date',
                            'isPrint|1': ['是', '否']
                        }
                    ],
                    pager: {
                        page: page,
                        pageSize: pageSize,
                        total: 5
                    }
                },
                msg: ''
            };
        }
    },

    {
        url: `/mock/recharge/hased`,
        method: 'post',
        response: ({ body }) => {
            const { page, pageSize } = body
            return {
                code: 200,
                data: {

                    [`list|10`]: [
                        {
                            "cardNo|+1": 11101,
                            "totalAmount|+1": 11101,
                            "cardAmount|+1": 0,
                            "rechargeType|1": ['现金','微信','支付宝'],
                            "rechargeAmount|+1": 23, 
                            'recharger': '张三',
                            'rechargeDate': '@date',
                            'isPrint|1':['是','否'],
                            "details|6": [
                                {
                                    'id|+1': 0,
                                    'category|1': ['餐费', '护理费', '床位费','其他'],
                                    'name|1': ['餐费', '一级护理费', '包房费','代收代办费'],
                                    'method|1': ['按月', '按日', '计次'],
                                    'price': () => parseFloat((Math.random() * 100).toFixed(2)),
                                    'startDate': '@date',
                                    'reduction|+1': 1,
                                    'endDate': '@date',
                                    'count': parseFloat((Math.random() * 100).toFixed(2)),
                                    'amount': () => parseFloat((Math.random() * 100).toFixed(2)),
                                    'cardNo|+1': 10023232,
                                    'recharger': '张三',
                                    'rechargeDate': '@date',
                                    'isPrint|1': ['是', '否']
                                }
                            ]
                        }
                    ],
                    pager: {
                        page: page,
                        pageSize: pageSize,
                        total: 5
                    }
                },
                msg: ''
            };
        }
    },
    {
        url: `/mock/recharge/add`,
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
        url: `/mock/recharge/update`,
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
        url: `/mock/recharge/del`,
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