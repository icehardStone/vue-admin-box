package cn.gomains.soriys.provide.api.service.Impl;

import cn.gomains.soriys.provide.api.dao.MenuMapper;
import cn.gomains.soriys.provide.api.entity.Menu;
import cn.gomains.soriys.provide.api.entity.vo.UserMenuClassfyVo;
import cn.gomains.soriys.provide.api.entity.vo.UserMenuVo;
import cn.gomains.soriys.provide.api.service.IMenuService;
import cn.gomains.soriys.provide.common.entity.Page;
import cn.gomains.soriys.provide.common.entity.PageResult;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

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
    @Override
    public Map<String, Object> userList(Menu menu) {
        List<UserMenuClassfyVo> classifyVows = new ArrayList<>();
        classifyVows.add((new UserMenuClassfyVo("综合管理", "/dashboard")));
        classifyVows.add((new UserMenuClassfyVo("出入住", "/old/record")));
        classifyVows.add((new UserMenuClassfyVo("财务管理", "/fee/cost")));
        classifyVows.add((new UserMenuClassfyVo("护理照顾", "/nurse/care")));
        classifyVows.add((new UserMenuClassfyVo("智慧餐饮", "/meal")));
        List<Menu> menus = menuMapper.pageList(menu);

        Map<Integer, List<Menu>> menuGroupMap =
                menus.stream()
                        .collect(Collectors.groupingBy(Menu::getParentId));

        return Map.of(
                "classfies", classifyVows,
                "list",buildUserMenuVo(menuGroupMap, 0));
    }

    /**
     * 构建用户菜单VO
     * @param menuGroupMap 菜单组
     * @param parentId 菜单父ID
     * @return 用户菜单VO列表
     */
    private List<UserMenuVo> buildUserMenuVo(Map<Integer, List<Menu>> menuGroupMap, Integer parentId) {
        List<UserMenuVo> menuVos = new ArrayList<>();
        List<Menu> menus = menuGroupMap.get(parentId);
        if (menus == null || menus.isEmpty()) {
            return menuVos;
        }
        for (Menu menu : menus) {
            UserMenuVo menuVo = new UserMenuVo(menu);
            menuVos.add(menuVo);
            menuVo.setChildren(
                    buildUserMenuVo(menuGroupMap, menu.getMenuId())
            );
        }
        return menuVos;
    }
}
