package cn.gomains.soriys.provide.api.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @author: huguanghua
 */
@RestController
@RequestMapping("/version")
public class VersionController
{
    /**
     * 获取版本号
     * @return 信息
     */
    @GetMapping("")
    public Map<String, String> getVersion() {
        Map<String,String> version = new HashMap<>();
        version.put("version", "1.0.0");
        return version;
    }
}
