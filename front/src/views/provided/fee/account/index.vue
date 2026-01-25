<template>
  <div class="full">
    <div class="left">
      <Left />
    </div>
    <div class="content">
      <my-table />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'
import Left from './tree.vue'
import myTable from './my-table.vue'
export default defineComponent({
  name: 'treeTable',
  components: {
    Left,
    myTable,
  },
  
  setup() {
    let active: any = ref({})
    provide('active', active)
  }
})
</script>

<style lang="scss" scoped>
  .full {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    .left {
      width: 350px;
    }
    .content {
      flex: 1;
      width: calc(100% - 350px);
      height: 100%;
    }
  }
</style>