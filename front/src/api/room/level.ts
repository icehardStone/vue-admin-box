import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/level/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/level/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/level/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}


// 删除
export function del(data: object) {
  return request({
    url: '/level/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}
