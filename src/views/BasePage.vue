<template>
  <el-container>
    <el-aside>
      <SideBar />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { ElContainer, ElMain, ElHeader, ElFooter, ElAside } from 'element-plus'
import SideBar from '@/components/SideBar.vue'
</script>

<style scoped></style>
