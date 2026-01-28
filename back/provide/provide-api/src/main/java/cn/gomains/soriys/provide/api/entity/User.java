package cn.gomains.soriys.provide.api.entity;

import cn.gomains.soriys.provide.common.entity.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serial;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

/**
 * @description user
 * @author zhengkai.blog.csdn.net
 * @date 2026-01-25
 */
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class User extends BaseEntity implements  Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    /**
     * userid
     */
    private String userid;

    /**
     * username
     */
    private String username;

    /**
     * realName
     */
    private String realName;

    /**
     * password
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)  // 只写
    private String password;

    /**
     * accountNonExpired
     */
    private  boolean accountNonExpired;

    /**
     * accountNonLocked
     */
    private  boolean accountNonLocked;

    /**
     * credentialsNonExpired
     */
    private  boolean credentialsNonExpired;

    /**
     * enabled
     */
    private  boolean enabled;
}