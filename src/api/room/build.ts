import request from '@/utils/system/request'

// 获取数据api
export function getBuilds(data: object) {
  return request({
    url: '/build/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function addBuild(data: object) {
  return request({
    url: '/build/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function updateBuild(data: object) {
  return request({
    url: '/build/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}


// 删除
export function delBuild(data: object) {
  return request({
    url: '/build/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}