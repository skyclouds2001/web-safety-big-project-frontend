<template>
  <el-page-header class="header" title="返回" :content="title" @back="handleBack">
    <template #extra>
      <div class="flex justify-end" style="width: calc(100vw - 300px - 160px - 40px - 40px)">
        <el-dropdown>
          <el-icon :size="32" color="#999">
            <UserFilled />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>重设密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElPageHeader, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'
import titleStore from '@/store/title'

const router = useRouter()

const { title } = storeToRefs(titleStore)

const handleBack = () => {
  router.push('/')
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
