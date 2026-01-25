<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{
          $t("message.common.add")
        }}</el-button>
        <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(chooseData)">
          <template #reference>
            <el-button type="danger" :icon="Delete" :disabled="chooseData.length === 0">{{ $t("message.common.delBat")
              }}</el-button>
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" :placeholder="$t('message.common.searchTip')"></el-input>
        <el-button type="primary" :icon="Search" class="search-btn" @click="getTableData(true)">{{
          $t("message.common.search")
          }}</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table :data="tableData" style="width: 100%;"
        row-key="menuId" 
        border 
        default-expand-all
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="title" width="240" label="名称" />
        <!-- <el-table-column prop="menuCode" align="center" label="编码" /> -->
        <el-table-column prop="typeName" align="center" width="80" label="菜单类型" />
        <el-table-column prop="path" align="center" width="160" label="路由路径" />
        <el-table-column prop="component" align="center" label="组件路径" />
        <el-table-column prop="icon" align="center" width="60" label="图标" >
          <template #default="scope">
              <!-- <component :is="scope.row.icon" style="width: 16px; height: 16px;" /> -->
          </template>
        </el-table-column>
        <el-table-column prop="order" align="center" width="60" label="顺序" />
        <!-- <el-table-column prop="status" align="center" label="状态" /> -->
        <!-- <el-table-column prop="remark" align="center" label="备注" /> -->
        <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="280">
          <template #default="scope">
            <el-button v-if="scope.row.type == '0'" @click="handleAdd(scope.row)">{{
              $t("message.common.add")
            }}
            </el-button>
            <el-button @click="handleEdit(scope.row)">{{
              $t("message.common.update")
            }}
            </el-button>
            <el-button type="success" v-if="scope.row.type == '1'" @click="handleAdd(scope.row)">{{
              $t("message.common.btn")
            }}</el-button>
            <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel([scope.row])">
              <template #reference>
                <el-button type="danger">{{ $t("message.common.del") }}</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts">
import { getData, del } from "@/api/system/menu";
import { LayerInterface } from "@/components/layer/index.vue";
import Table from '@/components/table/index.vue'
import { Page } from "@/components/table/type";
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { Plus, Delete, Search } from '@element-plus/icons'
import Layer from "./layer.vue";
import { ElMessage } from "element-plus";
import {MenuItem} from "@/model/system/menu/index";
export default defineComponent({
  components: {
    Layer,
    Table
  },
  setup() {

    // 存储搜索用的数据
    const query = reactive({
      input: "",
    });
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: "新增",
      showButton: true,
    });

    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0,
    });
    const tableData = ref<MenuItem[]>([
    ]);
    const chooseData = ref<MenuItem[]>([]);

    const handleSelectionChange = (val: MenuItem[]) => {
      chooseData.value = val
    }
    // 新增弹窗功能
    const handleAdd = (row: MenuItem) => {
      layer.title = "新增角色";
      layer.show = true;
      layer.parentId = row.menuId;
      

      delete layer.row;
    }
    // 编辑弹窗功能
    const handleEdit = (row: any) => {
      layer.title = "编辑角色";
      layer.row = row;
      layer.show = true;
    }
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init: Boolean) => {
      if (init) {
        page.index = 1
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query
      }

      // 获取表格数据
      // params <init> Boolean ，默认为false，用于判断是否需要初始化分页

      getData(params)
        .then((res) => {
          let data = res.data.list
          tableData.value = data
          page.total = Number(res.data.pager.total);
        })
        .catch((error) => {
          tableData.value = [];
          page.index = 1;
          page.total = 0;
        })
        .finally(() => {

        });

      console.log(tableData.value)
    }
    // 删除功能
    const handleDel = (data: object[]) => {
      let params = {
        menuIds: data
          .map((e: any) => {
            return e.menuId;
          })
          .join(","),
      };
      del(params).then((res) => {
        ElMessage({
          type: "success",
          message: "删除成功",
        });
        getTableData(tableData.value.length === 1 ? true : false);
      });
    }

    getTableData(true)
    return {
      page,
      layer,
      tableData,
      getTableData,
      Plus,
      Delete,
      handleDel,
      Search,
      query,
      chooseData,
      handleAdd,
      handleEdit,
      handleSelectionChange
    };
  },
});
</script>

<style lang="scss" scoped>
.layout-container {
  padding: 15px;
  box-sizing: border-box;
}

.box {
  border: 1px solid #eee;
  overflow-y: auto;
  height: calc(100%);
}

</style>