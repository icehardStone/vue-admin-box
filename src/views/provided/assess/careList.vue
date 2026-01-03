<template>
    <div class="layout-container">

        <el-tabs v-model="activeName" class="type-tabs" @tab-click="handleClick">
            <el-tab-pane label="首次评估" name="first"></el-tab-pane>
            <el-tab-pane label="复合评估" name="third"></el-tab-pane>
            <el-tab-pane label="持续评估" name="fourth"></el-tab-pane>
        </el-tabs>

        <div class="layout-container-form-toolbar  flex space-between">
            <div class="layout-container-form-handle">
                <!-- <el-button type="primary" :icon="Plus" @click= "handleAdd">设备归置</el-button> -->
            </div>
            <div class="layout-container-form-search flex center">
                <el-input v-model="query.input" :placeholder="$t('message.common.searchTip')"
                    @change="getTableData(true)"></el-input>
                <el-icon class="layout-container-form-icon">
                    <RefreshLeft />
                </el-icon>
                <el-icon class="layout-container-form-icon">
                    <Tools />
                </el-icon>
                <el-icon class="layout-container-form-icon">
                    <Download />
                </el-icon>
            </div>
        </div>
        <div class="layout-container-table">
            <Table ref="table" v-model:page="page" v-loading="loading" :showIndex="false" :showSelection="true"
                :preserve-expanded-content="preserveExpanded" :data="tableData" @getTableData="getTableData"
                @selection-change="handleSelectionChange">

                <el-table-column type="expand">
                    <template #default="props">
                        <div v-for="i in 10" class="care-record">
                            <div class="care-record-info">
                                <p>照护等级：<el-tag>重度</el-tag></p>
                                <p>生活自理能力 12</p>
                                <p>认知能力：0</p>
                                <p>情绪行为：0</p>
                                <p>评估时间：2025-12-03</p>
                                <p>视觉：0</p>
                                <p>适应性：0</p>
                            </div>
                            <div class="care-record-tools">
                                <el-button type="primary">查看</el-button>
                                <el-button type="info">打印</el-button>
                            </div>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="name" label="档案号" align="center" />
                <el-table-column prop="radioName" label="姓名" align="center" />
                <el-table-column prop="radioName" label="床位号" align="center" />
                <el-table-column prop="radioName" label="评估次数" align="center" />
                <el-table-column prop="radioName" label="评估类别" align="center" />
                <el-table-column prop="radioName" label="评估周期" align="center" />
                <el-table-column prop="radioName" label="评估状态" align="center" />
                <el-table-column prop="radioName" label="照护等级" align="center" />
                <el-table-column prop="radioName" label="评估人员" align="center" />
                <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="200">
                    <template #default="scope">
                        <el-button @click="handleEdit(scope.row)">查看</el-button>
                        <el-button type="warning" @click="handleEdit(scope.row)">去评估</el-button>
                    </template>
                </el-table-column>
            </Table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
// import Layer from './layer.vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import type { LayerInterface } from '@/components/layer/index.vue'
import { Plus, Search, Delete, RefreshLeft, Tools, Download } from '@element-plus/icons'
import type { TabsPaneContext } from 'element-plus'
export default defineComponent({
    name: 'crudTable',
    components: {
        Table,
        RefreshLeft,
        Tools,
        Download,
        // Layer
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        // 存储搜索用的数据
        const query = reactive({
            input: ''
        })
        // 分页参数, 供table使用
        const page: Page = reactive({
            index: 1,
            size: 20,
            total: 0
        })
        const loading = ref(true)
        const tableData = ref([])
        const chooseData = ref([])
        const handleSelectionChange = (val: []) => {
            chooseData.value = val
        }
        // 获取表格数据
        // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
        const getTableData = (init: boolean) => {
            loading.value = true
            if (init) {
                page.index = 1
            }
            let params = {
                page: page.index,
                pageSize: page.size,
                ...query
            }
            getData(params)
                .then(res => {
                    let data = res.data.list
                    if (Array.isArray(data)) {
                        data.forEach(d => {
                            // const select = selectData.find(select => select.value === d.choose)
                            // select ? d.chooseName = select.label : d.chooseName = d.choose
                            // const radio = radioData.find(select => select.value === d.radio)
                            // radio ? d.radioName = radio.label : d.radio
                        })
                    }
                    tableData.value = res.data.list
                    page.total = Number(res.data.pager.total)
                })
                .catch(error => {
                    tableData.value = []
                    page.index = 1
                    page.total = 0
                })
                .finally(() => {
                    loading.value = false
                })
        }
        // 删除功能
        const handleDel = (data: object[]) => {
            let params = {
                ids: data.map((e: any) => {
                    return e.id
                }).join(',')
            }
            del(params)
                .then(res => {
                    ElMessage({
                        type: 'success',
                        message: '删除成功'
                    })
                    getTableData(tableData.value.length === 1 ? true : false)
                })
        }
        // 新增弹窗功能
        const handleAdd = () => {
            router.push({
                name: 'nursingAdd'
            })
        }
        // 编辑弹窗功能
        const handleEdit = (row: object) => {
        }
        const activeName = ref('first')

        const handleClick = (tab: TabsPaneContext, event: Event) => {
            console.log(tab, event)
        }
        getTableData(true)
        const preserveExpanded = ref(false)
        return {
            Plus,
            Search,
            Delete,
            RefreshLeft,
            Download,
            Tools,
            query,
            tableData,
            chooseData,
            loading,
            page,
            handleSelectionChange,
            handleAdd,
            handleEdit,
            handleDel,
            getTableData,
            activeName,
            handleClick,
            preserveExpanded
        }
    }
})
</script>

<style lang="scss" scoped>
.layout-container-form-icon {
    font-size: 20px;
    margin-left: 10px;

    &:hover {
        cursor: pointer;
    }
}

.type-tabs {
    padding: 0 15px;
}

.layout-container-form-toolbar {
    margin: 0;
    justify-content: space-between;
    margin: 0 15px;
}

.care-record {
    margin: 15px 15px;
    border: 1px solid blue;
    padding: 15px;
    display: flex;

    .care-record-info {
        display: grid;
        flex: 1;
        grid-template-columns: repeat(4, 1fr);

        p {
            // font-size: 14px;
        }
    }
}
</style>