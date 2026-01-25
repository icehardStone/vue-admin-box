<template>
  <div class="layout-container room-setting">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>

        </template>
        <div class="flex build-area">
          <div class="build-info" style="">
            <span>楼栋信息</span>
          </div>
          <div class="build-list">
            <div v-for="build in buildDatas" :key="build.buildId" class="flex hover build main-color">
              <div class="build-desc">{{ build.buildName }}</div>
              <div class="build-tools">
              </div>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="area-tools">
      <div class="flex">
        <div style="text-align: left;padding: 15px 0;">选择：楼栋1</div>
        <div class="flex state-colors">
          <div class="state-color">
            <div class="state-color-item state-eng"></div>
            <div class="state-text">房间满员</div>
          </div>
          <div class="state-color">
            <div class="state-color-item state-hased"></div>
            <div class="state-text">房间有人</div>
          </div>
          <div class="state-color-item state-color">
            <div class="state-color-item state-nothing"></div>
            <div class="state-text">房间无人</div>
          </div>
        </div>
      </div>
      <div>
        <el-button @click="handleBuild">{{ showBuild ? '收起' : '展开' }}楼栋面板</el-button>
      </div>
    </div>
    <el-scrollbar class="floor-list">
      <div v-for="floor in floorDatas" :key="floor.floorId" class="floor">
        <div class="floor-info main-color">
          <span>{{ floor.floorName }}楼</span>
        </div>
        <div class="room-list">
          <div v-for="room in floor.rooms" :key="room.roomId" class="room main-color" :class="['state-' + room.state]">
            <div class="room-name">
              {{ room.roomName }}
            </div>
            <div class="room-info">
              <div class="room-info-olderly" v-for="olderly in room.olderlys" :key="olderly.olderlyId">
                <el-avatar shape="square" :size="50" :src="olderly.imageUrl" />
                <div>{{ olderly.olderlyName }}</div>
              </div>
            </div>
            <div class="room-tools">
              <div class="room-tools-nurses">护工：
                <span v-for="nurse in room.nurses">{{ nurse }}、</span>
              </div>
            </div>
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
</template>

<script lang="ts">

interface Build {
  buildId: number,
  buildName: string
}

interface Floor {
  floorId: number,
  floorName: string,
  rooms: Room[]
}

interface Room {
  roomId: number,
  roomName: string,
  state: string,
  nurses: string[],
  olderlys: Olderly[]
}

interface Olderly {
  olderlyId: number,
  olderlyName: string,
  imageUrl: string
}
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getBuilds } from '@/api/room/build'
import { getRoomStatesData } from '@/api/room/room'
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
    // const page: Page = reactive({
    //   index: 1,
    //   size: 20,
    //   total: 0
    // })
    const loading = ref(true)
    const buildDatas = ref<Build[]>([])
    const floorDatas = ref<Floor[]>([])
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getDatas = (init: boolean) => {
      loading.value = true
      let params = {
        ...query
      }
      getBuilds(params)
        .then(res => {
          let data = res.data
          if (Array.isArray(data)) {
            data.forEach(d => {
            })
          }
          buildDatas.value = res.data
        })
        .catch(error => {
          buildDatas.value = []
        })
        .finally(() => {
          loading.value = false
        })
      getRoomStatesData(params)
        .then(res => {
          floorDatas.value = res.data
        })
        .catch(error => {
          floorDatas.value = []
        })
        .finally(() => {
          loading.value = false
        })
    }

    getDatas(true)

    const showBuild = ref(false)
    const activeNames = ref('2')
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
      buildDatas,
      loading,
      // page,
      getDatas,
      handleBuild,
      activeNames,
      showBuild,
      dialogVisible,
      floorDatas,
    }
  }
})
</script>

<style lang="scss" scoped>
.room-setting {
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

.build-info {
  width: 100px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
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


      .room {
        display: flex;
        flex-direction: column;
        box-shadow: var(--el-box-shadow-light);
        border-radius: 5px;

        .room-name {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: var(--el-box-shadow-light);
          padding: 10px 0;
        }

        .room-info {
          flex: 1;
          min-height: 100px;
          padding-top: 10px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

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

          .room-tools-nurses {
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 30px;
          }
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
  }
}


.area-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .state-colors {
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    .state-color {
      display: flex;
      justify-content: center;
      align-items: center;

      .state-text {
        font-size: 14px;
      }

      .state-color-item {
        width: 50px;
        height: 20px;
        margin: 0 5px;
      }
    }
  }
}

.state-eng {
  color: var(--state-foreground-color-eng);
  background-color: var(--state-background-color-eng);
}

.state-hased {
  color: var(--state-foreground-color-all);
  background-color: var(--state-background-color-all);
}

.state-nothing {
  color: var(--state-foreground-color-nothing);
  background-color: var(--state-background-color-nothing);
}

/* 或者使用 */
:deep(.el-collapse-item__content) {
  padding: 0 !important;
}

:deep(.el-collapse-item__header) {
  display: none;
}


@media screen and (min-width:768px) {
  .room-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width:1200px) {
  .room-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (min-width:1500px) {
  .room-list {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>