package cn.gomains.soriys.provide.api.config;


import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    public static final String SECURITY_SCHEME_NAME = "BearerAuth";
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Your API Documentation")
                        .version("v1.0")
                        .description("This is the API documentation for your project"))
                        // 🔑 全局安全要求
                        .addSecurityItem(new SecurityRequirement().addList(SECURITY_SCHEME_NAME))
                        // 🔑 定义安全方案
                        .components(new Components()
                                .addSecuritySchemes(SECURITY_SCHEME_NAME,
                                        new SecurityScheme()
                                                .name("Authorization")
                                                .type(SecurityScheme.Type.HTTP)
                                                .scheme("bearer")
                                                .bearerFormat("JWT")
                                )
                        );
    }
}
