package cn.gomains.soriys.provide.api.config;

import cn.gomains.soriys.provide.api.dao.UserMapper;
import cn.gomains.soriys.provide.api.entity.LoginUser;
import jakarta.annotation.Resource;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class DaoUserDetailService implements UserDetailsService {
    @Resource
    private UserMapper userMapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // loadUserByUsername 里出错或返回 null，Spring Security 会“吃掉异常”，默认不会打印日志
        // 为什么要“吃掉异常”？
        //
        //👉 安全原因
        //
        //  如果日志或返回信息明确告诉你：
        //  “用户不存在”
        //  “密码错误”
        //  那就可以被攻击者用来枚举用户名
        LoginUser user = userMapper.selectUserByUsername(username);

        if (user == null) {
            throw  new UsernameNotFoundException("用户不存在!");
        }

        return user;
    }
}
