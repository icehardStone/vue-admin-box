<template>
  <header>
    <div class="left-box">
      <!-- 收缩按钮 -->
      <div class="left-box-item menu-icon" @click="opendStateChange">
        <i class="sfont head-fold" :class="isCollapse ? 'system-s-unfold' : 'system-s-fold'"></i>
      </div>
      <div class="left-box-item">
        <div style="margin-right: 10px;"> <el-icon size="24">
            <HomeFilled />
          </el-icon></div>
        <div>主页</div>
      </div>
    </div>
    <div class="center-box">
      <el-input style="max-width: 340px" placeholder="支持通过名称等搜索资源" :prefix-icon="Search" />
    </div>
    <div class="right-box">
      <!-- 快捷功能按钮 -->
      <div class="function-list">
        <el-tooltip effect="light" content="最大化" placement="bottom-end">
          <div class="function-list-item function-list-item-hover hidden-sm-and-down"><Full-screen /></div>
        </el-tooltip>
        <el-tooltip effect="light" content="消息" placement="bottom-end">
          <div @click="openMsg" class="function-list-item function-list-item-hover">
            <el-badge 
              :value="100" 
              badge-style="font-size: 12px"
              type="primary"
              class="item" 
              :offset="[5, -3]">
              <el-icon size="18">
                <Bell />
              </el-icon>
            </el-badge>
          </div>
        </el-tooltip>
        <el-tooltip effect="light" content="自定义设置" placement="bottom-end">
          <div class="function-list-item function-list-item-hover">
            <el-icon size="18">
              <Postcard />
            </el-icon>
          </div>
        </el-tooltip>
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="user-info-name">
          梦三
        </div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <Userdetail class="user-info-detail"></Userdetail>
      </div>
       <Msg
       />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import FullScreen from '../../components/functionList/fullscreen.vue'
import Word from '../../components/functionList/word.vue'
import SizeChange from '../../components/functionList/sizeChange.vue'
import Github from '../../components/functionList/github.vue'
import Theme from '../../components/functionList/theme.vue'
import Breadcrumb from './Breadcrumb.vue'
import PasswordLayer from '../../components/passwordLayer.vue'
import Msg from '@/layout/components/functionList/msg.vue'
import Userdetail from '@/layout/components/functionList/userdetail.vue'
import { Search, Bell, Postcard, HomeFilled } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    FullScreen,
    Breadcrumb,
    Word,
    SizeChange,
    Github,
    Theme,
    PasswordLayer,
    Search,
    Bell,
    Postcard,
    HomeFilled,
    Userdetail,
    Msg
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const layer = reactive({
      show: false,
      showButton: true
    })
    const isCollapse = computed(() => store.state.app.isCollapse)
    // isCollapse change to hide/show the sidebar
    const opendStateChange = () => {
      store.commit('app/isCollapseChange', !isCollapse.value)
    }
    const isShowMsg = computed(() => store.state.app.showMsg)
    const openMsg = () => {
       store.commit('app/isShowMsg', !isShowMsg.value)
    }

    // login out the system
    const loginOut = () => {
      store.dispatch('user/loginOut')
    }

    const showPasswordLayer = () => {
      layer.show = true
    }
    return {
      isCollapse,
      layer,
      opendStateChange,
      loginOut,
      showPasswordLayer,
      Search,
      Bell,
      Postcard,
      HomeFilled,
      Msg,
      openMsg
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: var(--system-header-background);
  padding-right: 22px;
}

.left-box {
  height: 100%;
  display: flex;
  align-items: center;

  .left-box-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
    height: 100%;
    padding: 0 10px;
    &:hover {
      background-color: var(--system-header-item-hover-color);
    }

    i {
      color: var(--system-header-text-color);
    }
  }

  color: var(--system-header-text-color);

  .menu-icon {
    width: 60px;
    font-size: 25px;
    font-weight: 100;
  }
}

.center-box {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
}

.right-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .function-list {
    display: flex;
    height: 100%;

    .function-list-item {
      // width: 30px;
      padding: 0 16px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      :deep(i) {
        color: var(--system-header-text-color);
      }
    }

    .function-list-item-hover {
      &:hover {
        cursor: pointer;
        background-color: var(--system-header-item-hover-color);
      }
    }
  }

  .user-info {
    display: flex;
    cursor: pointer;
    flex-direction: row;
    margin-left: 20px;
    justify-content: center;
    align-items: center;

    .user-info-name {
      color: var(--system-header-text-color);
      margin-right: 0.5em;
    }

    &:hover {
      .user-info-detail {
        visibility: visible;
      }
    }
  }
}

.head-fold {
  font-size: 20px;
}
</style>