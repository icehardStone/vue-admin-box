package cn.gomains.soriys.provide.api.entity;

import cn.gomains.soriys.provide.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

/**
 * @description menu
 * @author zhengkai.blog.csdn.net
 * @date 2026-01-25
 */

@EqualsAndHashCode(callSuper = false)
@Data
@NoArgsConstructor
public class Menu extends BaseEntity implements Serializable {

    /**
     * serialVersionUID
     */
    @Serial
    private static final long serialVersionUID = 1L;

    /**
     * parentId
     */
    private Integer parentId;

    /**
     * name
     */
    private String name;

    /**
     * component
     */
    private String component;

    /**
     * path
     */
    private String path;

    /**
     * remark
     */
    private String remark;

    /**
     * order
     */
    private Integer order;

    /**
     * status
     */
    private Integer status;

    /**
     * hideMenu
     */
    private Boolean hideMenu;

    /**
     * title
     */
    private String title;

    /**
     * icon
     */
    private String icon;

    /**
     * classfy
     */
    private String classfy;

    /**
     * type
     */
    private Integer type;
}