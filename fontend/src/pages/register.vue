<style scoped>
.card-custom {
  box-shadow: 0px 4px 21px #00000042;
  padding: 30px 30px 30px;
  border-radius: 25px;
  width: 350px;
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div class="card-custom">
    <h1 class="text-center mb-5">Sign Up</h1>
    <v-form ref="FormVail" class="d-flex ga-2 flex-column">
      <v-text-field label="Fullname" variant="outlined" clearable="" v-model="ValueForm.fullname"
        :rules="[v => !!v || 'กรุณากรอกชื่อจริง']"></v-text-field>
      <v-text-field label="Email" variant="outlined" clearable="" v-model="ValueForm.email"
        :rules="[v => !!v || 'กรุณากรอกอีเมล']"></v-text-field>
      <v-text-field label="Username" variant="outlined" clearable="" v-model="ValueForm.username"
        :rules="[v => !!v || 'กรุณากรอกชื่อผู้ใช้']"></v-text-field>
      <v-text-field label="Password" variant="outlined" clearable="" v-model="ValueForm.password"
        :rules="[v => !!v || 'กรุณากรอกรหัสผ่าน']"></v-text-field>
      <v-btn variant="tonal" color="teal-accent-4" class="w-100" @click="SubmitForm">Sign Up</v-btn>
    </v-form>
    <div class="d-flex ga-1 text-subtitle-2 text-grey-darken-1 justify-center mt-2">
      Have an account?
      <router-link :to="{ name: 'login' }" class="text-teal-accent-3">Sign In</router-link>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
import { useToastStore } from '@/stores/toast';
import { reactive, ref } from 'vue';


definePage({
  name: 'register'
})

const FormVail = ref()
const ToastStore = useToastStore()
const AppStore = useAppStore()

const ValueForm = reactive({
  fullname:'',
  email:'',
  username:'',
  password:''
})

const SubmitForm = async () => {
  const { valid } = await FormVail.value.validate()

  if (!valid) {
    ToastStore.ToastAdd('กรุณากรอกข้อมูลให้ครบ', 'error')
  } else {
    try {
      const response  = await AppStore.Register(ValueForm)
    } catch (error) {
      if(error.response?.data?.Validator_error){
        error.response.data.Validator_error.map((e)=>ToastStore.ToastAdd(e.msg,'error'))
      }else{
        ToastStore.ToastAdd(error.response.data.message,'error')
      }
    }
  }

}

</script>
