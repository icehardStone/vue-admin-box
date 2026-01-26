package cn.gomains.soriys.provide.api.service.Impl;

import cn.gomains.soriys.provide.api.dao.UserMapper;
import cn.gomains.soriys.provide.api.entity.User;
import cn.gomains.soriys.provide.api.service.IUserService;
import cn.gomains.soriys.provide.common.entity.PageResult;
import jakarta.annotation.Resource;
import org.apache.commons.lang.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @description user
 * @author zhengkai.blog.csdn.net
 * @date 2026-01-25
 */
@Service
public class UserServiceImpl implements IUserService {

    @Resource
    private UserMapper userMapper;


    @Resource
    private PasswordEncoder passwordEncoder;


    @Override
    public User insert(User user) {
        if (StringUtils.isNotEmpty(user.getPassword())) {
            user.setPassword(
                    passwordEncoder.encode(user.getPassword())
            );
        }
        return userMapper.insert(user) > 0 ? user : null;
    }


    @Override
    public int delete(int id) {
        return userMapper.delete(id);
    }


    @Override
    public int update(User user) {
        return userMapper.update(user);
    }


    @Override
    public User get(int id) {
        return userMapper.get(id);
    }


    @Override
    public Map<String,Object> pageList(User user) {

        Map<String, Object> maps = new HashMap<>();
        maps.put("list", userMapper.pageList(user));
        maps.put("pager", new PageResult(user.getPage(), user.getPageSize(), userMapper.pageListCount(user)));
        return maps;
    }

}