<template>
    <div class="record-add">

        <div class="record-add-body">
            <el-scrollbar>
                <el-form :model="form" label-position="right" label-width="auto">
                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="record-add-body-item-header">
                                <span>老人信息</span>
                                 <div>
                                    <span>老人信息不存在?</span>
                                <el-link type="warning" style="font-size: 1rem;margin-left: 10px;">去创建</el-link>
                                 </div>
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
                                            <el-input v-model="form.name" placeholder="长者姓名" :prefix-icon="Search" />
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="身份证号">
                                            123344
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="120">
                                    <el-col :span="12">
                                        <el-form-item label="性别">
                                            男
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="手机号码">
                                            17356867983
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="120">
                                    <el-col :span="12">
                                        <el-form-item label="年龄">
                                            76
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="民族">
                                            汉族
                                        </el-form-item>
                                    </el-col>
                                </el-row>



                                <el-row :gutter="120">
                                    <el-col :span="24">
                                        <el-form-item label="备注">
                                            12313222222222222222
                                        </el-form-item>
                                    </el-col>

                                </el-row>
                            </div>
                        </div>

                        <!-- <el-alert type="primary" style="margin-top: 20px;" show-icon>
                            <template #default>
                                <span>老人信息不存在?</span>
                                <el-link type="warning" style="font-size: 1rem;margin-left: 10px;">去创建</el-link>
                            </template>
                        </el-alert> -->
                    </el-card>

                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>入住信息</span>
                            </div>
                        </template>
                        <el-form-item label="就餐方式">
                            <el-radio-group v-model="form.type">
                                <el-radio value="Online activities" name="type">
                                    统配
                                </el-radio>
                                <el-radio value="Online activities" name="type">
                                    点餐
                                </el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="禁忌药品">
                            <el-input v-model="form.user" placeholder="禁忌药品" clearable />
                        </el-form-item>
                        <el-form-item label="饮食方式">
                            <el-checkbox-group v-model="form.type">
                                <el-checkbox value="Online activities" name="type">
                                    普通饮食
                                </el-checkbox>
                                <el-checkbox value="Promotion activities" name="type">
                                    半流质饮食
                                </el-checkbox>
                                <el-checkbox value="Offline activities" name="type">
                                    流质饮食
                                </el-checkbox>
                                <el-checkbox value="Simple brand exposure" name="type">
                                    低糖饮食
                                </el-checkbox>
                                <el-checkbox value="Simple brand exposure" name="type">
                                    低嘌呤饮食
                                </el-checkbox>
                                <el-checkbox value="Simple brand exposure" name="type">
                                    低脂饮食
                                </el-checkbox>
                                <el-checkbox value="Simple brand exposure" name="type">
                                    碎食
                                </el-checkbox>
                                <el-checkbox value="Simple brand exposure" name="type">
                                    忌食类
                                </el-checkbox>

                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="保证金单号">
                            <el-input v-model="form.user" placeholder="保证金单号" clearable />
                        </el-form-item>

                    </el-card>

                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>监护人信息</span>
                            </div>
                        </template>

                        <el-table style="width: 100%">
                            <el-table-column fixed prop="city" label="第一担保人" />
                            <el-table-column prop="date" label="监护人姓名1" />
                            <el-table-column prop="name" label="手机号码" />
                            <el-table-column prop="state" label="亲属关系" />
                            <el-table-column prop="address" label="性别" />
                            <el-table-column prop="zip" label="证件号码" />
                            <el-table-column prop="zip" label="居住地址" />
                            <el-table-column prop="zip" label="户籍地址" />
                            <el-table-column prop="zip" label="操作" />
                        </el-table>
                        <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>
                    </el-card>

                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>分配护工</span>
                            </div>
                        </template>

                        <el-table style="width: 100%">
                            <el-table-column fixed prop="city" label="护工姓名" />
                            <el-table-column prop="date" label="电话" />
                            <el-table-column prop="name" label="年龄" />
                            <el-table-column prop="state" label="性别" />
                            <el-table-column prop="address" label="任务" />
                            <el-table-column prop="zip" label="分配时间" />
                            <el-table-column prop="zip" label="操作人员" />
                            <el-table-column prop="zip" label="操作" />
                        </el-table>
                        <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>
                    </el-card>
                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>分配设备</span>
                            </div>
                        </template>

                        <el-table style="width: 100%">
                            <el-table-column fixed prop="city" label="设备名称" />
                            <el-table-column prop="date" label="产品序列号" />
                            <el-table-column prop="name" label="位置" />
                            <el-table-column prop="state" label="最新上线时间" />
                            <el-table-column prop="zip" label="分配时间" />
                            <el-table-column prop="zip" label="操作人员" />
                            <el-table-column prop="zip" label="操作" />
                        </el-table>
                        <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>
                    </el-card>
                </el-form>
            </el-scrollbar>
        </div>
        <div class="record-add-title flex">
            <div class="record-add-title-back">
                <el-button @click="onBack" :icon="Back" round size="large">返回</el-button>
            </div>
            <div style="flex: 1; display: flex;justify-content: right;align-items: center;">
                <!-- <el-button type="warning" :icon="Refresh" round size="large" style="margin-left: 20px;">更新数据</el-button> -->
                <el-button type="success" :icon="Select" round size="large" style="margin-left: 20px;">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { Back, Plus, Select, Refresh, Search } from '@element-plus/icons'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, type TabsInstance, type UploadProps } from 'element-plus'
export default defineComponent({
    name: 'crudTable',
    components: {
        Back,
        Plus,
        Select,
        Refresh,
        Search
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
            Search,
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

.el-alert-content {
    display: flex;
    justify-content: space-between;
}
</style>
