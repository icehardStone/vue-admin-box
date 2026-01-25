<template>
    <div class="container">
        <div class="toolbar">
            <el-button type="danger" v-if="!id">清空</el-button>
            <el-button type="primary" class="mt-4" style="" @click="handleSave">
                保存
            </el-button>
        </div>
        <el-form label-position="right" class="header">
            <div class="image">
                <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false" >
                    <img v-if="form.avatar" :src="form.avatar" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
                <el-tag style="margin-top: 20px;" type="primary" effect="dark">
                    头像
                </el-tag>
            </div>
            <div class="basic">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="姓名：">
                            <el-input v-model="form.realName" placeholder="长者姓名" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="身份证号：">
                            <el-input v-model="form.idNumber" placeholder="身份证号" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="性别：">
                            <el-radio-group v-model="form.gender">
                                <el-radio value="1">男</el-radio>
                                <el-radio value="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="手机号码：">
                            <el-input v-model="form.phone" placeholder="手机号码" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="年龄：">
                            {{ 20 }}岁
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="所属民族：">
                            <el-select v-model="form.nation" placeholder="民族">
                                <el-option v-for="item in [{ value: '1', label: '汉族' }]" :key="item.value"
                                    :label="item.label" :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="户籍：">
                            <el-input v-model="form.residential" placeholder="户籍地址" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="备注：">
                            <el-input rows="5" type="textarea" v-model="form.reamrk" placeholder="备注" clearable />
                        </el-form-item>
                    </el-col>

                </el-row>
            </div>
            <div class="position">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="员工工号：">
                            <el-input v-model="form.workNo" placeholder="签约主体" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="所属部门：">
                            <el-select v-model="form.departId" placeholder="部门">
                                <el-option v-for="item in [{ value: '1', label: '研发部' }]" :key="item.value"
                                    :label="item.label" :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="岗位类型：">
                    <el-select v-model="form.workPosition" placeholder="岗位">
                        <el-option v-for="item in [{ value: '1', label: '助理工程师' }]" :key="item.value"
                            :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="职称名称：">
                    <el-radio-group v-model="form.title">
                        <el-radio
                            v-for="item in [{ value: '1', label: '初级' }, { value: '2', label: '中级' }, { value: '3', label: '高级' }]"
                            :value="item.value">{{ item.label }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="政治面貌：">
                    <el-select v-model="form.affiliation" placeholder="政治面貌">
                        <el-option v-for="item in [{ value: '1', label: '群众' }]" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="文化程度：">
                    <el-radio-group v-model="form.educationalLevel">
                        <el-radio v-for="item in [{ value: '1', label: '小学' }, { value: '2', label: '本科' }]"
                            :value="item.value">{{ item.label }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-form-item label="考勤编号：">
                            <el-input v-model="form.attendanceNo" placeholder="考勤编号" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="考勤类型：">
                            <el-select v-model="form.attendanceType" placeholder="考勤类型">
                                <el-option v-for="item in [{ value: '1', label: '13' }]" :key="item.value"
                                    :label="item.label" :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

            </div>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { Back, Plus, Select, Refresh, Search, QuestionFilled, Delete } from '@element-plus/icons'
import Nurse from '@/model/provided/nursing/Nurse';
import Certificate from '@/model/provided/nursing/Nurse';
import MultiImage from '@/components/file/multiImage/index.vue'
import { ImageFile } from '@/components/file/multiImage/index.vue';

import { add, update, get } from '@/api/nursing/nursing';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const route = useRouter()
const ro = useRoute()
const id = ro.params.id

const form = ref<Nurse>({

})


if (id) {
    get(id)
        .then(s => {
            form.value = s.data
            // debugger
        })
        .catch(err => {

        })
}
// 右侧滚动区域的引用
const contentRef = ref(null);
const files = ref<ImageFile[]>([])

const handleClick = (e: MouseEvent) => {
    e.preventDefault()
}

const handleAddCertificate = () => {
    if (!form.value.certificates) {
        form.value.certificates = []
    }
    form.value.certificates.push({
        types: "",
        name: "",
        urls: ""
    })
}

const handleDeleteCertificate = (index: number) => {
    if (form.value.certificates) {
        form.value.certificates.splice(index, 1);
    }
}

const handleSave = () => {

    if (!id) {
        add(form.value)
            .then((res) => {
                ElMessage({
                    message: '保存成功！',
                    type: 'success',
                })
            })
            .catch(err => {
                ElMessage({
                    message: '保存失败！',
                    type: 'error',
                })
            })
    } else {
        update(form.value)
            .then((res) => {

                ElMessage({
                    message: '保存成功！',
                    type: 'success',
                })
            })
            .catch(err => {
                console.log(err)
                ElMessage({
                    message: '保存失败！',
                    type: 'error',
                })
            })
    }
    route.push({
        name: 'nursingRecord'
    })
}
const handleReturn = () => {
    route.back()
}
</script>

<style scoped>
.container {
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;

    .toolbar {
        background-color: var(--system-container-main-background);
        padding-top: 20px;
        padding-right: 20px;
        text-align: right;
    }

    .header {
        flex: 1;
        display: flex;
        justify-content: start;
        background-color: var(--system-container-main-background);

        .form-item {
            border-right: 1px dashed gray;
            margin: 5px 0;
        }

        .image {
            padding: 20px;
        }

        .position {
            flex: 1;
            padding: 20px;
        }

        .basic {
            flex: 1;
            padding: 20px;
        }
    }

    .footer {
        padding: 0 20px;
        height: 340px;
        min-height: 140px;
        overflow: auto;
        background-color: var(--system-container-main-background);
    }
}
</style>

<style lang="scss" scoped>
.avatar-uploader {
    border: 1px dashed gray;
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