package cn.gomains.soriys.provide.api.dao;

import cn.gomains.soriys.provide.api.entity.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @description menu
 * @author cn.gomains.provide
 * @date 2026-01-25
 */
@Mapper
@Repository
public interface MenuMapper {

    /**
     * 新增
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    int insert(Menu menu);

    /**
     * 刪除
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    int delete(int id);

    /**
     * 更新
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    int update(Menu menu);

    /**
     * 查询 根据主键 id 查询
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    Menu get(int id);

    /**
     * 查询 分页查询
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    List<Menu> pageList(Menu menu);

    /**
     * 查询 分页查询 count
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    int pageListCount(Menu menu);

}