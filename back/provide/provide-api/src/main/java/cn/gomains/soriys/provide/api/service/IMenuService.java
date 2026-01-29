package cn.gomains.soriys.provide.api.service;

import cn.gomains.soriys.provide.api.entity.Menu;
import cn.gomains.soriys.provide.common.entity.Page;

import java.util.Map;

/**
 * @description menu
 * @author zhengkai.blog.csdn.net
 * @date 2026-01-25
 */
public interface IMenuService
{

    /**
     * 新增
     */
    public Menu insert(Menu menu);

    /**
     * 删除
     */
    public int delete(int id);

    /**
     * 更新
     */
    public int update(Menu menu);

    /**
     * 根据主键 id 查询
     */
    public Menu get(int id);

    /**
     * 分页查询
     */
    public Map<String,Object> pageList(Menu menu);
    /**
     * 用户菜单列表
     */
    public Map<String,Object> userList(Menu menu);

}