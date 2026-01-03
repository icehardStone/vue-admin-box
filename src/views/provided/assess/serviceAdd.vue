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
                    </el-card>

                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>床位卡</span>
                            </div>
                        </template>
                        <el-form-item label="意外防护标识">
                            <div style="display: grid;grid-template-columns: repeat(2, 1fr);width: 100%;">

                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <el-form-item label="噎食">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="跌倒">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="他伤/自伤">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="食品药品误食">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="坠床">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="走失">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="压疮">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="文娱活动意外">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="烫伤">
                                    <el-radio-group v-model="form.type">
                                        <el-radio value="Online activities" name="type">
                                            低风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            中风险
                                        </el-radio>
                                        <el-radio value="Online activities" name="type">
                                            高风险
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </div>
                        </el-form-item>
                        <el-form-item label="膳食提供标识">
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
                        <el-form-item label="药物过敏标识">
                            <el-radio-group v-model="form.type">
                                <el-radio value="Online activities" name="type">
                                    有
                                </el-radio>
                                <el-radio value="Online activities" name="type">
                                    无
                                </el-radio>
                            </el-radio-group>
                        </el-form-item>

                    </el-card>

                    <el-card class="record-add-body-item">
                        <template #header>
                            <div class="card-header">
                                <span>服务项目</span>
                            </div>
                        </template>


                        <div style="display: grid;grid-template-columns: 150px auto 180px;">

                            <div>项目</div>
                            <div>内容</div>
                            <div>合计</div>


                            <div>进食</div>
                            <div>
                                <el-checkbox-group v-model="form.type">
                                    <el-checkbox value="Online activities" name="type">
                                        A 鼻饲
                                    </el-checkbox>
                                    <el-checkbox value="Promotion activities" name="type">
                                        B 喂水
                                    </el-checkbox>
                                    <el-checkbox value="Offline activities" name="type">
                                        C 食物切碎或搅拌
                                    </el-checkbox>


                                </el-checkbox-group>
                            </div>
                            <div>提供A、B项服务</div>

                        </div>
                        <el-form-item label="其他服务约定">
                            <el-input type="textarea"></el-input>
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
            handleAvatarSuccess,
            
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
