package cn.gomains.soriys.provide.api.service.Impl;

import cn.gomains.soriys.provide.api.dao.RoleMapper;
import cn.gomains.soriys.provide.api.entity.Role;
import cn.gomains.soriys.provide.api.service.IRoleService;
import cn.gomains.soriys.provide.common.entity.PageResult;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @description 角色
 * @author BEJSON.com
 * @date 2026-01-27
 */
@Service
public class RoleServiceImpl implements IRoleService {

    @Resource
    private RoleMapper roleMapper;


    @Override
    public Role insert(Role role) {

        // valid
        if (role == null) {
           return null;
        }

        return  roleMapper.insert(role) > 0 ? role : null ;
    }


    @Override
    public int delete(int roleId) {
        return roleMapper.delete(roleId);
    }


    @Override
    public int update(Role role) {
        return roleMapper.update(role);
    }


    @Override
    public Role get(int roleId) {
        return roleMapper.get(roleId);
    }


    @Override
    public Map<String,Object> pageList(Role role) {

        Map<String, Object> maps = new HashMap<>();
        maps.put("list", roleMapper.pageList(role));
        maps.put("pager", new PageResult(role.getPage(), role.getPageSize(), roleMapper.pageListCount(role)));
        return maps;
    }

}