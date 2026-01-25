import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/outRegistration/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/outRegistration/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/outRegistration/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}


// 删除
export function del(data: object) {
  return request({
    url: '/outRegistration/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}