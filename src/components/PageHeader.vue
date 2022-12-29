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
              <el-dropdown-item @click="reset">重设密码</el-dropdown-item>
              <el-dropdown-item @click="exit">退出登录</el-dropdown-item>
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
import { ElPageHeader, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem, ElMessageBox } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'
import titleStore from '@/store/title'
import { SuccessMessage, InfoMessage } from '@/util/Message'
import Storage from '@/util/Storage'

const router = useRouter()

const { title } = storeToRefs(titleStore)

const handleBack = () => {
  titleStore.updateTitle('')
  router.push('/')
}

const reset = () => {
  console.log('reset')
}

const exit = () => {
  ElMessageBox.confirm('确认退出登录？')
    .then(() => {
      Storage.remove('token')
      SuccessMessage('成功')
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    })
    .catch(() => {
      InfoMessage('取消')
    })
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
