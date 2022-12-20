<template>
  <el-page-header title="返回" :content="title" @back="handleBack" />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElPageHeader } from 'element-plus'
import titleStore from '@/store/title'

const router = useRouter()

const { title } = storeToRefs(titleStore)

const handleBack = () => {
  console.log('back')
  router.push('/')
}
</script>

<style lang="less" scoped></style>
