package cn.gomains.soriys.provide.api.service;

import cn.gomains.soriys.provide.api.entity.User;

import java.util.Map;

/**
 * @description user
 * @author zhengkai.blog.csdn.net
 * @date 2026-01-25
 */
public interface IUserService {

    /**
     * 新增
     */
    public User insert(User user);

    /**
     * 删除
     */
    public int delete(int id);

    /**
     * 更新
     */
    public int update(User user);

    /**
     * 根据主键 id 查询
     */
    public User get(int id);

    /**
     * 分页查询
     */
    public Map<String,Object> pageList(User user);

}