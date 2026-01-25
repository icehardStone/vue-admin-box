export interface MenuItem {
    menuId?: string,
    parentId?: string,
    name?: string,
    component?: string,
    path?: string,
    remark?: string,
    order?: number,
    status?: number
    hideMenu?: boolean,
    title?: string,
    icon?: string,
    classfy?: string,
    type?: MenuType,
}
export enum MenuType {
    Directory = 1,
    Page = 2,
    Button = 3
}

export interface MenuItemList extends MenuItem {
    children?: MenuItem[]
    typeName?: string,
}