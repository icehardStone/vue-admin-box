<template>
    <div class="container">
        <div class="toolbar">
            <el-button type="primary" @click="handleReturn"> 返回</el-button>
        </div>
        <el-form label-position="right" class="header">
            <div class="image">
                <div class="avatar-uploader">
                    <el-image class="avatar"
                        :src="form.avatar"
                        :zoom-rate="1.2"
                        :max-scale="7"
                        :min-scale="0.2"
                        :preview-src-list="[form.avatar]"
                        show-progress
                        :initial-index="4"
                        fit="cover"
                        />
                </div>
                <el-tag style="margin-top: 20px;" type="primary" effect="dark">
                    头像
                </el-tag>
            </div>
            <div class="basic">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="姓名：">
                            {{ form.realName }}
                         
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="身份证号：">
                            {{ form.idNumber }}
                          
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="性别：">
                            {{ form.genderName }}
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="手机号码：">
                              {{ form.phone }}
                          
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
                            {{ form.nationName }}
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="户籍：">
                            {{ form.residential }}
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="备注：">
                             {{ form.reamrk }}
                          
                        </el-form-item>
                    </el-col>

                </el-row>
            </div>
            <div class="position">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="员工工号：">
                      
                              {{ form.workNo }}
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="所属部门：">
                            {{ form.departName }}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="岗位类型：">
                     {{ form.workPositionName }}
                </el-form-item>
                <el-form-item label="职称名称：">
                     {{ form.titleName }}
                </el-form-item>
                <el-form-item label="政治面貌：">
                    {{ form.affiliationName }}
                </el-form-item>
                <el-form-item label="文化程度：">
                      {{ form.educationalLevelName }}
                </el-form-item>
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-form-item label="考勤编号：">
                             {{ form.attendanceNo }}
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="考勤类型：">
                             {{ form.attendanceTypeName }}
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
import { Nurse, Certificate, NurseDetail } from '@/model/provided/nursing/Nurse';
import MultiImage from '@/components/file/multiImage/index.vue'
import { ImageFile } from '@/components/file/multiImage/index.vue';

import { get } from '@/api/nursing/nursing';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const route = useRouter()
const ro = useRoute()
const id = ro.params.id

const form = ref<NurseDetail>({

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