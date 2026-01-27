package cn.gomains.soriys.provide.api.dao;

import cn.gomains.soriys.provide.api.entity.Role;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @description 角色
 * @author cn.gomains.provide
 * @date 2026-01-27
 */
@Mapper
@Repository
public interface RoleMapper {

    /**
     * 新增
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int insert(Role role);

    /**
     * 刪除
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int delete(int roleId);

    /**
     * 更新
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int update(Role role);

    /**
     * 查询 根据主键 id 查询
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    Role get(int roleId);

    /**
     * 查询 分页查询
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    List<Role> pageList(Role role);

    /**
     * 查询 分页查询 count
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int pageListCount(Role role);

}