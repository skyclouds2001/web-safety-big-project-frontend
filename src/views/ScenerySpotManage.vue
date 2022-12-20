<template>
  <el-table :data="scenerySpots" style="width: 1100px" stripe border empty-text="没有数据~" flexible>
    <el-table-column align="center" type="index" width="100" />
    <el-table-column align="center" prop="name" label="景点名称" width="100" />
    <el-table-column align="center" prop="desc" label="景点描述" width="300" />
    <el-table-column align="center" prop="area" label="景点地点" width="200" />
    <el-table-column align="center" prop="createTimestamp" label="创建时间" width="100" />
    <el-table-column align="center" prop="updateTimestamp" label="更新时间" width="100" />
    <el-table-column align="center" label="操作" width="200">
      <template #default="scope">
        <el-button type="primary" text @click="editScenerySpot(scope.row)">编辑</el-button>
        <el-button type="danger" text @click="removeScenerySpot(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElTable, ElTableColumn, ElButton } from 'element-plus'
import { getAllScenerySpot } from '@/api/scenery_spot'
import type ScenerySpot from '@/model/ScenerySpot'

onMounted(async () => {
  const res = await getAllScenerySpot()
  if (res.success) {
    scenerySpots.value = res.data
  }
})

const scenerySpots = ref<ScenerySpot[]>([])

const editScenerySpot = (scenerySpot: ScenerySpot) => {
  console.log(scenerySpot)
}

const removeScenerySpot = (scenerySpot: ScenerySpot) => {
  console.log(scenerySpot)
}
</script>

<style lang="less" scoped></style>
