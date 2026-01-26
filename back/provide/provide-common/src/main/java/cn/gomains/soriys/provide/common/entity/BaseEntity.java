package cn.gomains.soriys.provide.common.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

/**
 * @author huguanghua
 * @date 2026-01-25
 */
@Data
public class BaseEntity {

    // 1. 只反序列化（接收），不序列化（返回）
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)  // 只写
    private int page;

    // 1. 只反序列化（接收），不序列化（返回）
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)  // 只写
    private int pageSize;
}
