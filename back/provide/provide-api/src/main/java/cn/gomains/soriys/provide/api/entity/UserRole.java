package cn.gomains.soriys.provide.api.entity;

import cn.gomains.soriys.provide.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;

/**
 * @description 用户角色关联表
 * @author BEJSON.com
 * @date 2026-01-27
 */

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class UserRole extends BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    /**
     * 角色ID
     */
    private Integer roleId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * createBy
     */
    private String createBy;

    /**
     * createDate
     */
    private Date createDate;
}