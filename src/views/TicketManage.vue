<template>
  <el-scrollbar>
    <div class="space">
      <el-button type="primary" @click="el?.show('save')">添加门票</el-button>
    </div>

    <el-table :data="tickets" style="width: 1200px" stripe border empty-text="没有数据~" flexible>
      <el-table-column align="center" type="index" label="索引" width="100" />
      <el-table-column align="center" prop="name" label="名称" width="100" />
      <el-table-column align="center" prop="desc" label="描述" width="300" />
      <el-table-column align="center" prop="type" label="类型" width="100" />
      <el-table-column align="center" prop="price" label="价格" width="100" />
      <el-table-column align="center" prop="scenerySpotId" label="门票" width="100" />
      <el-table-column align="center" prop="createTimestamp" label="创建时间" width="100" />
      <el-table-column align="center" prop="updateTimestamp" label="更新时间" width="100" />
      <el-table-column align="center" label="操作" width="200" fixed="right">
        <template #default="scope">
          <el-button type="primary" text @click="el?.show('update', scope.row)">编辑</el-button>
          <el-button type="danger" text @click="removeTicket(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>

  <TicketForm ref="el" @save="addTicket" @update="editTicket" />
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElScrollbar, ElMessageBox } from 'element-plus'
import { getAllTicket, addTicket as addTicketApi, updateTicket as updateTicketApi, removeTicket as removeTicketApi } from '@/api/ticket'
import TicketForm from '@/components/TicketForm.vue'
import titleStore from '@/store/title'
import { ErrorMessage, InfoMessage, SuccessMessage } from '@/util/Message'
import type Ticket from '@/model/Ticket'

titleStore.updateTitle('门票管理')

onBeforeMount(() => loadTickets())

const tickets = ref<Ticket[]>([])

const el = ref<InstanceType<typeof TicketForm> | null>(null)

const loadTickets = async () => {
  const res = await getAllTicket()
  if (res.success) {
    tickets.value = res.data
  } else {
    ErrorMessage(res.message)
  }
}

const addTicket = async (ticket: Ticket) => {
  try {
    const res = await addTicketApi(ticket)
    if (res.success) {
      SuccessMessage('添加成功')
      el.value?.hide()
      el.value?.reset()
      await loadTickets()
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('添加失败')
  }
}

const editTicket = async (ticket: Ticket) => {
  try {
    const res = await updateTicketApi(ticket)
    if (res.success) {
      SuccessMessage('更新成功')
      el.value?.hide()
      el.value?.reset()
      await loadTickets()
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('更新失败')
  }
}

const removeTicket = (ticket: Ticket) => {
  ElMessageBox.confirm('确认删除该门票？')
    .then(async () => {
      const res = await removeTicketApi(ticket.id)
      if (res.success) {
        SuccessMessage('删除成功')
        await loadTickets()
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
