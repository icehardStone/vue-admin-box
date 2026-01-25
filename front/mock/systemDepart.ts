import { MockMethod } from 'vite-plugin-mock'
const roles = ['系统管理员', '平台管理员', '数据统计人员', '信息录入人员', '普通人员']
export default [
  {
    url: `/mock/system/depart/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          list: [
            {  'id': 1, name: '研发部', parentId: '0', status: 1, remark: '111',charger: '颤三',
              'children': [
                {  'id': 3, name: '研发一组', parentId: '1', status: 1, remark: '111' },
              ]
             },
            {  'id': 2, name: '商务部', slug: '11', status: 0, remark: '负责商务信息',charger: '十六岁',
              'children':[
                
              ]
             },
          ],
          pager: {
            page: page,
            pageSize: pageSize,
            total: 2
          }
        },
        msg: ''
      };
    }
  },
  {
    url: `/mock/system/depart/add`,
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
    url: `/mock/system/depart/update`,
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
    url: `/mock/system/depart/updateStatus`,
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
    url: `/mock/system/depart/del`,
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