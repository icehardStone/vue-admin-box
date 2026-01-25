<template>
    <div class="upload-container">
        <el-upload v-bind="$attrs" v-model:file-list="satisfiles" :action="action" list-type="picture-card"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="hanldeSuccess"
            :auto-upload="true" :on-change="uploadchange">
            <el-icon>
                <Plus />
            </el-icon>
        </el-upload>
        <el-image-viewer v-if="dialogVisible" :url-list="[dialogImageUrl]" show-progress :initial-index="0"
            teleported="true" @close="dialogVisible = false" />
    </div>
</template>

<script lang="ts">


export interface ImageFile {
    name: string,
    url: string,
    originalName?: string
}
import { defineComponent, ref, PropType, computed } from 'vue'
import { Plus } from '@element-plus/icons';
import type { UploadProps, UploadUserFile } from 'element-plus'
export default defineComponent({
    name: 'MultiImage',
    components: {
        Plus
    },
    props: {
        fileList: {
            type: Array as PropType<ImageFile[]>,
            required: false,
            default: () => []
        },
        action: {
            type: String,
            required: false,
            default: () => "/api/SysFile/upload"
        },
        size: {
            type: String,
            required: false,
            default: () => "60px"
        }
    },
    emits: ['update:fileList'],
    setup(props, { emit }) {
        const dialogImageUrl = ref('')
        const dialogVisible = ref(false)

        // computed 用于双向绑定 file-list
        const satisfiles = ref<UploadUserFile[]>([])
        const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
            const t = props.fileList.filter(s => s.name != uploadFile.name)
            emit('update:fileList', t)
        }

        const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
            dialogImageUrl.value = uploadFile.url!
            dialogVisible.value = true
        }
        const hanldeSuccess: UploadProps['onSuccess'] = (uploadFile: { data?: any }) => {
            if (uploadFile.data) {
                props.fileList.push({
                    ...uploadFile.data
                })
            }
            emit('update:fileList', props.fileList)
        }

        if (props.fileList) {
            props.fileList.filter(s => s != null).forEach(s => {
                satisfiles.value?.push({
                    name: s.name,
                    url: s.url
                })
            })
        }

        // handle the file change
        function uploadchange(file: any, fileList: UploadUserFile[]) {
        }
        return {
            dialogImageUrl,
            dialogVisible,
            satisfiles,
            handleRemove,
            handlePictureCardPreview,
            hanldeSuccess,
            uploadchange
        }
    }
})
</script>

<style scoped>
.upload-container {
    width: 100%;
    max-width: 800px;
    /* 控制整个上传组件的最大宽度 */
}

/* 利用 CSS 网格或弹性布局让列表项自适应父容器宽度 */
::v-deep .el-upload-list--picture-card {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(v-bind(size), 1fr));
    /* 根据父容器自动换行和调整大小 */
    gap: 10px;
}

::v-deep .el-upload-list--picture-card .el-upload-list__item,
::v-deep .el-upload--picture-card {
    width: 100%;
    /* 宽度自适应网格单元格 */
    height: v-bind(size);
    /* 使用动态属性 size 作为高度 */
    aspect-ratio: 4 / 3;
    /* 可选：设置固定的长宽比 */
}
</style>