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
    <h1 class="text-center mb-5">Sign In</h1>
    <v-form ref="FormVail" class="d-flex ga-2 flex-column">
      <v-text-field label="Email" variant="outlined" clearable=""
        :rules="[v => !!v || 'กรุณากรอกอีเมล']"></v-text-field>
      <v-text-field label="Password" variant="outlined" clearable=""
        :rules="[v => !!v || 'กรุณากรอกรหัสผ่าน']"></v-text-field>
      <v-btn variant="tonal" color="teal-accent-4" class="w-100" @click="SubmitForm">Sign In</v-btn>
    </v-form>
    <div class="d-flex ga-1 text-subtitle-2 text-grey-darken-1 justify-center mt-2">
      Do not have account?
      <router-link :to="{ name:'register'}" class="text-teal-accent-3">Sign Up</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePage({
  name: 'login'
})

const FormVail = ref()

const SubmitForm = async () => {
  const { valid } = await FormVail.value.validate()

  if (!valid) {

  } else {

  }

}

</script>
