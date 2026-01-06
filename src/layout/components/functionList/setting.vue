<template>
    <SlidePanel title="消息" v-model:visible="localVisible">
        <el-scrollbar class="site-message-body">
            <div class="setting">
                <!-- <p>主题</p> -->
                <p>字体大小</p>
                <div>
                    <el-radio-group v-model="fontSize" @change="changeSize">
                        <el-radio v-for="i in list" v-bind:key="i.size" :value="i.size">
                            {{ $t(i.name) }}
                        </el-radio>
                    </el-radio-group>
                </div>
            </div>
        </el-scrollbar>
    </SlidePanel>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, unref } from 'vue'
// import Layer from './layer.vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Plus, Search, Delete, RefreshLeft, Tools, Download } from '@element-plus/icons'
import SlidePanel from '../slidePanel/index.vue'

export default defineComponent({
    name: 'crudTable',
    components: {
        RefreshLeft,
        SlidePanel
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
            set: (value:any) => {
                store.commit('app/isShowSetting', value)
            },
            get: () => store.state.app.isShowSetting
        })
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
            SlidePanel
        }
    }
})
</script>

<style scoped>
.setting{
    text-align: left;
}
</style>
