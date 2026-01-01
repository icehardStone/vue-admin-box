<template>
    <div
    class="site-message"
    ref="messageRef" 
    :class="isShowMsg ? 'show' : 'hide'"
    >
        <div class="site-message-header">
            <div>消息</div>
            <div class="site-message-header-right">
                <el-button type="success" link>查看更多</el-button>
                <el-button type="info" @click="closeMsg" link>
                    <el-icon size="18">
                        <Close />
                    </el-icon>
                </el-button>
            </div>
        </div>
        <el-divider class="m-0" />
        <el-scrollbar class="site-message-body" @end-reached="loadMore">
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { Close } from '@element-plus/icons'
import { defineComponent, ref, watch, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    components: {
        Close,
    },
    setup(props, { emit }) {
        const store = useStore()
        const messageRef = ref<HTMLElement>()
        
        const loadMore = () => {
            console.log("到达底部")
        }

        const closeMsg = () => {
             store.commit('app/isShowMsg', false)
        }

        const isShowMsg = computed(() => store.state.app.showMsg)
        
        return {
            closeMsg,
            loadMore,
            messageRef,
            isShowMsg
        }
    }
})
</script>

<style lang="scss" scoped>
.site-message {
    width: 340px;
    position: fixed;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    z-index: 2063;
    overflow: hidden;  /* 添加这行以在动画期间隐藏内容 */

    background-color: var(--system-page-background);
    color: var(--system-page-color);
    box-shadow: var(--el-box-shadow-light);

    .site-message-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        box-sizing: border-box;
        padding: 20px;

        .site-message-header-right {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
        }
    }

    &.show {
        animation: showBox 0.4s ease-in-out forwards; /* 添加 forwards 保持最终状态 */
    }

    &.hide {
        animation: hideBox 0.4s ease-in-out forwards; /* 添加 forwards 保持最终状态 */
        pointer-events: none; /* 隐藏时禁用交互 */
    }

    .site-message-body {
        height: calc(100% - 64px);
    }
}

/* 定义关键帧 */
@keyframes showBox {
    0% {
        width: 0px;
        opacity: 0;
    }
    100% {
        width: 340px;
        opacity: 1;
    }
}

/* 定义关键帧 */
@keyframes hideBox {
    0% {
        width: 340px;
        opacity: 1;
    }
    100% {
        width: 0px;
        opacity: 0;
    }
}
</style>