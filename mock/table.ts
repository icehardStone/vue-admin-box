import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: `/mock/table/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [{
            'id|+1': 0,
            'name': '@cname',
            "number|+1": 500,
            "choose|1": [1, 2, 3, 4],
            "radio|1": [1, 2, 3]
          }],
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
    url: `/mock/table/category`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [{
            'id|+1': 100 * page,
            'name': '@ctitle'
          }],
          pager: {
            page: page,
            pageSize: pageSize,
            total: 100
          }
        },
        msg: ''
      };
    }
  },
  {
    url: `/mock/table/tree`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: [{
          label: '基础费用',
          id: 1,
        }, {
          label: '其他费用',
          id: 2,
          children: [{
            label: '前端',
            id: 3
          }, {
            label: '后端',
            id: 4
          }]
        }],
        msg: ''
      };
    }
  },
  {
    url: `/mock/table/add`,
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
    url: `/mock/table/update`,
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
    url: `/mock/table/del`,
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