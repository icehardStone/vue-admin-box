<template>
  <div class="layout-container">
    <div class="card-form flex space-between tips">
      <div>
        <span>未收费</span>
      </div>
      <div class="layout-container-form-search">
        <el-button type="primary" class="search-btn" ">删除</el-button>
        <el-button type=" primary" class="search-btn" ">结算</el-button>
      </div>
    </div>
    <div class=" card-infos" style="max-height: 200px;overflow: auto;">
          <Table ref="table" style="height: 100%;" :showSelection="true" v-loading="loading" :data="tableData"
            @getTableData="getTableData" :show-page="false" @selection-change="handleSelectionChange">
            <el-table-column prop="category" label="费用类别" align="center" />
            <el-table-column prop="name" label="费用名称" align="center" />
            <el-table-column prop="method" label="计费方式" align="center" />
            <el-table-column prop="price" label="单价" align="center">
            </el-table-column>
            <el-table-column prop="startDate" label="开始时间" align="center" />
            <el-table-column prop="endDate" label="结束时间" align="center" />
            <el-table-column prop="reduction" label="减免数量" align="center" />
            <el-table-column prop="count" label="数量" align="center" />
            <el-table-column prop="amount" label="金额" align="center" />
            <el-table-column prop="" label="操作" align="center" width="160">
              <el-button>编辑</el-button>
            </el-table-column>

          </Table>
      </div>
      <div class="card-form flex space-between tips">
        <div>
          <span>已收费</span>
        </div>
        <div class="layout-container-form-search">
          <el-button type="primary" class="search-btn" ">打印</el-button>
      </div>
    </div>
    <div class=" card-recharge-details">
            <Table :showSelection="true" 
            ref="table" 
            style="height: 100%;"
             v-loading="loading" 
             :data="tableHasedData"
             :preserve-expanded-content="true"
              @getTableData="getHasedTableData" 
              @selection-change="handleSelectionChange" 
              :show-page="false">

                <el-table-column type="expand">
                  <template #default="props">
                    <div style="padding: 30px;">
                      <el-table :data="props.row.details" :border="childBorder">
                            <el-table-column prop="category" label="费用类别" align="center" />
                            <el-table-column prop="name" label="费用名称" align="center" />
                            <el-table-column prop="method" label="计费方式" align="center" />
                            <el-table-column prop="price" label="单价" align="center">
                            </el-table-column>
                            <el-table-column prop="startDate" label="开始时间" align="center" />
                            <el-table-column prop="endDate" label="结束时间" align="center" />
                            <el-table-column prop="reduction" label="减免数量" align="center" />
                            <el-table-column prop="count" label="数量" align="center" />
                            <el-table-column prop="amount" label="金额" align="center" />
                      </el-table>
                    </div>
                  </template>
                </el-table-column>

               <el-table-column prop="cardNo" label="流水号" align="center" />
              <el-table-column prop="totalAmount" label="总金额" align="center" />
              <el-table-column prop="cardAmount" label="卡支付金额" align="center" />
              <el-table-column prop="rechargeType" label="支付方式" align="center" />
              <el-table-column prop="rechargeAmount" label="支付金额" align="center" />
              <el-table-column prop="recharger" label="收费人" align="center" />
              <el-table-column prop="rechargeDate" label="收费时间" align="center" />
              <el-table-column prop="isPrint" label="已打印发票" align="center" />
            </Table>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, inject, watch } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del, getHased } from '@/api/fee/recharge'
import Layer from './layer.vue'
import { ElMessage } from 'element-plus'
import type { LayerInterface } from '@/components/layer/index.vue'
import { selectData, radioData } from './enum'
import { Plus, Search, Delete } from '@element-plus/icons'
export default defineComponent({
  components: {
    Table,
    Layer
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: ''
    })
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: '新增',
      showButton: true
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 10,
      total: 0
    })
    const activeCategory: any = inject('active')
    const loading = ref(true)
    const tableData = ref([])
    const tableHasedData = ref([])
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
        category: activeCategory.value.id,
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getData(params)
        .then(res => {
          let data = res.data.list
          if (Array.isArray(data)) {
            data.forEach(d => {
              const select = selectData.find(select => select.value === d.choose)
              select ? d.chooseName = select.label : d.chooseName = d.choose
              const radio = radioData.find(select => select.value === d.radio)
              radio ? d.radioName = radio.label : d.radio
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

       // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getHasedTableData = (init: boolean) => {
      loading.value = true
      if (init) {
        page.index = 1
      }
      let params = {
        category: activeCategory.value.id,
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getHased(params)
        .then(res => {
          // let data = res.data.list
          // if (Array.isArray(data)) {
          //   data.forEach(d => {
          //     const select = selectData.find(select => select.value === d.choose)
          //     select ? d.chooseName = select.label : d.chooseName = d.choose
          //     const radio = radioData.find(select => select.value === d.radio)
          //     radio ? d.radioName = radio.label : d.radio
          //   })
          // }
          // debugger
          tableHasedData.value = res.data.list
          page.total = Number(res.data.pager.total)
        })
        .catch(error => {
          tableHasedData.value = []
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
      layer.title = '新增数据'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title = '编辑数据'
      layer.row = row
      layer.show = true
    }
    watch(activeCategory, (newVal) => {
      getTableData(true)
      getHasedTableData(true)
    })

    const handleUpdateStatus = (row: any) => {

    }
    getTableData(true)
    getHasedTableData(true)
    return {
      Plus,
      Search,
      Delete,
      query,
      tableData,
      tableHasedData,
      chooseData,
      loading,
      page,
      layer,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,
      getHasedTableData,
      handleUpdateStatus
    }
  }
})
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  margin: 0 0 0 10px;
  width: calc(100% - 10px);
}

.card-form {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.card-recharge-details {
  flex: 1;
  overflow: auto;
}

.tips {
  padding: 5px 0;

}
</style>