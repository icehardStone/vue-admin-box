interface Option<T>  {
  name: keyof optionKey<T>
  value: optionValue<T>
}

type optionKey<T> = {
  [name in keyof T]: string
}

type optionValue<T> = {
  value: T[keyof T]
}


interface Classfy {
  name: string,
  classfy: string,
  entryUrl: string
}
export interface appState {
  isCollapse: boolean,
  contentFullScreen: boolean,
  showLogo: boolean,
  fixedTop: boolean,
  showTabs: boolean,
  isShowMsg: boolean,
  expandOneMenu: boolean,
  elementSize: string,
  classfy: string,
  classfies: Array<Classfy>,
  lang: string,
  theme: {
    primaryColor: '#409eff',
  },
  menuList: Array<unknown>,
  [key:string]:unknown
}

const state = () => ({
  isCollapse: true, // 侧边栏是否收缩展示
  contentFullScreen: false, // 内容是否可全屏展示
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  expandOneMenu: true, // 一次是否只能展开一个菜单
  elementSize: 'default', // element默认尺寸，支持官网'large / default /small'小参数
  lang: '', // 默认采用的国际化方案,初次进入，采用浏览器当前设置的语言，默认采用中文
  isShowMsg: false,  // 是否显示消息栏
  isShowSetting: false, // 是否显示自定义设置栏
  classfy: "comprehensive", // 子系统菜单
  classfies: [],
  theme: {
    state: {
      style: 'default',
      primaryColor: '#409eff',
      menuType: 'side'
    }
  },
  menuList: []
})

// mutations
const mutations = {
  isCollapseChange(state: appState, type: boolean) {
    state.isCollapse = type
  },
  isShowMsg(state: appState, isShowMsg: boolean) {
    state.isShowMsg = isShowMsg
  },
  isShowSetting(state: appState, isShowSetting:boolean) {
    state.isShowSetting = isShowSetting
  },
  contentFullScreenChange(state: appState, type: boolean) {
    state.contentFullScreen = type
  },
  menuListChange(state: appState, arr: []) {
    state.menuList = arr
  },
  classfyChange(state: appState,  classfy: string) {
    state.classfy = classfy
  },
  classfiesChange(state:appState, classfies:Classfy[]) {
    state.classfies = classfies
  },
  stateChange(state: appState, option: Option<appState>) {
    state[option.name] = option.value
  }
}

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
