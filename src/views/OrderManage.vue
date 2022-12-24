<template>
  <el-scrollbar>
    <el-table :data="orders" style="width: 1200px" stripe border empty-text="没有数据~" flexible>
      <el-table-column align="center" type="index" label="索引" width="100" />
      <el-table-column align="center" prop="time" label="预定时间" width="100" />
      <el-table-column align="center" prop="ticketId" label="门票ID" width="100" />
      <el-table-column align="center" prop="amount" label="门票数量" width="100" />
      <el-table-column align="center" prop="cost" label="订单总金额" width="100" />
      <el-table-column align="center" prop="customerId" label="顾客ID" width="100" />
      <el-table-column align="center" prop="note" label="订单备注" width="300" />
      <el-table-column align="center" prop="createTimestamp" label="创建时间" width="100" />
      <el-table-column align="center" prop="updateTimestamp" label="更新时间" width="100" />
      <el-table-column align="center" label="操作" width="100" fixed="right">
        <template #default="scope">
          <el-button type="danger" text @click="removeOrder(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElScrollbar, ElMessageBox } from 'element-plus'
import { getAllOrder, removeOrder as removeOrderApi } from '@/api/order'
import type Order from '@/model/Order'
import titleStore from '@/store/title'
import { ErrorMessage, InfoMessage, SuccessMessage } from '@/util/Message'

titleStore.updateTitle('订单管理')

onBeforeMount(() => loadOrders())

const orders = ref<Order[]>([])

const loadOrders = async () => {
  const res = await getAllOrder()
  if (res.success) {
    orders.value = res.data
  } else {
    ErrorMessage(res.message)
  }
}

const removeOrder = (order: Order) => {
  ElMessageBox.confirm('确认删除该订单信息？')
    .then(async () => {
      const res = await removeOrderApi(order.id)
      if (res.success) {
        SuccessMessage('删除成功')
        await loadOrders()
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
