package cn.gomains.soriys.provide.api.dao;

import cn.gomains.soriys.provide.api.entity.LoginUser;
import cn.gomains.soriys.provide.api.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @description user
 * @author cn.gomains.provide
 * @date 2026-01-25
 */
@Mapper
@Repository
public interface UserMapper {

    /**
     * 新增
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    int insert(User user);

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
    int update(User user);

    /**
     * 查询 根据主键 id 查询
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    User get(int id);

    /**
     * 查询 根据主键 id 查询
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    LoginUser selectUserByUsername(String username);

    /**
     * 查询 分页查询
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    List<User> pageList(User user);

    /**
     * 查询 分页查询 count
     * @author cn.gomains.provide
     * @date 2026/01/25
     **/
    int pageListCount(User user);

}