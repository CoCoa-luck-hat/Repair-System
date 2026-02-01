// Utilities
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts:[]
  }),
  actions:{
    ToastAdd(text,type){
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2,8)
      const toast = {
        id:id,
        text:text,
        type:type
      } 
      this.toasts.push(toast)
      setTimeout(()=>{
        this.ToastRemove(id)
      },3000)
    },
    ToastRemove(id){
      const index = this.toasts.findIndex((t)=>t.id===id)
      this.toasts.splice(index,1)
    }
  }
})
