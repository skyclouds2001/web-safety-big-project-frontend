<template>
  <el-dialog v-model="visual" title="用户" @close="cancel">
    <el-form label-width="100px" hide-required-asterisk>
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
    </el-form>
    <template #footer>
      <el-button type="warning" @click="cancel">取消</el-button>
      <el-button type="primary" @click="submit">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElForm, ElFormItem, ElInput, ElDialog, ElButton, ElSelect, ElOption } from 'element-plus'
import { sex as userSexes, type as userTypes } from '@/data/user'
import type User from '@/model/User'

export default defineComponent({
  name: 'UserForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElDialog,
    ElButton,
    ElSelect,
    ElOption,
  },
  props: [],
  emits: ['save', 'update'],
  data() {
    return {
      user: {
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
      },
      visual: false,
      mode: 'save',
      id: -1,
      userSexes,
      userTypes,
    }
  },
  methods: {
    cancel() {
      this.hide()
      this.reset()
    },
    submit() {
      if (this.mode === 'save') {
        const spot: Partial<User> = { ...this.user }
        this.$emit('save', spot)
      } else if (this.mode === 'update') {
        const spot: Partial<User> = { ...this.user }
        spot.id = this.id
        this.$emit('update', spot)
      }
    },
    init(user: User) {
      this.user.name = user.name
      this.user.sex = user.sex
      this.user.birth = user.birth
      this.user.phone = user.phone
      this.user.desc = user.desc ?? ''
      this.user.email = user.email
      this.user.identity = user.identity
      this.user.address = user.address
      this.user.type = user.type
      this.user.nickname = user.nickname
      this.user.password = user.password
    },
    reset() {
      this.user.name = ''
      this.user.sex = -``
      this.user.birth = ''
      this.user.phone = ''
      this.user.desc = ''
      this.user.email = ''
      this.user.identity = ''
      this.user.address = ''
      this.user.type = 0
      this.user.nickname = ''
      this.user.password = ''
    },
    show(mode: 'save' | 'update', data?: User) {
      this.visual = true
      this.mode = mode
      if (mode === 'update') {
        this.init(data as User)
        this.id = data?.id as number
      }
    },
    hide() {
      this.visual = false
    },
  },
  expose: ['show', 'hide', 'init', 'reset', 'mode'],
})
</script>

<style lang="less" scoped></style>
