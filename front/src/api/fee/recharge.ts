import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/recharge/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}
// 获取数据api
export function getHased(data: object) {
  return request({
    url: '/recharge/hased',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/recharge/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/recharge/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}


// 删除
export function del(data: object) {
  return request({
    url: '/recharge/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}