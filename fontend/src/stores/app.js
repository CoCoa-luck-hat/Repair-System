// Utilities
import { defineStore } from 'pinia'
import api from '@/plugins/axios'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null
  }),
  actions: {
    async Register(data) {
      const response = await api.post('/register', data)
      return response.data
    },
    async Login(data) {
      const response = await api.post('/login', data)
      localStorage.setItem('token', response.data.token)
      this.user = response.data.user
      return response.data
    },
    async Logout() {
      this.user = null,
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    },
    async Profile(){
      const response = await api.get('/profile')
      this.user = response.data.user
    },
    async EditProfile(data){
      const response = await api.put('/profile',data)
      this.user = response.data.user
      return response.data
    }
  }
})
