package cn.gomains.soriys.provide.common.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ResultData<T> {

    public ResultData(T data, ResultDataStatus status) {
        this.data = data;
        this.status = status;
    }

    public ResultData(T data, ResultDataStatus status, String selfMsg) {
        this.data = data;
        this.status = status;
        this.selfMsg = selfMsg;
    }

    private final ResultDataStatus status;

    @Setter
    @Getter
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private T data;

    private String selfMsg;

    public String getMsg() {
        if (StringUtils.isNotEmpty(selfMsg)) {
            return this.selfMsg;
        }
        return status.getDesc();
    }

    public int getCode() {
        return status.getCode();
    }

    // ==================== 静态工厂方法 ====================

    /**
     * 成功响应（无数据）
     */
    public static <T> ResultData<T> success() {
        return new ResultData<>(null, ResultDataStatus.SUCCESS);
    }

    /**
     * 成功响应（带数据）
     */
    public static <T> ResultData<T> success(T data) {
        return new ResultData<>(data, ResultDataStatus.SUCCESS);
    }

    /**
     * 失败响应（使用默认失败状态）
     */
    public static <T> ResultData<T> failure() {
        return new ResultData<>(null, ResultDataStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * 失败响应（自定义状态码）
     */
    public static <T> ResultData<T> failure(ResultDataStatus status) {
        return new ResultData<>(null, status);
    }

    /**
     * 失败响应（自定义状态码和数据）
     */
    public static <T> ResultData<T> failure(ResultDataStatus status, T data) {
        return new ResultData<>(data, status);
    }

    /**
     * 根据返回值判断是否成功还是失败
     */
    public static <T> ResultData<T> to(T data) {
        return data != null ? success(data) : failure(ResultDataStatus.NOT_FOUND);
    }
    /**
     * 根据返回值判断是否成功还是失败
     */
    public static <T> ResultData<Boolean> effect(Integer effect) {
        return effect >= 0 ? success(true) : failure(ResultDataStatus.OPERATION_NOVALIDATE);
    }
    /**
     * 根据返回值判断是否成功还是失败
     */
    public static <T> ResultData<Map<String, Object>> page( Page page, T data) {
        Map<String, Object> maps = new HashMap<>();
        maps.put("pager", page);
        maps.put("list", data);
        return data != null ? success(maps) : failure();
    }
}
