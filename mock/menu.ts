/*
 * @Date: 2023-03-10 19:57:44
 * @Description: 
 */
import { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: `/mock/menu/list`,
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {
          classfies: [
            {

              "name": "综合管理",
              "entryUrl": "/dashboard"
            },
            {

              "name": "出入住",
              "entryUrl": "/old/record"
            },
            {

              "name": "财务管理",
              "entryUrl": "/fee/cost"
            },
            {

              "name": "护理照顾",
              "entryUrl": "/nurse/care"
            },
            {

              "name": "智慧餐饮",
              "entryUrl": "/meal"
            }
          ],
          list: [
            // 综合管理
            {
              "path": "/",
              "redirect": "/dashboard",
              "meta": {
                "title": "dashboard",
                "icon": "sfont system-home",
                "classfy": "comprehensive",
              },
              "children": [
                {
                  "path": "dashboard",
                  "meta": {
                    "title": "首页",
                    "icon": "sfont system-home",
                    "hideClose": true,
                    "classfy": "comprehensive",
                  },
                  "component": "dashboard_dashboard"
                }
              ]
            },
            {
              "path": "/nursing",
              "redirect": "/nursing/record",
              "meta": { "title": "人员管理", "icon": "sfont system-chart", "classfy": "comprehensive", },
              "children": [
                {
                  "path": "record",
                  "meta": { "title": "人员信息", "classfy": "comprehensive" },
                  "component": "nursing_record"
                },
                {
                  "path": "nursingAdd",
                  "name": "nursingAdd",
                  "hideMenu": true,
                  "meta": { "title": "人员新增", "classfy": "comprehensive" },
                  "component": "nursing_nursingAdd"
                },
                {
                  "path": "nursingRelationship",
                  "component": "nursing_nursingRelationship",
                  "meta": { "title": "照护关系", "classfy": "comprehensive" }
                },
                {
                  "path": "nursingRelationshipDetail",
                  "name": "nursingRelationshipDetail",
                  "hideMenu": true,
                  "component": "nursing_nursingRelationshipDetail",
                  "meta": { "title": "关系详情", "classfy": "comprehensive" }
                },
              ]
            },
            {
              "path": "/equipment",
              "redirect": "/equipment/list",
              "meta": { "title": "设备管理", "icon": "sfont system-chart", "classfy": "comprehensive" },
              "children": [
                {
                  "path": "list",
                  "component": "equipment_list",
                  "meta": { "title": "设备列表", "classfy": "comprehensive" }
                },
                {
                  "path": "statics",
                  "component": "equipment_list",
                  "meta": { "title": "设备统计", "classfy": "comprehensive" }
                },
              ]
            },
            {
              "path": "/room",
              "redirect": "/room/setting",
              "meta": { "title": "房间管理", "icon": "sfont system-chart", "classfy": "comprehensive" },
              "children": [
                {
                  "path": "setting",
                  "component": "room_setting",
                  "meta": { "title": "房间设置", "classfy": "comprehensive" }
                },
                {
                  "path": "roomLevel",
                  "component": "room_roomLevel",
                  "meta": { "title": "房间等级", "classfy": "comprehensive" }
                },
                {
                  "path": "roomLevelAdd",
                  "component": "room_roomLevelAdd",
                  "hideMenu": true,
                  "name": "roomLevelAdd",
                  "meta": { "title": "新增房间等级", "classfy": "comprehensive" }
                },
              ]
            },
            {
              "path": "/note",
              "redirect": "/note/list",
              "meta": { "title": "通知公告", "icon": "sfont system-xitongzhuangtai", "classfy": "comprehensive" },
              "alwayShow": true,
              "children": [
                {
                  "path": "list",
                  "component": "note_list",
                  "meta": { "title": "公告列表", "classfy": "comprehensive" }
                }
              ]
            },
            {
              "path": "/log",
              "redirect": "/log/list",
              "meta": { "title": "日志管理", "icon": "sfont system-xitongzhuangtai", "classfy": "comprehensive" },
              "alwayShow": true,
              "children": [
                {
                  "path": "list",
                  "component": "log_list",
                  "meta": { "title": "日志列表", "classfy": "comprehensive" }
                }
              ]
            },
            {
              "path": "/systemManage",
              "redirect": "/systemManage/menu",
              "meta": { "title": "系统管理", "icon": "sfont system-xitongzhuangtai", "classfy": "comprehensive" },
              "alwayShow": true,
              "children": [
                {
                  "path": "menu",
                  "component": "systemManage_menu",
                  "meta": { "title": "菜单", "classfy": "comprehensive" }
                },
                {
                  "path": "role",
                  "component": "systemManage_role",
                  "meta": { "title": "角色", "classfy": "comprehensive" }
                },
                {
                  "path": "user",
                  "component": "systemManage_user",
                  "meta": { "title": "用户", "classfy": "comprehensive" }
                },
                {
                  "path": "depart",
                  "component": "systemManage_depart",
                  "meta": { "title": "部门", "classfy": "comprehensive" }
                },
                {
                  "path": "dict",
                  "component": "systemManage_dict",
                  "meta": { "title": "字典", "classfy": "comprehensive" }
                },
                // {
                //   "path": "config",
                //   "component": "systemManage_config",
                //   "meta": { "title": "配置" }
                // },
                {
                  "path": "basic",
                  "component": "systemManage_basic",
                  "meta": { "title": "机构信息", "classfy": "comprehensive" }
                }
              ]
            }
            ,
            // 出入住
            {
              "path": "/old",
              "redirect": "/old/record",
              "meta": {
                "title": "长者管理",
                "icon": "sfont system-home", "classfy": "check-in-out"
              },
              "children": [
                {
                  "path": 'record',
                  "component": "old_record",
                  "meta": { "title": '老人档案', "classfy": "check-in-out" }
                },
                {
                  "path": 'recordAdd',
                  "name": 'recordAdd',
                  "hideMenu": true,
                  "component": "old_recordAdd",
                  "meta": { title: '新增', "classfy": "check-in-out" }
                },
                {
                  "path": 'bookManage',
                  "component": "old_bookManage",
                  "meta": { title: '预约管理', "classfy": "check-in-out" }
                },
                {
                  "path": 'bookManageAdd',
                  "name": 'bookManageAdd',
                  "hideMenu": true,
                  "component": "old_bookManageAdd",
                  "meta": { title: '新增', "classfy": "check-in-out" }
                }
              ]
            },
            {
              "path": '/room/state',
              "redirect": '/room/state/list',
              "meta": { "title": '床位信息', "icon": 'sfont system-chart', "classfy": "check-in-out" },
              "children": [
                {
                  "path": '/room/state/list',
                  "component": "room_state",
                  "meta": { "title": '床位状态', "icon": 'sfont system-chart', "classfy": "check-in-out" },
                }
              ]
            },
            {
              "path": '/checkIn',
              "redirect": '/checkIn/list',
              "meta": { "title": '入住', "icon": 'sfont system-chart', "classfy": "check-in-out" },
              "children": [
                {
                  "path": 'list',
                  "component": "checkIn_list",
                  "meta": { "title": '入住记录', "classfy": "check-in-out" },
                },
                {
                  "path": 'checkInAdd',
                  "name": 'checkInAdd',
                  "component": "checkIn_checkInAdd",
                  "hideMenu": true,
                  "meta": { title: '新增入住', "classfy": "check-in-out" }
                },
                {
                  "path": 'contract',
                  "component": "old_contract",
                  "meta": { "title": '合同管理', "classfy": "check-in-out" }
                },
                {
                  "path": 'contractAdd',
                  "name": 'contractAdd',
                  "component": "old_contractAdd",
                  "hideMenu": true,
                  "meta": { title: '新增合同', "classfy": "check-in-out" }
                },
              ]
            },
            {
              "path": '/out',
              "redirect": '/out/registration',
              "meta": { "title": '外出管理', "icon": 'sfont system-chart', "classfy": "check-in-out" },
              "children": [
                {
                  "path": 'registration',
                  "component": "out_registration",
                  "meta": { "title": '外出申请', "classfy": "check-in-out" }
                },
                {
                  "path": 'outRegistrationAdd',
                  "name": 'outRegistrationAdd',
                  "component": "out_outRegistrationAdd",
                  "hideMenu": true,
                  "meta": { "title": '新增外出申请', "classfy": "check-in-out" }
                },
                {
                  "path": 'examine',
                  "component": "out_examine",
                  "meta": { "title": '外出审核', "classfy": "check-in-out" }
                },
                {
                  "path": 'statistics',
                  "component": "out_statistics",
                  "meta": { "title": '外出统计', "classfy": "check-in-out" }
                },
              ]
            },
            {
              "path": '/nurse/care',
              "redirect": '/nurse/care/plan',
              "meta": { "title": '护理管理', "icon": 'sfont system-chart', "classfy": "nurse" },
              "children": [
                {
                  "path": 'plan',
                  "component": "nurse_carePlan",
                  "meta": { "title": '护理计划', "classfy": "nurse" }
                },
                {
                  "path": 'record',
                  "component": "nurse_careRecord",
                  "meta": { "title": '护理记录', "classfy": "nurse" }
                },
                {
                  "path": 'disinfection',
                  "component": "nurse_disinfection",
                  "meta": { "title": '护理消毒', "classfy": "nurse" }
                },
                {
                  "path": 'disinfection/record',
                  "component": "nurse_disinfectionRecord",
                  "meta": { "title": '消毒记录', "classfy": "nurse" }
                },
              ]
            },
            {
              "path": '/nurse/setting',
              "redirect": '/nurse/setting/project',
              "meta": { "title": '护理配置', "icon": 'sfont system-chart', "classfy": "nurse" },
              "children": [
                {
                  "path": 'project',
                  "component": "nurse_project",
                  "meta": { "title": '护理项目', "classfy": "nurse" }
                },
                {
                  "path": 'level',
                  "component": "nurse_level",
                  "meta": { "title": '护理级别', "classfy": "nurse" }
                }
              ]
            },
            {
              "path": '/nurse/scheduling',
              "redirect": '/nurse/scheduling/list',
              "meta": { "title": '排班管理', "icon": 'sfont system-chart', "classfy": "nurse" },
              "children": [
                {
                  "path": 'shift',
                  "component": "scheduling_shift",
                  "meta": { "title": '班次记录', "classfy": "nurse" }
                },
                {
                  "path": 'list',
                  "component": "scheduling_list",
                  "meta": { "title": '排班记录', "classfy": "nurse" }
                },
                {
                  "path": 'handover',
                  "component": "scheduling_handover",
                  "meta": { "title": '排班记录', "classfy": "nurse" }
                },
                {
                  "path": 'statistics',
                  "component": "scheduling_statistics",
                  "meta": { "title": '排班统计', "classfy": "nurse" }
                }
              ]
            },
            {
              "path": '/nurse/inspection',
              "redirect": '/nurse/inspection/list',
              "meta": { "title": '智能巡检', "icon": 'sfont system-chart', "classfy": "nurse" },
              "children": [
                {
                  "path": 'task',
                  "component": "inspection_task",
                  "meta": { "title": '巡检任务', "classfy": "nurse" }
                },
                {
                  "path": 'statistics',
                  "component": "inspection_statistics",
                  "meta": { "title": '巡检统计', "classfy": "nurse" }
                }
              ]
            },
            {
              "path": '/meal',
              "redirect": '/meal/weekly',
              "meta": { "title": '每周计划', "icon": 'sfont system-chart', "classfy": "meal" },
              "children": [
                {
                  "path": 'recipe ',
                  "component": "meal_recipe",
                  "meta": { "title": '菜谱管理', "classfy": "meal" }
                },
                {
                  "path": 'weekly',
                  "component": "meal_weekly",
                  "meta": { "title": '每周计划', "classfy": "meal" }
                }
              ]
            },
            {
              "path": '/fee/cost',
              "redirect": '/fee/cost/recharge',
              "meta": { "title": '充值结算', "icon": 'sfont system-chart', "classfy": "fee" },
              "children": [
                {
                  "path": 'account',
                  "component": "fee_account",
                  "meta": { "title": '账户充值', "classfy": "fee" }
                },
                {
                  "path": 'recharge',
                  "component": "fee_recharge",
                  "meta": { "title": '快速结算', "classfy": "fee" }
                },
              ]
            },
            {
              "path": '/fee/setting',
              "redirect": '/fee/setting/project',
              "meta": { "title": '统计分析', "icon": 'sfont system-chart', "classfy": "fee" },
              "children": [
                {
                  "path": 'project',
                  "component": "fee_project",
                  "meta": { "title": '收费项目', "classfy": "fee" }
                },
              ]
            },
            {
              "path": '/fee/statistics',
              "redirect": '/fee/statistics/recharge',
              "meta": { "title": '统计分析', "icon": 'sfont system-chart', "classfy": "fee" },
              "children": [
                {
                  "path": 'statisticsRecharge',
                  "component": "fee_statisticsRecharge",
                  "meta": { "title": '充值费用汇总', "classfy": "fee" }
                },
                {
                  "path": 'statisticsCalculation',
                  "component": "fee_statisticsCalculation",
                  "meta": { "title": '结算费用汇总', "classfy": "fee" }
                }
              ]
            }
          ]
        },
        msg: ""
      };
    }
  },
]