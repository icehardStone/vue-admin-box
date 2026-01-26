package cn.gomains.soriys.provide.api.controller;

import cn.gomains.soriys.provide.api.entity.Menu;
import cn.gomains.soriys.provide.api.service.IMenuService;
import cn.gomains.soriys.provide.common.entity.Page;
import cn.gomains.soriys.provide.common.entity.ResultData;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @description menu
 * @author huguanghua
 * @date 2026-01-25
 */
@RestController
@RequestMapping("/sys/menu")
public class MenuController extends BaseController {

    @Resource
    private IMenuService menuService;

    /**
     * 新增
     * @author huguanghua
     * @date 2026/01/25
     **/
    @PostMapping("")
    public ResultData<Menu> insert(Menu menu) {
        return ResultData.to(menuService.insert(menu));
    }

    /**
     * 刪除
     * @author huguanghua
     * @date 2026/01/25
     **/
    @DeleteMapping("")
    public ResultData<Boolean> delete(int id) {
        return ResultData.effect(menuService.delete(id));
    }

    /**
     * 更新
     * @author huguanghua
     * @date 2026/01/25
     **/
    @PutMapping("")
    public ResultData<Boolean> update(Menu menu){
        return ResultData.effect(menuService.update(menu));
    }

    /**
     * 查询 根据主键 id 查询
     * @author huguanghua
     * @date 2026/01/25
     **/
    @GetMapping("/{menuId}")
    public ResultData<Menu> get(@PathVariable(name = "menuId") int menuId){
        return ResultData.to(menuService.get(menuId));
    }

    /**
     * 查询 分页查询
     *
     * @author huguanghua
     * @date 2026/01/25
     **/
    @GetMapping("/pageList")
    public ResultData<Map<String, Object>> pageList(Menu entity) {
        return ResultData.to(menuService.pageList(entity));
    }
}