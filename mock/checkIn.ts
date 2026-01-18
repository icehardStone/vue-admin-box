import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三','性别','婚姻状况']
export default [
  {
    url: `/mock/checkIn/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
        
           [`list|${pageSize}`]: [
            {
              'id|+1': 0,
              'cardNo|+1': 1000253 ,
              'name': '@cname',
              'bedNo|+1':  1078,
              'phone': '17356897562',
              'residentialAddress': '安徽省合肥市蜀山区',
              'careLevel|1': ['一级','二级','三级','四级'],
              'guardianer': '@cname',
              'guardianerPhone': '17356897562',
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
    url: `/mock/checkIn/add`,
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
    url: `/mock/checkIn/update`,
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
    url: `/mock/checkIn/del`,
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