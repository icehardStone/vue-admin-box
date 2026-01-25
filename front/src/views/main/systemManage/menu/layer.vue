<template>
  <Layer :layer="layer" @confirm="submit">
    <el-form :model="ruleForm" :rules="rules" ref="form" label-width="120px" style="margin-right:30px;">

      <el-form-item label="名称" prop="title">
        <el-input v-model="ruleForm.title" placeholder="请输入名称"></el-input>
      </el-form-item>

      <el-form-item label="编码" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入编码"></el-input>
      </el-form-item>

      <el-form-item label="类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio :label="'0'">目录</el-radio>
          <el-radio :label="'1'">菜单</el-radio>
          <el-radio :label="'2'">按钮</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="路由路径" prop="path">
        <el-input v-model="ruleForm.path" placeholder="请输入路由路径"></el-input>
      </el-form-item>

      <el-form-item label="组件路径" prop="component">
        <el-input v-model="ruleForm.component" placeholder="请输入组件路径"></el-input>
      </el-form-item>

      <el-form-item label="菜单图标" prop="meta.icon">
        <el-select v-model="ruleForm.icon" placeholder="Select" size="large" clearable="true"
          style="width: 240px">
          <el-option v-for="item in iconNames" :key="item" :label="item" :value="item">
            <template #default>
              <span style="display: flex; align-items: center;">
                <component :is="item" style="width: 32px;height: 32px; margin-right: 8px;" />
                {{ item }}
              </span>
            </template>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="ruleForm.status" active-color="#13ce66" inactive-color="#ff4949" :active-value=true
          :inactive-value=false></el-switch>
      </el-form-item>

      <el-form-item label="显示顺序" prop="order">
        <el-input-number v-model="ruleForm.order" :min="1" :max="100" />
      </el-form-item>

      <el-form-item label="是否可见" prop="hideMenu">
        <el-switch v-model="ruleForm.hideMenu" active-color="#13ce66" inactive-color="#ff4949" :active-value=true
          :inactive-value=false></el-switch>
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input v-model="ruleForm.remark" placeholder="请输入备注信息" type="textarea"></el-input>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Layer from '@/components/layer/index.vue'
import { add, update } from '@/api/system/menu'
import { MenuItem } from '@/model/system/menu/index'
import * as Icons from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup(props, ctx) {
    let ruleForm: MenuItem = reactive({
    })
    const rules = {
      // name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      // slug: [{ required: true, message: '请输入角色标识', trigger: 'blur' }],
      // status: [{ required: true, message: '请选择状态', trigger: 'change' }],
      // remark: [{ required: false, message: '请输入备注', trigger: 'blur' }]
    }
    function init() { // 用于判断新增还是编辑功能
      
      // debugger
      if (props.layer.row) {
        Object.assign(ruleForm, props.layer.row)
      } else {
        Object.assign(ruleForm, {
          parentId: props.layer.parentId
        })
      }

      ruleForm.parentId = props.layer.parentId;
    }
    init()
    // Icons 对象的 key 就是所有图标的名称
    const iconNames = Object.keys(Icons)
    return {
      ruleForm,
      rules,
      iconNames,
      // Icons
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid: boolean) => {
        if (valid) {
          let params = this.ruleForm
          if (this.layer.row) {
            this.updateForm(params)
          } else {
            this.addForm(params)
          }
        } else {
          return false;
        }
      });
    },
    // 新增提交事件
    addForm(params: object) {
      add(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.layer.show = false
          this.$emit('getTableData', true)
        })
    },
    // 编辑提交事件
    updateForm(params: object) {
      update(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.layer.show = false
          this.$emit('getTableData', false)
        })
    }
  }
})
</script>

<style lang="scss" scoped></style>