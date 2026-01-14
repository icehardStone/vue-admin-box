import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/project/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/project/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/project/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}


// 删除
export function del(data: object) {
  return request({
    url: '/project/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}