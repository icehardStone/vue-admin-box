<template>
  <div class="category">
    <div class="header-box">
      <h2>老人信息</h2>
      <el-input ></el-input>
      <!-- <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button> -->
    </div>
    <div class="list system-scrollbar">
      <el-table :data="data"
      style="text-align: center;"
      row-class-name="oldely-item" @row-click="handleNodeClick" height="100%">
          <el-table-column  label="姓名"  >
              <template #default="scope">
                  {{ scope.row.name }}
                  <el-tag
                    :type="scope.row.sexName == '男' ? 'primary': 'success'" 
                  >{{ scope.row.sexName }}</el-tag>
              </template>
            </el-table-column>
          <el-table-column prop="inNumber" label="入住编号" />
        <el-table-column prop="idNumber" width="170" label="证件号码"  />
        </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import type { Ref } from "vue";
import { defineComponent, ref, inject, nextTick } from "vue";
import { getData } from "@/api/olderly/olderly";
import { Plus, Search, Delete } from '@element-plus/icons'
export default defineComponent({
  setup() {
    let data = ref([]);
    const tree: Ref<any | null> = ref(null)
    const defaultProps = {
      children: "children",
      label: "label",
    };

    // 新增弹窗功能
    const handleAdd = () => {
      // layer.title = '新增数据'
      // layer.show = true
      // delete layer.row
    }
    const active: any = inject("active");
    const getTreeData = () => {
      let params = {
        pageSize: 10,
        pageIndex: 10,
      };
      getData(params).then((res) => {
        data.value = res.data.list;
        active.value = res.data.list[0];
        nextTick(() => {
          tree.value && tree.value.setCurrentKey(active.value.id)
        })
      });
    };
    const handleNodeClick = (row: any) => {
      active.value = row;
    };
    getTreeData();

    return {
      data,
      tree,
      defaultProps,
      handleNodeClick,
      handleAdd
    };
  },
});
</script>

<style lang="scss" scoped>
.category {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header-box {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    h2 {
      padding: 0;
      margin: 0;
      margin-right: 20px;
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 30px;
      line-height: 30px;
    }

    .el-input {
      flex: 1;
    }
  }

  .list {
    flex: 1;
    overflow: auto;
  }

  .my-tree {
    :deep(.el-tree-node__content) {
      height: 36px;
    }

    :deep(.el-tree-node.is-current>.el-tree-node__content) {
      background-color: rgba(64, 158, 255, 0.4);
    }

    :deep(.el-tree-node>.el-tree-node__content) {
      transition: 0.2s;
    }
  }
}
:deep(.oldely-item) {
  &:hover{
    cursor: pointer;
  }
}
:deep(.el-table .el-table__cell){
  text-align: center;
}
</style>