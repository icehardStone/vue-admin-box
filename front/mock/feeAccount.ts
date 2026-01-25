import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三','性别','婚姻状况']
export default [
  {
    url: `/mock/account/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
        
           [`list|300`]: [
            {
              'id|+1': 0,
              'cardNo|+1': 1000253 ,
              'blance': () =>  parseFloat((Math.random() * 100).toFixed(2)),
              'statusName|1': [
                '正常', '停用', '注销'
              ],
              'status|1':[0,1],
              'createTime': '@date',
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
    url: `/mock/account/add`,
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
    url: `/mock/account/update`,
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
    url: `/mock/account/del`,
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