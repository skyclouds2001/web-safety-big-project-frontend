<template>
  <el-dialog v-model="visual" title="景点" @close="cancel">
    <el-form label-width="100px" hide-required-asterisk>
      <el-form-item label="景点名称" required>
        <el-input v-model="scenerySpot.name" name="name" />
      </el-form-item>
      <el-form-item label="景点描述">
        <el-input v-model="scenerySpot.desc" name="desc" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" resize="none" />
      </el-form-item>
      <el-form-item label="景点地点" required>
        <el-input v-model="scenerySpot.area" name="area" />
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
import { ElForm, ElFormItem, ElInput, ElDialog, ElButton } from 'element-plus'
import type ScenerySpot from '@/model/ScenerySpot'

export default defineComponent({
  name: 'ScenerySpotInfo',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElDialog,
    ElButton,
  },
  props: [],
  emits: ['save', 'update'],
  data() {
    return {
      scenerySpot: {
        name: '',
        desc: '',
        area: '',
      },
      visual: false,
      mode: 'save',
      id: -1,
    }
  },
  methods: {
    cancel() {
      this.hide()
      this.reset()
    },
    submit() {
      if (this.mode === 'save') {
        const spot: Partial<ScenerySpot> = { ...this.scenerySpot }
        this.$emit('save', spot)
      } else if (this.mode === 'update') {
        const spot: Partial<ScenerySpot> = { ...this.scenerySpot }
        spot.id = this.id
        this.$emit('update', spot)
      }
    },
    init(spot: ScenerySpot) {
      this.scenerySpot.name = spot.name
      this.scenerySpot.desc = spot.desc ?? ''
      this.scenerySpot.area = spot.area
    },
    reset() {
      this.scenerySpot.name = ''
      this.scenerySpot.desc = ''
      this.scenerySpot.area = ''
    },
    show(mode: 'save' | 'update', data?: ScenerySpot) {
      this.visual = true
      this.mode = mode
      if (mode === 'update') {
        this.init(data as ScenerySpot)
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
