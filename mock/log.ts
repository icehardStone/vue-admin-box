import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三','性别','婚姻状况']
export default [
  {
    url: `/mock/log/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
           [`list|${pageSize}`]: [
            {
              'id|+1': 0,
              'operator': '@cname' ,
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
    url: `/mock/log/add`,
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
    url: `/mock/log/update`,
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
    url: `/mock/log/del`,
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