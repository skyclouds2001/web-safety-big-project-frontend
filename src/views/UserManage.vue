<template>
  <el-scrollbar>
    <div class="space">
      <el-button type="primary" @click="el?.show('save')">添加用户</el-button>
    </div>

    <el-table :data="users" style="width: 2200px" stripe border empty-text="没有数据~" flexible>
      <el-table-column align="center" type="index" label="索引" width="100" />
      <el-table-column align="center" prop="name" label="姓名" width="100" />
      <el-table-column align="center" prop="sex" label="性别" width="100" />
      <el-table-column align="center" prop="birth" label="生日" width="100" />
      <el-table-column align="center" prop="phone" label="电话" width="200" />
      <el-table-column align="center" prop="email" label="邮箱" width="200" />
      <el-table-column align="center" prop="identity" label="身份证号" width="200" />
      <el-table-column align="center" prop="address" label="地址" width="200" />
      <el-table-column align="center" prop="type" label="用户类型" width="100" />
      <el-table-column align="center" prop="nickname" label="昵称" width="100" />
      <el-table-column align="center" prop="password" label="密码" width="100" />
      <el-table-column align="center" prop="desc" label="个人简介" width="300" />
      <el-table-column align="center" prop="createTimestamp" label="创建时间" width="100" />
      <el-table-column align="center" prop="updateTimestamp" label="更新时间" width="100" />
      <el-table-column align="center" label="操作" width="200">
        <template #default="scope">
          <el-button type="primary" text @click="el?.show('update', scope.row)">编辑</el-button>
          <el-button type="danger" text @click="removeUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>

  <UserForm ref="el" @save="addUser" @update="editUser" />
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElScrollbar, ElMessageBox } from 'element-plus'
import { getAllUser, addUser as addUserApi, updateUser as updateUserApi, removeUser as removeUserApi } from '@/api/user'
import UserForm from '@/components/UserForm.vue'
import type User from '@/model/User'
import titleStore from '@/store/title'
import { ErrorMessage, InfoMessage, SuccessMessage } from '@/util/Message'

titleStore.updateTitle('用户管理')

onBeforeMount(() => loadUsers())

const users = ref<User[]>([])

const el = ref<InstanceType<typeof UserForm> | null>(null)

const loadUsers = async () => {
  const res = await getAllUser()
  if (res.success) {
    users.value = res.data
  } else {
    ErrorMessage(res.message)
  }
}

const addUser = async (user: User) => {
  try {
    const res = await addUserApi(user)
    if (res.success) {
      SuccessMessage('添加成功')
      el.value?.hide()
      el.value?.reset()
      await loadUsers()
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('添加失败')
  }
}

const editUser = async (user: User) => {
  try {
    const res = await updateUserApi(user)
    if (res.success) {
      SuccessMessage('更新成功')
      el.value?.hide()
      el.value?.reset()
      await loadUsers()
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('更新失败')
  }
}

const removeUser = (user: User) => {
  ElMessageBox.confirm('确认删除该用户？')
    .then(async () => {
      const res = await removeUserApi(user.id)
      if (res.success) {
        SuccessMessage('删除成功')
        await loadUsers()
      } else {
        ErrorMessage(res.message)
      }
    })
    .catch(() => {
      InfoMessage('取消删除')
    })
}
</script>

<style lang="less" scoped>
.space {
  margin: 20px 0;
  text-align: left;
}
</style>
