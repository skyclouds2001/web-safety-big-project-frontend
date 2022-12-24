<template>
  <el-dialog v-model="visual" title="门票" @close="cancel">
    <el-form label-width="100px" hide-required-asterisk>
      <el-form-item label="门票名称" required>
        <el-input v-model="ticket.name" name="name" />
      </el-form-item>
      <el-form-item label="门票描述">
        <el-input v-model="ticket.desc" name="desc" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" resize="none" />
      </el-form-item>
      <el-form-item label="门票类型" required>
        <el-select v-model="ticket.type" name="type" clearable>
          <el-option v-for="item in ticketTypes" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="门票价格" required>
        <el-input-number v-model="ticket.price" name="price" :min="0" step-strictly />
      </el-form-item>
      <el-form-item label="门票归属景点" required>
        <el-select v-model="ticket.scenerySpotId" name="scenerySpotId" clearable>
          <el-option v-for="item in scenerySpots" :key="item.id" :label="item.name" :value="item.id" />
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
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElDialog, ElButton, ElSelect, ElOption } from 'element-plus'
import { getAllScenerySpot } from '@/api/scenery_spot'
import { ErrorMessage } from '@/util/Message'
import { type as ticketTypes } from '@/data/ticket'
import type ScenerySpot from '@/model/ScenerySpot'
import type Ticket from '@/model/Ticket'

export default defineComponent({
  name: 'TicketForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    ElDialog,
    ElButton,
    ElSelect,
    ElOption,
  },
  props: [],
  emits: ['save', 'update'],
  data() {
    return {
      ticket: {
        name: '',
        desc: '',
        type: 0,
        price: 0,
        scenerySpotId: 0,
      },
      visual: false,
      mode: 'save',
      id: -1,
      ticketTypes,
      scenerySpots: [] as ScenerySpot[],
    }
  },
  beforeMount() {
    getAllScenerySpot()
      .then(res => {
        this.scenerySpots = res.data
      })
      .catch(() => {
        ErrorMessage('')
      })
  },
  methods: {
    cancel() {
      this.hide()
      this.reset()
    },
    submit() {
      if (this.mode === 'save') {
        const ticket: Partial<Ticket> = { ...this.ticket }
        this.$emit('save', ticket)
      } else if (this.mode === 'update') {
        const ticket: Partial<Ticket> = { ...this.ticket }
        ticket.id = this.id
        this.$emit('update', ticket)
      }
    },
    init(ticket: Ticket) {
      this.ticket.name = ticket.name
      this.ticket.desc = ticket.desc ?? ''
      this.ticket.type = ticket.type
      this.ticket.price = ticket.price
      this.ticket.scenerySpotId = ticket.scenerySpotId
    },
    reset() {
      this.ticket.name = ''
      this.ticket.desc = ''
      this.ticket.type = 0
      this.ticket.price = 0
      this.ticket.scenerySpotId = 0
    },
    show(mode: 'save' | 'update', data?: Ticket) {
      this.visual = true
      this.mode = mode
      if (mode === 'update') {
        this.init(data as Ticket)
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
