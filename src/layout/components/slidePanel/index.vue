<template>
  <transition name="slide-fade">
    <div
      v-show="visible"
      class="slide-panel-overlay"
      @click="handleOverlayClick"
    >
      <div
        class="slide-panel"
        ref="panelRef"
        :class="visible ? 'show' : 'hide'"
        @click.stop
      >
        <div class="slide-panel-header">
          <div class="slide-panel-title">{{ title }}</div>
          <div class="slide-panel-header-right">
            <slot name="header-right">
              <el-button type="info" @click="handleClose" link>
                <el-icon size="18">
                  <Close />
                </el-icon>
              </el-button>
            </slot>
          </div>
        </div>
        <el-divider class="m-0" />
        <div class="slide-panel-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue'
import { Close } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'SlidePanel',
  components: {
    Close,
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '面板'
    },
    width: {
      type: String,
      default: '340px'
    },
    // 是否点击遮罩层关闭
    closeOnOverlayClick: {
      type: Boolean,
      default: true
    },
    // 是否按ESC键关闭
    closeOnEsc: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'update:visible'],
  
  setup(props, { emit }) {
    const panelRef = ref<HTMLElement>()

    // ESC键关闭
    const handleEscKey = (event: KeyboardEvent) => {
      if (props.visible && props.closeOnEsc && event.key === 'Escape') {
        handleClose()
      }
    }

    // 点击遮罩层关闭
    const handleOverlayClick = (event: MouseEvent) => {
      if (props.visible && props.closeOnOverlayClick) {
        // 检查是否点击了遮罩层本身（不是面板内容）
        const target = event.target as HTMLElement
        if (target.classList.contains('slide-panel-overlay')) {
          handleClose()
        }
      }
    }

    // 关闭面板
    const handleClose = () => {
      emit('close')
      emit('update:visible', false)
    }

    // 监听外部点击
    const setupClickOutside = () => {
      if (!props.visible) return
      
      const clickListener = (event: MouseEvent) => {
        if (panelRef.value && !panelRef.value.contains(event.target as Node)) {
          handleClose()
        }
      }
      
      // 使用setTimeout确保在当前事件循环之后执行
      setTimeout(() => {
        document.addEventListener('click', clickListener)
      }, 0)
      
      return () => {
        document.removeEventListener('click', clickListener)
      }
    }

    // 监听visible变化
    watch(
      () => props.visible,
      (newVal) => {
        if (newVal) {
          // 显示时禁止背景滚动
          document.body.style.overflow = 'hidden'
          // 监听ESC键
          document.addEventListener('keydown', handleEscKey)
        } else {
          // 隐藏时恢复背景滚动
          document.body.style.overflow = ''
          document.removeEventListener('keydown', handleEscKey)
        }
      },
      { immediate: true }
    )

    onMounted(() => {
      // 初始监听
      if (props.visible) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', handleEscKey)
      }
    })

    onUnmounted(() => {
      // 清理
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscKey)
    })

    return {
      panelRef,
      handleClose,
      handleOverlayClick
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-panel-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2062;
  background-color: rgba(0, 0, 0, 0.3);
}

.slide-panel {
  position: fixed;
  top: 60px;
  right: 0;
  width: 0;
  height: calc(100vh - 60px);
  z-index: 2063;
  overflow: hidden;
  background-color: var(--system-page-background);
  color: var(--system-page-color);
  box-shadow: var(--el-box-shadow-light);

  &.show {
    animation: showPanel 0.3s ease-in-out forwards;
  }

  &.hide {
    animation: hidePanel 0.3s ease-in-out forwards;
    pointer-events: none;
  }

  .slide-panel-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    box-sizing: border-box;
    padding: 20px;
    flex-shrink: 0;

    .slide-panel-title {
      font-size: 16px;
      font-weight: 600;
    }

    .slide-panel-header-right {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }

  .slide-panel-body {
    height: calc(100% - 64px);
    overflow-y: auto;
    padding: 20px;
  }
}

/* 遮罩层过渡动画 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* 面板滑动动画 */
@keyframes showPanel {
  0% {
    width: 0;
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    width: v-bind(width);
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes hidePanel {
  0% {
    width: v-bind(width);
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    width: 0;
    opacity: 0;
    transform: translateX(100%);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .slide-panel {
    width: 100vw !important;
    height: 70vh;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 12px 12px 0 0;

    &.show {
      animation: showPanelMobile 0.3s ease-in-out forwards;
    }

    &.hide {
      animation: hidePanelMobile 0.3s ease-in-out forwards;
    }
  }

  .slide-panel-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @keyframes showPanelMobile {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes hidePanelMobile {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
}
</style>