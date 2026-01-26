package cn.gomains.soriys.provide.api.service.Impl;

import cn.gomains.soriys.provide.api.dao.MenuMapper;
import cn.gomains.soriys.provide.api.entity.Menu;
import cn.gomains.soriys.provide.api.service.IMenuService;
import cn.gomains.soriys.provide.common.entity.Page;
import cn.gomains.soriys.provide.common.entity.PageResult;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @author huguanghua
 * @date 2026-01-25
 */
@Service
public class MenuServiceImpl implements IMenuService {

    @Resource
    private MenuMapper menuMapper;

    @Override
    public Menu insert(Menu menu) {
        return menuMapper.insert(menu) > 0 ? menu : null;
    }

    @Override
    public int delete(int id) {
        return menuMapper.delete(id);
    }

    @Override
    public int update(Menu menu) {
        return menuMapper.update(menu);
    }

    @Override
    public Menu get(int id) {
        return menuMapper.get(id);
    }

    @Override
    public Map<String, Object> pageList(Menu menu) {

        Map<String, Object> maps = new HashMap<>();
        maps.put("list", menuMapper.pageList(menu));
        maps.put("pager", new PageResult(menu.getPage(), menu.getPageSize(), menuMapper.pageListCount(menu)));
        return maps;
    }
}
