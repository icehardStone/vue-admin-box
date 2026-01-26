package cn.gomains.soriys.provide.common.entity;


import lombok.Getter;

@Getter
public  enum  ResultDataStatus {

    // 成功相关
    SUCCESS(200, "操作成功"),

    // 401 未授权/认证相关
    UNAUTHORIZED(401, "未授权访问"),
    TOKEN_EXPIRED(40101, "访问令牌已过期"),
    TOKEN_INVALID(40102, "访问令牌无效"),
    LOGIN_REQUIRED(40103, "需要登录"),
    CREDENTIALS_INVALID(40104, "用户名或密码错误"),
    ACCOUNT_LOCKED(40105, "账户已被锁定"),
    ACCOUNT_DISABLED(40106, "账户已被禁用"),
    SESSION_EXPIRED(40107, "会话已过期"),
    INSUFFICIENT_PERMISSION(40108, "权限不足"),

    // 其他常见状态码
    BAD_REQUEST(400, "请求参数错误"),
    FORBIDDEN(403, "禁止访问"),
    NOT_FOUND(404, "资源不存在"),
    METHOD_NOT_ALLOWED(405, "请求方法不允许"),
    CONFLICT(409, "资源冲突"),
    INTERNAL_SERVER_ERROR(500, "服务器内部错误"),
    SERVICE_UNAVAILABLE(503, "服务不可用"),
    OPERATION_NOVALIDATE(5001, "服务不可用");

    private final int code;

    private final String desc;

    ResultDataStatus(int code, String desc) {
        this.code  = code;
        this.desc = desc;
    }
}