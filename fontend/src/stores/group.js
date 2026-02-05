// Utilities
import { defineStore } from 'pinia'
import api from '@/plugins/axios'
import router from '@/router'

export const useGroupStore = defineStore('group', {
  state: () => ({
    groups: []
  }),
  actions: {
    async Select(){
        const response = await api.get("/group")
        this.groups = response.data.group
    }
  }
})
