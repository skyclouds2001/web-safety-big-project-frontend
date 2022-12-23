<template>
  <el-config-provider :locale="zhCn">
    <el-container class="container">
      <el-aside>
        <SideBar />
      </el-aside>
      <el-container class="section">
        <el-header class="header">
          <PageHeader />
        </el-header>
        <el-main class="content">
          <router-view></router-view>
        </el-main>
        <el-footer class="footer">
          <div class="bg-blue-900 w-10 h-2"></div>
          <PageFooter />
        </el-footer>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider, ElContainer, ElMain, ElHeader, ElFooter, ElAside } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import PageHeader from '@/components/PageHeader.vue'
import SideBar from '@/components/SideBar.vue'
import PageFooter from '@/components/PageFooter.vue'
import titleStore from '@/store/title'

titleStore.updateTitle('')
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;

  .section {
    width: calc(100% - 300px);
    height: 100%;
    background-color: #f9f9f9;

    .header {
      background-color: white;
    }

    .content {
      width: calc(100% - 20px * 2);
      min-height: calc(100% - 20px * 2 - 60px * 2);
      margin: 20px;

      background-color: white;
      border-radius: 20px;
    }

    .footer {
      background-color: white;
    }
  }
}
</style>
