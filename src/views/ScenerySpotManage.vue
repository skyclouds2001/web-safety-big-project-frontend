<template>
  <div class="space">
    <el-button type="primary" @click="addScenerySpot">添加景点</el-button>
  </div>
  <el-table :data="scenerySpots" style="width: 1100px" stripe border empty-text="没有数据~" flexible>
    <el-table-column align="center" type="index" width="100" />
    <el-table-column align="center" prop="name" label="名称" width="100" />
    <el-table-column align="center" prop="desc" label="描述" width="300" />
    <el-table-column align="center" prop="area" label="地点" width="200" />
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
import titleStore from '@/store/title'
import type ScenerySpot from '@/model/ScenerySpot'

onMounted(async () => {
  titleStore.updateTitle('景点管理')
  const res = await getAllScenerySpot()
  if (res.success) {
    scenerySpots.value = res.data
  }
})

const scenerySpots = ref<ScenerySpot[]>([])

const addScenerySpot = () => {
  console.log('add')
}

const editScenerySpot = (scenerySpot: ScenerySpot) => {
  console.log('edit')
  console.log(scenerySpot)
}

const removeScenerySpot = (scenerySpot: ScenerySpot) => {
  console.log('remove')
  console.log(scenerySpot)
}
</script>

<style lang="less" scoped>
.space {
  margin: 20px 0;
  text-align: left;
}
</style>
