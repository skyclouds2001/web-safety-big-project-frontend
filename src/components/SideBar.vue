<template>
  <el-menu class="menu" router>
    <el-menu-item index="/scenery-spot">
      <span>景点管理</span>
    </el-menu-item>
    <el-menu-item index="/ticket">
      <span>门票管理</span>
    </el-menu-item>
    <el-menu-item index="/order">
      <span>订单管理</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <span>用户管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ElMenu, ElMenuItem } from 'element-plus'
</script>

<style lang="less" scoped>
.menu {
  width: 100%;
  height: 100%;
}
</style>
