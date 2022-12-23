<template>
  <el-scrollbar>
    <div class="space">
      <el-button type="primary" @click="el?.show('save')">添加景点</el-button>
    </div>

    <el-table :data="scenerySpots" style="width: 1100px" stripe border empty-text="没有数据~" flexible>
      <el-table-column align="center" type="index" label="索引" width="100" />
      <el-table-column align="center" prop="name" label="名称" width="100" />
      <el-table-column align="center" prop="desc" label="描述" width="300" />
      <el-table-column align="center" prop="area" label="地点" width="200" />
      <el-table-column align="center" prop="createTimestamp" label="创建时间" width="100" />
      <el-table-column align="center" prop="updateTimestamp" label="更新时间" width="100" />
      <el-table-column align="center" label="操作" width="200">
        <template #default="scope">
          <el-button type="primary" text @click="el?.show('update', scope.row)">编辑</el-button>
          <el-button type="danger" text @click="removeScenerySpot(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>

  <ScenerySpotInfo ref="el" @save="addScenerySpot" @update="editScenerySpot" />
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElScrollbar, ElMessageBox } from 'element-plus'
import { getAllScenerySpot, addScenerySpot as addScenerySpotApi, updateScenerySpot, removeScenerySpot as removeScenerySpotApi } from '@/api/scenery_spot'
import titleStore from '@/store/title'
import ScenerySpotInfo from '@/components/ScenerySpotForm.vue'
import type ScenerySpot from '@/model/ScenerySpot'
import { ErrorMessage, InfoMessage, SuccessMessage } from '@/util/Message'

titleStore.updateTitle('景点管理')

onBeforeMount(() => loadScenerySpots())

const scenerySpots = ref<ScenerySpot[]>([])

const el = ref<InstanceType<typeof ScenerySpotInfo> | null>(null)

const loadScenerySpots = async () => {
  const res = await getAllScenerySpot()
  if (res.success) {
    scenerySpots.value = res.data
  } else {
    ErrorMessage(res.message)
  }
}

const addScenerySpot = async (spot: ScenerySpot) => {
  try {
    const res = await addScenerySpotApi(spot)
    if (res.success) {
      SuccessMessage('添加成功')
      el.value?.hide()
      el.value?.reset()
      await loadScenerySpots()
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('添加失败')
  }
}

const editScenerySpot = async (spot: ScenerySpot) => {
  try {
    const res = await updateScenerySpot(spot)
    if (res.success) {
      SuccessMessage('更新成功')
      el.value?.hide()
      el.value?.reset()
      await loadScenerySpots()
    } else {
      ErrorMessage(res.message)
    }
  } catch {
    ErrorMessage('更新失败')
  }
}

const removeScenerySpot = (spot: ScenerySpot) => {
  ElMessageBox.confirm('确认删除该景点？')
    .then(async () => {
      const res = await removeScenerySpotApi(spot.id)
      if (res.success) {
        SuccessMessage('删除成功')
        await loadScenerySpots()
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
