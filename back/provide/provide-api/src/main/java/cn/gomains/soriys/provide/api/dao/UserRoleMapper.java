package cn.gomains.soriys.provide.api.dao;

import cn.gomains.soriys.provide.api.entity.UserRole;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @description 用户角色关联表
 * @author cn.gomains.provide
 * @date 2026-01-27
 */
@Mapper
@Repository
public interface UserRoleMapper {

    /**
     * 新增
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int insert(UserRole userRole);

    /**
     * 刪除
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int delete(int id);

    /**
     * 更新
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    int update(UserRole userRole);


    /**
     * 查询 分页查询
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    List<UserRole> pageList(UserRole userRole);


}