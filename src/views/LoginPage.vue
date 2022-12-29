<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
    <el-form :model="admin" hide-required-asterisk class="w-[20rem] h-[14rem] px-5 py-10 shadow rounded bg-white">
      <el-form-item label="账号" required>
        <el-input v-model="admin.user" name="user" />
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="admin.pwd" name="password" show-password clearable />
      </el-form-item>
      <div>
        <el-button type="warning" @click="handleRegister">注册</el-button>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </div>
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
  try {
    const res = await useLogin(admin.user, admin.pwd)
    if (res.success) {
      Storage.set('token', res.data)
      await router.push('/scenery-spot')
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('登录失败')
  }
}

const handleRegister = () => {
  router.push('/register')
}
</script>

<style lang="less" scoped></style>
