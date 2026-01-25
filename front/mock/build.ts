import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三', '性别', '婚姻状况']
export default [
    {
        url: `/mock/build/list`,
        method: 'post',
        response: ({ body }) => {
            return {
                code: 200,
                [`data|12`]: [
                    {
                        'buildId|+1': 0,
                        'buildName|1': ['1栋', '2栋', '三栋'],
                    }
                ],
                msg: ''
            };
        }
    },
    {
        url: `/mock/build/add`,
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
        url: `/mock/build/update`,
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
        url: `/mock/build/del`,
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