import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/olderly/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/olderly/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/olderly/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}


// 删除
export function del(data: object) {
  return request({
    url: '/olderly/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}