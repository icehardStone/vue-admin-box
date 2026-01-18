import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三','性别','婚姻状况']
export default [
  {
    url: `/mock/bookManage/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
           [`list|${pageSize}`]: [
            {
              'id|+1': 0,
              'name': '@name' ,
              'sexName|1': ['男','女'],
              'age|+1': 45,
              'phoneNumber|+1': 17345671010,
               'household':'安徽省合肥市蜀山区',
               'statusName|1': ['排队中','暂缓','不合适','放弃','失联'],
               'bookDate':'@date',
               'remark': '@remark'
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
    url: `/mock/bookManage/add`,
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
    url: `/mock/bookManage/update`,
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
    url: `/mock/bookManage/del`,
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