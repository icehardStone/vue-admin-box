<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
        <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(chooseData)">
          <template #reference>
            <el-button type="danger" :icon="Delete" :disabled="chooseData.length === 0">作废</el-button>
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search flex center">
        <el-input v-model="query.input" :placeholder="$t('message.common.searchTip')" @change="getTableData(true)"></el-input>
        <el-icon class="layout-container-form-icon"><RefreshLeft /></el-icon>
        <el-icon class="layout-container-form-icon"><Tools /></el-icon>
        <el-icon class="layout-container-form-icon"><Download /></el-icon>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="levelName" label="房间等级" align="center" />
        <el-table-column prop="statusName" label="状态" align="center" />
        <el-table-column prop="createTime" label="创建时间" align="center" />
        <el-table-column prop="remark" label="备注" align="center" />
        <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">查看</el-button>
            <el-button type="warning" @click="handleEdit(scope.row)">{{ $t('message.common.update') }}</el-button>
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
import { getData, del } from '@/api/room/level'
// import Layer from './layer.vue'
import { ElMessage } from 'element-plus'
import {useRouter, useRoute } from 'vue-router'
import type { LayerInterface } from '@/components/layer/index.vue'
import { Plus, Search, Delete, RefreshLeft,Tools,Download } from '@element-plus/icons'
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
        ids: data.map((e:any)=> {
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
        name: 'roomLevelAdd'
      })
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
       router.push({
        name: 'roomLevelAdd'
      })
    }
    getTableData(true)
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
      getTableData
    }
  }
})
</script>

<style lang="scss" scoped>
.layout-container-form-icon{
  font-size: 20px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
}
</style>