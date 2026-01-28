package cn.gomains.soriys.provide.api.controller;


import java.time.Instant;
import java.util.Map;
import java.util.stream.Collectors;

import cn.gomains.soriys.provide.api.entity.LoginRequest;
import cn.gomains.soriys.provide.api.entity.LoginUser;
import cn.gomains.soriys.provide.common.entity.ResultData;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.*;

/**
 * A controller for the token resource.
 *
 * @author Josh Cummings
 */
@RestController
@RequestMapping("/connect")
public class TokenController {

    private final AuthenticationManager authenticationManager;
    private final JwtEncoder jwtEncoder;

    public TokenController(AuthenticationManager authenticationManager,
                          JwtEncoder jwtEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtEncoder = jwtEncoder;
    }

    @PostMapping("/authorize")
    public ResultData<Map<String, Object>> authorize(@RequestBody LoginRequest request) {

        // 会调用 cn.gomains.soriys.provide.api.config.DaoUserDetailService中的loadUserByUsername 方法
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        LoginUser user = (LoginUser)authentication.getPrincipal();
        Instant now = Instant.now();
        long expiry = 3600;

        String scope = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(" "));

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("self")
                .issuedAt(now)
                .expiresAt(now.plusSeconds(expiry))
                .subject(authentication.getName())
                .claim("scope", scope)
                .claim("userid", user.getUserid())
                .claim("test", "test1")
                .build();

        String token = jwtEncoder.encode(
                JwtEncoderParameters.from(claims)
        ).getTokenValue();

        return ResultData.to(Map.of("token", token,"userinfo", user));
    }
}