import { MockMethod } from 'vite-plugin-mock'
const labels = ['颤三', '性别', '婚姻状况']
export default [
  {
    url: `/mock/nursing/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [
            {
              'id|+1': 0,
              'name|1': '@cname',
              'genderName|1': ['男', '女'],
              'age|0-100': 1,
              'workNo|1000-2000': 1,
              'employmentTypeName|1': [
                '劳动合同',
                '劳务合同',
                '劳动合同（派遣）'
              ],
              'educationalLevelName|1': [
                '大学本科',
                '研究生',
                '小学'
              ],
              'workPositionName|1': [
                '部门负责人',
                '普通员工'
              ],
              'departName|1': [
                '财务科',
                '保卫科'
              ],
              'attendanceNo|1-100': 1,
              'qualificationLevelName|1': [
                '一级',
                '二级'
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
    url: '/mock/nursing/:id',  // 使用冒号定义路径参数
    method: 'get',
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          'id': 0,
          'name|1': '@cname',
          'avatar': 'http://114.55.3.60:9006/sanlian_supervise_web/profile/upload/2026/01/24/tmp_5276b7c189f8cb934661b59b7043835fba5eb582f10f4fa9_20260124120832A264.jpg',
          'realName|1': '@cname',
          'idNumber|1': '341226199608015919',
          'gender|1': ['1', '2'],
          'genderName|1': ['男', '女'],
          'age|0-100': 1,
          'phone': '17356897623',
          'nation': '1',
          'nationName': '汉族',
          'residential': '安徽省合肥市',
          'reamrk': '备注',
          'workNo|1000-2000': 1,
          'title': '1',
          'titleName': '中级',
          'affiliation': '1',
          'affiliationName': '群众',
          'employmentType|1': [
            '1',
            '2',
            '3'
          ],
          'employmentTypeName|1': [
            '劳动合同',
            '劳务合同',
            '劳动合同（派遣）'
          ],
          'educationalLevel|1': [
            '1',
            '2',
            '3'
          ],
          'educationalLevelName|1': [
            '大学本科',
            '研究生',
            '小学'
          ],
          'workPosition|1': [
            '1',
            '2'
          ],
          'workPositionName|1': [
            '部门负责人',
            '普通员工'
          ],
          'departId': '1',
          'departName|1': [
            '财务科',
            '保卫科'
          ],
          'attendanceNo|1-100': 1,
          'attendanceType|1': [
            '1', '2', '3'
          ],
          'attendanceTypeName|1': [
            '1', '2', '3'
          ],
          'qualificationLevel|1': [
            '1',
            '2'
          ],
          'qualificationLevelName|1': [
            '一级',
            '二级'
          ]
        }
      }
    },
  },
  {
    url: `/mock/nursing/add`,
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
    url: `/mock/nursing/update`,
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
    url: `/mock/nursing/updateStatus`,
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
    url: `/mock/nursing/del`,
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