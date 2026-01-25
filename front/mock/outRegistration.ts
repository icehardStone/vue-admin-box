import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三','性别','婚姻状况']
export default [
  {
    url: `/mock/outRegistration/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
           [`list|${pageSize}`]: [
            {
              'id|+1': 0,
              'inNo|+1': 10089,
              'bedNo|+1': 100891, 
              'sexName|1':['男','女'],
              'phone':'@phone',
              'outDate': '@date',
              'leaveDays|+1': 10,
              'stopFeeDays|+1': 12,
              'actualReturnDate': '@date',
              'statusName|1': [
                    '已审核',
                    '未审核'
              ],
              'reason': '外出理由',
              'remark': '备注',
              'name': '@cname',
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
    url: `/mock/outRegistration/add`,
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
    url: `/mock/outRegistration/update`,
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
    url: `/mock/outRegistration/del`,
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