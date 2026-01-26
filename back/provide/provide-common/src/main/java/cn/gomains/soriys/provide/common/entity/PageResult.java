package cn.gomains.soriys.provide.common.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class PageResult extends  Page {
    /**
     * 总数
     */
    private int total;

    public PageResult(int page, int pageSize,int total) {
        super(page, pageSize);
        this.total = total;
    }
}
