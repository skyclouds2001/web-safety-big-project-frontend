import { defineStore } from 'pinia'

const useTitleStore = defineStore('title', {
  state: () => ({
    title: '',
  }),
  getters: {
    getTitle: state => state.title,
  },
  actions: {
    updateTitle(title: string) {
      this.title = title
    },
  },
})

const titleStore = useTitleStore()

export default titleStore
