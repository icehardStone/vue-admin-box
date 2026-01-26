package cn.gomains.soriys.provide.api.controller;

import cn.gomains.soriys.provide.api.entity.Menu;
import cn.gomains.soriys.provide.api.entity.User;
import cn.gomains.soriys.provide.api.service.IUserService;
import cn.gomains.soriys.provide.common.entity.ResultData;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @description user
 * @author zhengkai.blog.csdn.net
 * @date 2026-01-25
 */
@RestController
@RequestMapping(value = "/sys/user")
public class UserController extends BaseController {

    @Resource
    private IUserService userService;

    /**
     * 新增
     * @author huguanghua
     * @date 2026/01/25
     **/
    @PostMapping("")
    public ResultData<User> insert(User user) {
        return ResultData.to(userService.insert(user));
    }

    /**
     * 刪除
     * @author huguanghua
     * @date 2026/01/25
     **/
    @DeleteMapping("")
    public ResultData<Boolean> delete(int userId){
        return ResultData.effect(userService.delete(userId));
    }

    /**
     * 更新
     * @author huguanghua
     * @date 2026/01/25
     **/
    @PutMapping("")
    public ResultData<Boolean> update(User user){
        return ResultData.effect(userService.update(user));
    }

    /**
     * 查询 根据主键 id 查询
     * @author huguanghua
     * @date 2026/01/25
     **/
    @GetMapping("/{userId}")
    public ResultData<User> get(@PathVariable(name = "userId") int userId){
        return ResultData.to(userService.get(userId));
    }

    /**
     * 查询 分页查询
     *
     * @author huguanghua
     * @date 2026/01/25
     **/
    @GetMapping("/pageList")
    public ResultData<Map<String, Object>> pageList(User entity) {
        return ResultData.to(userService.pageList(entity));
    }
}