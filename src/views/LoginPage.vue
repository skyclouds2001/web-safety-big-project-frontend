<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <el-form :model="admin" class="w-[18rem] h-[12rem] p-2.5 shadow rounded">
      <el-form-item label="账号">
        <el-input v-model="admin.user" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="admin.pwd" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { useLogin } from '@/api'
import { ErrorMessage } from '@/util/Message'
import Storage from '@/util/Storage'

const router = useRouter()

const admin = reactive({
  user: '',
  pwd: '',
})

const handleLogin = async () => {
  const res = await useLogin(admin.user, admin.pwd)
  if (res.success) {
    Storage.set('token', res.data)
    await router.push('/scenery-spot')
  } else {
    ErrorMessage(res.message)
  }
}
</script>

<style lang="less" scoped></style>
