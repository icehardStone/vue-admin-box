<template>
  <div class="layout-container room-setting">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>

        </template>
        <div class="flex build-area">
          <div style="width: 100px;margin-right: 15px;display: flex;align-items: center;justify-content: center;">
            <span>楼栋信息</span>
          </div>
          <div class="build-list">
            <div v-for="i in 10" class="flex hover build main-color">
              <div class="build-desc">{{ i }}栋</div>
              <div class="build-tools">
                <el-button class="build-btn" type="warning" :icon="Edit" circle />
                <el-button class="build-btn" type="danger" :icon="Delete" circle />
              </div>
            </div>
            <div @click="handleAddBuild" class="hover build-plus main-color">
              <el-icon>
                <Plus />
              </el-icon>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="area-tools">
      <!-- <h4 style="text-align: left;">选择：楼栋1</h4> -->
       <div style="text-align: left;padding: 15px 0;">选择：楼栋1</div>
      <div>
        <el-button @click="handleBuild">{{ showBuild ? '收起' : '展开' }}楼栋面板</el-button>
      </div>
    </div>
    <el-scrollbar class="floor-list">
      <div v-for="i in 20" class="floor">
        <div class="floor-info main-color">
          <span>{{ i }}楼</span>
        </div>
        <div class="room-list">
          <div v-for="i in 20" @click="handleRoom(i)" class="room main-color hover">
            <div class="room-name"><el-tag style="font-size: 16px;">10{{ i }}</el-tag></div>
            <div class="room-info">
              <div class="room-info-text">等级：4人间</div>
              <div class="room-info-text">人数：4</div>
              <div class="room-info-text">类型：位置</div>
            </div>
            <div class="room-tools">
              <div> <el-button type="warning" @click.stop="handleEditRoom" link>编辑</el-button></div>
              <div style="margin-top: 5px;"> <el-button @click.stop="handleDeleteRoom" type="danger" link>删除</el-button>
              </div>
            </div>
          </div>
          <div @click="handleAddRoom" class="room-plus main-color hover">
            <el-icon>
              <Plus />
            </el-icon>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
  <el-dialog v-model="dialogVisible" width="500" title="新增">
    <el-form :model="newBuild" label-width="auto" style="max-width: 500px">
      <el-form-item label="楼栋:">
        <el-input v-model="newBuild.name" />
      </el-form-item>
      <el-form-item label="楼层:">
        <el-input-number v-model="newBuild.floorCount" :min="1" :max="50" />
      </el-form-item>
      <el-form-item label="排序:">
        <el-input-number v-model="newBuild.sort" :min="1" :max="50" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="center dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="roomDialogVisible" width="600" title="新增">
    <el-form :model="newRoom" label-width="auto">
      <el-form-item label="所属楼层:">
        <el-input v-model="newRoom.name" />
      </el-form-item>
      <el-form-item label="类型:">
        <el-radio-group v-model="newRoom.region" placeholder="类型">
          <el-radio value="Sponsor">房间</el-radio>
          <el-radio value="Venue">位置</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="名称:">
        <el-input v-model="newRoom.name" placeholder="名称" />
      </el-form-item>

      <el-form-item label="编号:">
        <el-input v-model="newRoom.floorCount" placeholder="编号" />
      </el-form-item>

      <el-form-item label="人数:">
        <el-input-number v-model="newRoom.floorCount" :min="1" :max="50" />
      </el-form-item>

      <el-form-item label="等级:" style="width: 300px;">
        <el-select v-model="newRoom.region" placeholder="等级">
          <el-option label="三人间" value="shanghai" />
          <el-option label="一人间" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="排序:">
        <el-input-number v-model="newRoom.sort" :min="1" :max="50" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="center dialog-footer">
        <el-button @click="roomDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="roomDialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="bedDialogVisible" width="80%" title="床位/位置">
    <el-tabs v-model="handleRoomActiveName">
      <el-tab-pane label="床位/位置" name="positition">
        <el-table style="width: 100%">
          <el-table-column prop="name" label="类型" />
          <el-table-column prop="ss" label="具体位置" />
          <el-table-column prop="city" label="床位号" />
          <el-table-column prop="address" label="房间等级" />
          <el-table-column prop="zip" label="费用" />
          <el-table-column label="操作">
            <template #default>
              <el-button link type="primary" size="small">
                删除
              </el-button>
              <el-button link type="primary" size="small">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button style="width: 100%;" :icon="Plus" type="primary"></el-button>
      </el-tab-pane>
      <el-tab-pane label="基础设置" name="infrastructure"><el-table style="width: 100%">
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="ss" label="数量" />
          <el-table-column label="操作">
            <template #default>
              <el-button link type="primary" size="small">
                删除
              </el-button>
              <el-button link type="primary" size="small">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button style="width: 100%;" :icon="Plus" type="primary"></el-button>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
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
import { CloseBold, Plus, Search, Delete, RefreshLeft, Tools, Download, Edit } from '@element-plus/icons'
export default defineComponent({
  name: 'crudTable',
  components: {
    Table,
    RefreshLeft,
    Tools,
    Download,
    Edit,
    CloseBold,
    Plus
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
        name: 'nursingRelationshipDetail'
      })
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      router.push({
        name: 'nursingRelationshipDetail'
      })
    }
    getTableData(true)

    const showBuild = ref(true)
    const activeNames = ref('1')
    const handleBuild = () => {
      showBuild.value = !showBuild.value;
      // debugger
      if (!showBuild.value) {
        activeNames.value = '2'
      }
      else {
        activeNames.value = '1'
      }
    }
    // 添加楼栋
    const dialogVisible = ref(false)
    const handleAddBuild = () => {
      dialogVisible.value = true;
    }

    const newBuild = ref({

    })

    // 添加房间
    const roomDialogVisible = ref(false)
    const handleAddRoom = () => {
      roomDialogVisible.value = true;
    }

    const newRoom = ref({

    })


    // 位置/床位信息
    const bedDialogVisible = ref(false)
    const handleRoom = (room: any) => {
      bedDialogVisible.value = true
    }

    const handleEditRoom = () => {

    }
    const handleDeleteRoom = () => {

    }

    const handleRoomActiveName = ref('positition')

    return {
      Plus,
      Search,
      Delete,
      RefreshLeft,
      Download,
      Tools,
      CloseBold,
      Edit,
      query,
      tableData,
      loading,
      page,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,
      handleBuild,
      activeNames,
      showBuild,
      dialogVisible,
      handleAddBuild,
      newBuild,
      roomDialogVisible,
      handleAddRoom,
      newRoom,
      handleRoom,
      bedDialogVisible,
      handleEditRoom,
      handleDeleteRoom,
      handleRoomActiveName
    }
  }
})
</script>

<style lang="scss" scoped>

.room-setting{
  box-sizing: border-box;
  padding: 0 15px 15px 15px;
}
.main-color {
  background-color: white;
  color: black;
}

.build-area {
  background-color: var(--system-container-background);
  padding-top: 15px;
}

.build-list {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  .build {
    width: 100%;
    height: 50px;
    justify-content: space-between;


    .build-desc {
      padding: 15px 30px;
      text-align: center;
    }

    .build-tools {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .build-btn {
        margin: 5px;
      }
    }
  }

}

.floor-list {
  flex: 1;

  .floor {
    display: flex;
    margin-bottom: 15px;
    // box-shadow: var(--el-box-shadow-light);

    .floor-info {
      margin-right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      box-shadow: var(--el-box-shadow-light);
    }

    .room-list {
      flex: 1;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(6, 1fr);

      .room {
        display: flex;
        flex-direction: row;
        box-shadow: var(--el-box-shadow-light);
        padding: 10px 15px;
        border-radius: 5px;

        .room-name {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }

        .room-info {
          flex: 1;

          .room-info-text {
            font-size: 12px;
            text-align: left;
            padding: 5px 0;
          }
        }

        .room-tools {
          display: flex;
          flex-direction: column;
          justify-content: start;
        }
      }
    }
  }
}

.room-plus {
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
}

.build-plus {
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  height: 50px;
}

.hover {
  &:hover {
    cursor: pointer;
    color: white;
    background-color: var(--system-primary-color);
  }
}


.area-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 或者使用 */
:deep(.el-collapse-item__content) {
  padding: 0 !important;
}

:deep(.el-collapse-item__header) {
  display: none;
}
</style>