<template>
  <el-container>
    <el-aside>Aside</el-aside>
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
import { ElContainer, ElMain, ElHeader, ElFooter } from 'element-plus'
</script>

<style scoped></style>
