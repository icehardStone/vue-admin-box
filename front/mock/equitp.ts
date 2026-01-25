import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三','性别','婚姻状况']
export default [
  {
    url: `/mock/equitp/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
           [`list|${pageSize}`]: [
            {
              'equipmentId|+1': 0,
              'equipmentName|1': [
                'SN1111011',
                '跌倒雷达'
              ],
              'equipmentNo|19001-11089': 1,
              'alise': '四号设备',
              'onlineStatusName|1': [
                '在线','离线'
              ],
              'power': 12.23,
              'Sn|+1': 11891,  
                'putArea|1': [
                    '十四栋一楼',
                    '十四栋二楼'
                ],
                'olderlyName': '@cname',
                'erntryTime': '@date',
                'lastOnlineTime': '@datetime',
                'statusName|1': [
                    '已分配','未分配'
                ]
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
    url: `/mock/equitp/add`,
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
    url: `/mock/equitp/update`,
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
    url: `/mock/equitp/updateStatus`,
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
    url: `/mock/equitp/del`,
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