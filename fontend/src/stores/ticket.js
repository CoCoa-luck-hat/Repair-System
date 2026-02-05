// Utilities
import { defineStore } from 'pinia'
import api from '@/plugins/axios'
import router from '@/router'

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    tickets: [],
    Select_ticket:{}
  }),
  actions: {
    async Select(){
        const response = await api.get(`/ticket`)
        this.tickets = response.data.tickets
    },
    async Select_id(user_id){
        const response = await api.get(`/ticket/${user_id}`)
        this.tickets = response.data.tickets
        console.log(this.tickets)
    },
    async Post(data){
        const response = await api.post("/ticket",data)
        return response.data
    }
  }
})
