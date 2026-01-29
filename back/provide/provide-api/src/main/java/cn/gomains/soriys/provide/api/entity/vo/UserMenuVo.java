package cn.gomains.soriys.provide.api.entity.vo;

import cn.gomains.soriys.provide.api.entity.Menu;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class UserMenuVo {
    private UserMenuMetaVo meta = new UserMenuMetaVo();
    private String path;
    private String component;
    private List<UserMenuVo> children = new ArrayList<>();

    public UserMenuVo(Menu menu) {
        this.meta.setIcon(menu.getIcon());
        this.meta.setTitle(menu.getTitle());
        this.meta.setClassfy(menu.getClassfy());
        this.setPath(menu.getPath());
        this.setComponent(menu.getComponent());
    }
    public  String getRedirect(){
        return null;
    }
}
