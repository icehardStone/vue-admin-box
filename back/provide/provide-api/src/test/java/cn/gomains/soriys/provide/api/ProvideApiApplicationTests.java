package cn.gomains.soriys.provide.api;

import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class ProvideApiApplicationTests
{

    @Test
    void contextLoads()
    {
    }


    @Resource
    private PasswordEncoder passwordEncoder;

    @Test
    void textEncoder() {
      System.out.println(passwordEncoder.encode("password"));
    }
}
