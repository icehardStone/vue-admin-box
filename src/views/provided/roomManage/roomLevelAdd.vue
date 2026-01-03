<template>
    <div class="layout-container">
        <el-card style="text-align: left;">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item label="房间等级">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button @click="reback">返回</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const route = useRoute()
const router = useRouter()

const reback = () => {
    router.back();
}
const onSubmit = () => {
    console.log('submit!')
}
</script>
