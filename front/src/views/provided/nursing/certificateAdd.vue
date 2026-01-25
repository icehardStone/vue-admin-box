<template>
    <el-table border stripe :data="certificates" style="width: 100%">
        <el-table-column label="类型">
            <template #default="scope">
                <el-input style="height: 100%;" v-model="scope.row.types" placeholder="类型" clearable />
            </template>
        </el-table-column>
        <el-table-column label="名称">
            <template #default="scope">
                <el-input style="height: 100%;" v-model="scope.row.name" placeholder="名称" clearable />
            </template>
        </el-table-column>
        <el-table-column label="图片">
            <template #default="scope">
                <MultiImage v-model:file-list="files"></MultiImage>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="danger" :icon="Delete" circle
                    @click="handleDeleteCertificate(scope.$index)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { Back, Plus, Select, Refresh, Search, QuestionFilled, Delete } from '@element-plus/icons'
import Nurse from '@/model/provided/nursing/Nurse';
import Certificate from '@/model/provided/nursing/Nurse';
import MultiImage from '@/components/file/multiImage/index.vue'
import { ImageFile } from '@/components/file/multiImage/index.vue';

import { add, update } from '@/api/nursing/nursing';
import { useRouter } from 'vue-router';

const route = useRouter()
const certificates = ref<Certificate[]>([])

// 右侧滚动区域的引用
const contentRef = ref(null);
const files = ref<ImageFile[]>([])

const handleClick = (e: MouseEvent) => {
    e.preventDefault()
}

const handleAddCertificate = () => {
    if (!certificates.value) {
        certificates.value = []
    }
    certificates.value.push({
        types: "",
        name: "",
        urls: ""
    })
}

const handleDeleteCertificate = (index: number) => {
    if (certificates.value) {
        certificates.value.splice(index, 1);
    }
}

</script>