// Utilities
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    user:[]
  }),
  actions:{
    async Register(data){
      const response = await api.post('/register',data)
      return response.data
    },
    async Login(data){
      const response = await api.post('/login',data)
      return response.data
    }

  }
})
