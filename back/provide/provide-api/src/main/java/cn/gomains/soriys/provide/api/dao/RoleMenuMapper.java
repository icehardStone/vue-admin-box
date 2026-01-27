package cn.gomains.soriys.provide.api.dao;

import cn.gomains.soriys.provide.api.entity.RoleMenu;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @description rolemenu
 * @author BEJSON.com
 * @date 2026-01-27
 */
@Mapper
@Repository
public interface RoleMenuMapper {

    /**
     * 新增
     * @author BEJSON.com
     * @date 2026/01/27
     **/
    int insert(RoleMenu rolemenu);

    /**
     * 刪除
     * @author BEJSON.com
     * @date 2026/01/27
     **/
    int delete(RoleMenu rolemenu);

    /**
     * 更新
     * @author BEJSON.com
     * @date 2026/01/27
     **/
    int update(RoleMenu rolemenu);


    /**
     * 查询 分页查询
     * @author BEJSON.com
     * @date 2026/01/27
     **/
    List<RoleMenu> pageList(RoleMenu rolemenu);
}