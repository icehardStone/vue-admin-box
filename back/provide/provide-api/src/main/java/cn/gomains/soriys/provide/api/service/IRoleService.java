package cn.gomains.soriys.provide.api.service;

import cn.gomains.soriys.provide.api.entity.Role;

import java.util.Map;

/**
 * @description 角色
 * @author BEJSON.com
 * @date 2026-01-27
 */
public interface IRoleService {

    /**
     * 新增
     */
    public Role insert(Role role);

    /**
     * 删除
     */
    public int delete(int roleId);

    /**
     * 更新
     */
    public int update(Role role);

    /**
     * 根据主键 id 查询
     */
    public Role get(int roleId);

    /**
     * 分页查询
     */
    public Map<String,Object> pageList(Role role);

}