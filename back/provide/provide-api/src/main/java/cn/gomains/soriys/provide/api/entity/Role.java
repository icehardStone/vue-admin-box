package cn.gomains.soriys.provide.api.entity;

import cn.gomains.soriys.provide.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;

/**
 * @description 角色
 * @author BEJSON.com
 * @date 2026-01-27
 */
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Role  extends BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    /**
     * roleName
     */
    private String roleName;

    /**
     * 角色ID
     */
    private String roleId;

    /**
     * createBy
     */
    private String createBy;

    /**
     * createDate
     */
    private Date createDate;

    /**
     * isDeleted
     */
    private Integer isDeleted;

    /**
     * roleCode
     */
    private String roleCode;

}