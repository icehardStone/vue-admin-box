package cn.gomains.soriys.provide.api.controller;

import cn.gomains.soriys.provide.api.entity.LoginUser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;

/**
 * @author huguanghua
 * @date  2026-01-26
 *
 * @description 基础控制器
 */
public class BaseController {

    /**
     * 获取用户名称
     * @return username
     */
    private String getUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null) {
            return null;
        }
        Object principal = authentication.getPrincipal();
        if (principal instanceof  org.springframework.security.oauth2.jwt.Jwt) {
            return  ((Jwt)principal).getClaim("sub");
        }
        else if (principal instanceof LoginUser) {
            return ((LoginUser) principal).getUsername();
        }
        return null;
    }

    /**
     * 获取用户id
     * @return userid
     */
    private Integer getUserid() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null) {
            return null;
        }
        Object principal = authentication.getPrincipal();
        if (principal instanceof  org.springframework.security.oauth2.jwt.Jwt) {
            return  ((Jwt)principal).getClaim("userid");
        }
        else if (principal instanceof LoginUser) {
            return ((LoginUser) principal).getUserid();
        }
        return null;
    }
}
