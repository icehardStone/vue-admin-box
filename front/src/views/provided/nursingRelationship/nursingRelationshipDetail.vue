<template>
    <div class="record-add">

        <div class="record-add-title flex">
            <div class="record-add-title-back">
                <el-button @click="onBack" :icon="Back" round size="large">返回</el-button>
            </div>
            <div style="flex: 1; display: flex;justify-content: right;align-items: center;">
                <!-- <el-button type="warning" :icon="Refresh" round size="large" style="margin-left: 20px;">更新数据</el-button> -->
                <el-button type="success" :icon="Select" round size="large" style="margin-left: 20px;">保存</el-button>
            </div>
        </div>

        <div class="record-add-body">
            <p>员工姓名: <el-tag>张三</el-tag></p>
            <p>负责老人: 
                <el-tag class="responsibility-old">刘翠珠</el-tag>
                <el-tag class="responsibility-old">马凤娣</el-tag>
                <el-tag class="responsibility-old">张妙英</el-tag>
                <el-tag class="responsibility-old">蔡美英</el-tag>
            </p>

            <el-alert
      title="注：单击选中/取消本房间所有长者"
      type="success"
      show-icon
    />
    <el-divider />
            <el-scrollbar>
            </el-scrollbar>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { Back, Plus, Select, Refresh } from '@element-plus/icons'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, type TabsInstance, type UploadProps } from 'element-plus'
export default defineComponent({
    name: 'crudTable',
    components: {
        Back,
        Plus,
        Select,
        Refresh
        // Layer
    },
    setup() {

        const imageUrl = ref('')
        const router = useRouter()
        const tabPosition = ref<TabsInstance['tabPosition']>('left')
        const onBack = () => {
            router.back()
        }
        const form = {

        }

        const handleAvatarSuccess: UploadProps['onSuccess'] = (
            response,
            uploadFile
        ) => {
            imageUrl.value = URL.createObjectURL(uploadFile.raw!)
        }

        const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
            if (rawFile.type !== 'image/jpeg') {
                ElMessage.error('Avatar picture must be JPG format!')
                return false
            } else if (rawFile.size / 1024 / 1024 > 2) {
                ElMessage.error('Avatar picture size can not exceed 2MB!')
                return false
            }
            return true
        }
        return {
            onBack,
            imageUrl,
            Back,
            Plus,
            Select,
            Refresh,
            form,
            tabPosition,
            beforeAvatarUpload,
            handleAvatarSuccess
        }
    }
})
</script>

<style lang="scss" scoped>
.record-add {
    padding: 0 20px 0 20px;
}

.record-add-title {
    margin-top: 20px;

    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: var(--system-container-main-background);
    box-shadow: var(--el-box-shadow-light);

    .record-add-title-back {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: green;

        &:hover {
            cursor: pointer;
        }
    }
}

.record-add-body {
    flex: 1;
    overflow: auto;
    text-align: left;

    margin-top: 20px;
    padding: 20px;
    background-color: var(--system-container-main-background);
    box-shadow: var(--el-box-shadow-light);
}

.responsibility-old{
    margin-right: 20px;
}
.text-center {
    text-align: center;
}
</style>
