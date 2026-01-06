<template>
    <div class="record-add">

        <div class="record-add-body">
            <el-scrollbar>
                <el-form :model="form" label-position="right" label-width="auto">
                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="record-add-body-item-header">
                                <span>基本信息</span>
                                <el-link type="success">帮助指引</el-link>
                            </div>
                        </template>
                        <div class="record-add-body-basic">
                            <div class="record-add-basic-image">
                                <el-upload class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false" :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                    <el-icon v-else class="avatar-uploader-icon">
                                        <Plus />
                                    </el-icon>
                                </el-upload>
                                <el-tag style="margin-top: 20px;" type="primary" effect="dark">
                                    老人头像
                                </el-tag>
                            </div>
                            <div class="record-add-basic-form">
                                <el-row :gutter="120">
                                    <el-col :span="12">
                                        <el-form-item label="长者姓名">
                                            <el-input v-model="form.user" placeholder="长者姓名" clearable />
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="身份证号">
                                            <el-input v-model="form.user" placeholder="身份证号" clearable />
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="120">
                                    <el-col :span="12">
                                        <el-form-item label="性别">
                                            <el-input v-model="form.user" placeholder="性别" clearable />
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="手机号码">
                                            <el-input v-model="form.user" placeholder="手机号码" clearable />
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="120">
                                    <el-col :span="12">
                                        <el-form-item label="年龄">
                                            <el-input v-model="form.user" placeholder="年龄" clearable />
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="民族">
                                            <el-input v-model="form.user" placeholder="民族" clearable />
                                        </el-form-item>
                                    </el-col>
                                </el-row>



                                <el-row :gutter="120">
                                    <el-col :span="24">
                                        <el-form-item label="备注">
                                            <el-input type="textarea" v-model="form.user" placeholder="备注" clearable />
                                        </el-form-item>
                                    </el-col>

                                </el-row>
                            </div>
                        </div>
                    </el-card>
                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>登记信息</span>
                            </div>
                        </template>
                        <el-form-item label="经办人">
                            <el-input v-model="form.user" placeholder="签约主体" clearable />
                        </el-form-item>

                        <el-form-item label="外出时间">
                            <el-date-picker v-model="form.date" type="date" placeholder="外出时间" />
                        </el-form-item>

                        <el-form-item label="回来时间">
                            <el-date-picker v-model="form.date" type="date" placeholder="回来时间" />
                        </el-form-item>

                        <el-form-item label="停费天数">
                            <el-input-number v-model="form.dadddte" placeholder="停费天数" />
                        </el-form-item>
                        <el-form-item label="外出事由">
                            <el-input style="width: 16rem;" v-model="form.user" placeholder="外出事由" clearable />
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.user" placeholder="备注" clearable />
                        </el-form-item>
                    </el-card>
                </el-form>
            </el-scrollbar>
        </div>
        <div class="record-add-title flex">
            <div class="record-add-title-back">
                <el-button @click="onBack" :icon="Back" round size="large">返回</el-button>
            </div>
            <div style="flex: 1; display: flex;justify-content: right;align-items: center;">
                <el-button type="success" :icon="Select" round size="large" style="margin-left: 20px;">保存</el-button>
            </div>
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

    position: sticky;
    bottom: 0px;
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

    .record-add-body-item {
        margin-top: 20px;

        .record-add-body-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}

.text-center {
    text-align: center;
}

.record-add-body-basic {
    display: flex;
    flex-direction: row;

    .record-add-basic-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 40px;

        .avatar-uploader {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }

    }

    .record-add-basic-form {
        flex: 1;
        padding: 0 40px 0 0px;
    }
}

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader :hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
