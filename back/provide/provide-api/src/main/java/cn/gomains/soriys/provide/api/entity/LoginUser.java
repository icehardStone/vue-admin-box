package cn.gomains.soriys.provide.api.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;

@Data
public class LoginUser implements UserDetails {

    /**
     * userid
     */
    private Integer userid;
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
    @JsonIgnore
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
    /**
     * authorities
     */
    private Set<GrantedAuthority> authorities;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
