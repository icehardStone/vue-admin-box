<template>
    <div class="user-info-detail">
        <el-card style="min-width: 320px" body-style="padding: 0px;">
            <div class="card-header">
                <div class="card-header-title">
                    <div>梦三</div>
                    <el-tag type="success" effect="light" round>
                        角色
                    </el-tag>
                </div>
                <div class="card-header-login">
                    <el-text class="mx-1">登录账号：mengsan</el-text>
                </div>
            </div>
            <el-divider class="m-0" />
            <div class="card-content">
                <p class="card-content-item">账号信息</p>
                <p class="card-content-item">安全设置</p>
                <p class="card-content-item">历史记录</p>
            </div>
            <el-divider class="m-0" />
            <div  @click="loginOut" class="card-footer">
                {{ $t('message.system.loginOut') }}
            </div>
        </el-card>
    </div>
</template>


<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  components: {
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const isCollapse = computed(() => store.state.app.isCollapse)

    // login out the system
    const loginOut = () => {
      store.dispatch('user/loginOut')
    }

    return {
      isCollapse,
      loginOut,
    }
  }
})
</script>


<style lang="scss" scoped>
.user-info-detail {
    // width: 320px;
    position: absolute;
    top: 60px;
    right: 0px;
    z-index: 2001;
    cursor: default;
    visibility: hidden;

    .card-header {
        .card-header-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
        }

        .card-header-login {
            display: flex;
            align-items: flex-start;
            padding: 10px 20px 20px 20px;
        }
    }

    .card-content {
        .card-content-item {
            text-align: left;
            padding: 10px 20px;
            margin: 0px;

            &:hover {
                background-color: var(--system-header-item-hover-color);
                cursor: pointer;
            }
        }
    }

    .card-footer {
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        padding: 20px;

        &:hover {
            background-color: var(--system-header-item-hover-color);
        }
    }
}
</style>