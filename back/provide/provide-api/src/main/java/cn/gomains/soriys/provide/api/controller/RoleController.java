package cn.gomains.soriys.provide.api.controller;

import cn.gomains.soriys.provide.api.entity.Role;
import cn.gomains.soriys.provide.api.service.IRoleService;
import cn.gomains.soriys.provide.common.entity.ResultData;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @description 角色
 * @author cn.gomains.provide
 * @date 2026-01-27
 */
@RestController
@RequestMapping(value = "/sys/role")
public class RoleController extends BaseController {

    @Resource
    private IRoleService roleService;

    /**
     * 新增
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    @PostMapping("/insert")
    public ResultData<Role> insert(Role role){
        return ResultData.to(roleService.insert(role));
    }

    /**
     * 刪除
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    @DeleteMapping("/delete")
    public ResultData<Boolean> delete(int id){
        return ResultData.effect(roleService.delete(id));
    }

    /**
     * 更新
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    @PutMapping("/update")
    public ResultData<Boolean> update(Role role){
        return ResultData.effect(roleService.update(role));
    }

    /**
     * 查询 根据主键 id 查询
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    @GetMapping("/{roleId}")
    public ResultData<Role> get(@PathVariable(name = "roleId") int roleId){
        return ResultData.to(roleService.get(roleId));
    }

    /**
     * 查询 分页查询
     * @author cn.gomains.provide
     * @date 2026/01/27
     **/
    @GetMapping("/pageList")
    public ResultData<Map<String, Object>> pageList(Role menu) {
        return ResultData.to(roleService.pageList(menu));
    }

}