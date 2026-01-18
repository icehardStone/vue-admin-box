import { MockMethod } from 'vite-plugin-mock'
const roles = ['系统管理员', '平台管理员', '数据统计人员', '信息录入人员', '普通人员']
export default [
  {
    url: `/mock/contact/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [
            {
              'inNo|+1':1008,
              'name':'@cname',
              'bedNo|+1': 1089,
              'contactType|1': [
                '试住','入住'
              ],
              'inDate': '@date',
              'caculatePeriod': '2015~10263',
              'type|1': [
                "TBS01"
              ],
              'statusName|1':[
                '已签约',
                '已保存',
                '已取消'
              ]
            }
          ],
          pager: {
            page: page,
            pageSize: pageSize,
            total: 200
          }
        },
        msg: ''
      };
    }
  },
  {
    url: `/mock/contact/add`,
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
    url: `/mock/contact/update`,
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
    url: `/mock/contact/del`,
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