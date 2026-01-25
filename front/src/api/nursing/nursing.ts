import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/nursing/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}
// 获取数据api
export function get(id: string| string[]) {
  return request({
    url: `/nursing/${id}`,
    method: 'get',
    baseURL: '/mock',
    // data
  })
}
// 新增
export function add(data: object) {
  return request({
    url: '/nursing/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/nursing/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 状态变更
export function updateStatus(data: object) {
  return request({
    url: '/nursing/updateStatus',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 删除
export function del(data: object) {
  return request({
    url: '/nursing/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}