<template>
    <SlidePanel width="440px" title="自定义设置" v-model:visible="localVisible">
        <div class="setting">
            <el-scrollbar class="setting-body">

                <!-- <p>主题</p> -->
                <h3>字体大小</h3>
                <div class="item-box">
                    <el-radio-group v-model="fontSize" @change="changeSize">
                        <el-radio v-for="i in list" v-bind:key="i.size" :value="i.size">
                            {{ $t(i.name) }}
                        </el-radio>
                    </el-radio-group>
                </div>
                <!-- <el-divider /> -->
                <h3>{{ $t('message.system.setting.style.name') }}</h3>
                <div class="item-box">
                    <theme-icon v-model:active="state.style" v-for="(row, index) in style" :key="index" :name="index"
                        :tip="$t(row.name)" :logo="row.logo.background" :menu="row.menu.background"
                        :header="row.header.background" :main="row.container.background"
                        :activeColor="row.page.color"></theme-icon>
                </div>
                <!-- <el-divider /> -->
                <h3>{{ $t('message.system.setting.primaryColor.name') }}</h3>
                <div class="item-box">
                    <theme-color v-for="(item, key) in themeColorArr" v-model:active="state.primaryColor"
                        v-model:activeTextColor="state.primaryTextColor" :key="key" :color="item.color"
                        :textColor="item.textColor" :tip="item.tip"></theme-color>
                </div>
                <!-- <el-divider /> -->
                <h3>{{ $t('message.system.setting.other.name') }}</h3>
                <!-- <el-divider /> -->
                <div class="list-item" v-for="option in options" :key="option.name">
                    <h3>{{ $t(option.name) }}</h3>
                    <el-switch v-model="option.value" active-color="#13ce66" inactive-color="#ff4949"
                        @change="change(option)">
                    </el-switch>
                </div>
            </el-scrollbar>
        </div>
    </SlidePanel>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, unref, watch } from 'vue'
// import Layer from './layer.vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Plus, Search, Delete, RefreshLeft, Tools, Download } from '@element-plus/icons'
import SlidePanel from '../slidePanel/index.vue'
import { useI18n } from 'vue-i18n'
import themeIcon from './theme/theme-icon.vue'
import themeColor from './theme/theme-color.vue'
import type { Style, Colors } from '@/theme/index'
import { style } from '@/theme/index'
interface Option {
    name: string,
    value: boolean,
    store: string
}
interface State {
    style: string,
    primaryColor: string,
    menuType: string
}
export default defineComponent({
    name: 'crudTable',
    components: {
        RefreshLeft,
        SlidePanel,
        themeIcon,
        themeColor
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        const fontSize = ref('default')
        const elementSize = computed(() => store.state.app.elementSize)
        const list = [
            { size: 'large', name: 'message.system.size.large' },
            { size: 'default', name: 'message.system.size.default' },
            { size: 'small', name: 'message.system.size.small' },
        ]
        const { fullPath } = unref(route)
        const changeSize = (size: string) => {
            console.log('size:' + size)
            store.commit('app/stateChange', {
                name: 'elementSize',
                value: size
            })
        }
        const localVisible = computed({
            set: (value: any) => {
                store.commit('app/isShowSetting', value)
            },
            get: () => store.state.app.isShowSetting
        })

        // 主题
        const { t } = useI18n()
        // 只取值，不做computed
        const state: State = reactive({
            style: store.state.app.theme.state.style,
            primaryColor: store.state.app.theme.state.primaryColor,
            primaryTextColor: store.state.app.theme.state.primaryTextColor,
            menuType: store.state.app.theme.state.menuType
        })

        const themeColorArr = [
            { color: '#409eff', textColor: '#fff', tip: 'message.system.setting.primaryColor.blue' },
            { color: '#d60f20', textColor: '#fff', tip: 'message.system.setting.primaryColor.red' },
            { color: '#ac25e6', textColor: '#fff', tip: 'message.system.setting.primaryColor.violet' },
            { color: '#4dc86f', textColor: '#fff', tip: 'message.system.setting.primaryColor.green' },
            { color: '#13c2c2', textColor: '#fff', tip: 'message.system.setting.primaryColor.cyan' },
            { color: '#333', textColor: '#fff', tip: 'message.system.setting.primaryColor.black' }
        ]
        // debugger
        const setTheme = () => {
            const userTheme = style[state.style]
            const body = document.getElementsByTagName('body')[0]
            // 设置全局顶部body上的class名称，即为主题名称，便于自定义配置符合当前主题的样式统一入口
            body.setAttribute('data-theme', state.style)
            // 需要设置的颜色参照theme.scss，位置：assets/style/theme.scss
            // 设置主题色
            body.style.setProperty('--system-primary-color', state.primaryColor)
            for (let i in userTheme) {
                if (i === 'name') {
                    continue;
                }
                const item: any = userTheme[i as keyof Colors]
                for (let y in item) {
                    let cssVarName = '--system-' + i + '-' + y.replace(/([A-Z])/g, "-$1").toLowerCase()
                    body.style.setProperty(cssVarName, item[y])
                }
            }
        }
        // 监听数据的变化
        watch(state, (newVal) => {
            const theme = {
                state: {
                    ...state
                }
            }
            store.commit('app/stateChange', {
                name: 'theme',
                value: theme
            })
            setTheme()
        })
        let drawer = ref(false)
        const options = reactive([
            { name: 'message.system.setting.other.showLogo', value: store.state.app.showLogo, store: 'showLogo' },
            { name: 'message.system.setting.other.showBreadcrumb', value: store.state.app.showTabs, store: 'showTabs' },
            { name: 'message.system.setting.other.keepOnlyOneMenu', value: store.state.app.expandOneMenu, store: 'expandOneMenu' },
            { name: 'message.system.setting.other.collapseMenu', value: store.state.app.collapseMenu, store: 'collapseMenu' }
        ])
        const drawerChange = (value: boolean) => {
            drawer.value = value
        }
        const change = (option: Option) => {
            store.commit(`app/stateChange`, { name: option.store, value: option.value })
        }
        setTheme()
        return {
            Plus,
            Search,
            Delete,
            RefreshLeft,
            Download,
            Tools,
            fullPath,
            list,
            fontSize,
            changeSize,
            localVisible,
            SlidePanel,
            drawer,
            options,
            state,
            style,
            themeColorArr,
            drawerChange,
            change
        }
    }
})
</script>

<style scoped>
.setting-body {
    padding: 0 5px 30px 0;
}

.setting {
    text-align: left;
}

i {
    cursor: pointer;

    &:focus {
        outline: none;
    }
}

.list {
    padding: 0 20px;

    &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        span {
            font-size: 16px;
        }
    }
}

h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    padding: 0 20px;

    &:first-child {
        margin-top: 0;
    }
}

.item-box {
    text-align: left;
    padding-left: 20px;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
