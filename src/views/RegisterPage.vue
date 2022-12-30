<template>
  <div class="w-screen h-auto flex justify-center items-center bg-gray-100" style="min-height: 100vh">
    <el-form label-width="100px" hide-required-asterisk class="w-[30rem] h-auto px-10 py-5 mx-0 my-5 shadow rounded bg-white">
      <div>
        <div class="text-2xl text-center font-bold leading-8 mb-5">注册</div>
      </div>
      <el-form-item label="用户姓名" required>
        <el-input v-model="user.name" name="name" />
      </el-form-item>
      <el-form-item label="用户昵称" required>
        <el-input v-model="user.nickname" name="nickname" />
      </el-form-item>
      <el-form-item label="用户密码" required>
        <el-input v-model="user.password" name="password" />
      </el-form-item>
      <el-form-item label="用户电话号码" required>
        <el-input v-model="user.phone" name="phone" />
      </el-form-item>
      <el-form-item label="用户身份证号" required>
        <el-input v-model="user.identity" name="identity" />
      </el-form-item>
      <el-form-item label="用户性别">
        <el-select v-model="user.sex" name="sex" clearable>
          <el-option v-for="item in userSexes" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="用户出生日期">
        <el-input v-model="user.birth" name="birth" />
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input v-model="user.email" name="email" />
      </el-form-item>
      <el-form-item label="用户个人简介">
        <el-input v-model="user.desc" name="desc" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" resize="none" />
      </el-form-item>
      <el-form-item label="用户居住地址">
        <el-input v-model="user.address" name="address" />
      </el-form-item>
      <el-form-item label="用户类别" required>
        <el-select v-model="user.type" name="type" clearable disabled>
          <el-option v-for="item in userTypes" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <div>
        <el-button type="warning" @click="cancel">返回</el-button>
        <el-button type="primary" @click="confirm">注册</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElForm, ElFormItem, ElInput, ElButton, ElSelect, ElOption } from 'element-plus'
import { addUser } from '@/api'
import { userSexes, userTypes } from '@/data/user'
import type User from '@/model/User'
import { ErrorMessage, SuccessMessage } from '@/util/Message'

const router = useRouter()

const user = reactive<Omit<User, 'id' | 'createTimestamp' | 'updateTimestamp'>>({
  name: '',
  sex: -1,
  birth: '',
  phone: '',
  desc: '',
  email: '',
  identity: '',
  address: '',
  type: 0,
  nickname: '',
  password: '',
})

const cancel = () => {
  setTimeout(() => router.push('/login'), 1000)
}

const confirm = async () => {
  try {
    const res = await addUser(user as User)
    if (res.success) {
      SuccessMessage('注册成功')
      setTimeout(() => useRouter().push('/login'), 3000)
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('注册失败')
  }
}
</script>

<style lang="less" scoped></style>
