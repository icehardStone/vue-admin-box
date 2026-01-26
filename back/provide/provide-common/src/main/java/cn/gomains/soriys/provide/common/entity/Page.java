package cn.gomains.soriys.provide.common.entity;

import lombok.Data;

@Data
public class Page {
    public Page () {

    }
    public  Page(int page, int pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }
    /**
     * 行号
     */
    private int page;
    /**
     * 每页数量
     */
    private int pageSize;
}
