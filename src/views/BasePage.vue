<template>
  <el-container>
    <el-aside>
      <SideBar />
    </el-aside>
    <el-container>
      <el-header>
        <PageHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <PageFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { ElContainer, ElMain, ElHeader, ElFooter, ElAside } from 'element-plus'
import PageHeader from '@/components/PageHeader.vue'
import SideBar from '@/components/SideBar.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<style scoped></style>
