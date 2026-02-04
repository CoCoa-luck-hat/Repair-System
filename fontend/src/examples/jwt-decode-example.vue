<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title>ตัวอย่างการใช้ jwt-decode</v-card-title>
      
      <!-- แสดงข้อมูลจาก token -->
      <v-card-text v-if="userInfo">
        <h3>ข้อมูลผู้ใช้จาก Token:</h3>
        <p><strong>User ID:</strong> {{ userInfo.userId }}</p>
        <p><strong>Username:</strong> {{ userInfo.username }}</p>
        <p><strong>Role:</strong> {{ userInfo.role }}</p>
        <p><strong>Email:</strong> {{ userInfo.email }}</p>
        <p><strong>Token หมดอายุ:</strong> {{ tokenExpired ? 'ใช่' : 'ไม่' }}</p>
      </v-card-text>

      <v-card-text v-else>
        <p>ไม่พบ token หรือ token ไม่ถูกต้อง</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { jwtDecode } from 'jwt-decode'

const userInfo = ref(null)
const tokenExpired = ref(false)

onMounted(() => {
  // ดึง token จาก localStorage (หรือที่ที่คุณเก็บไว้)
  const token = localStorage.getItem('token')
  
  if (token) {
    try {
      // ถอดรหัส token
      const decoded = jwtDecode(token)
      userInfo.value = decoded
      
      // ตรวจสอบว่าหมดอายุหรือยัง
      const currentTime = Date.now() / 1000
      tokenExpired.value = decoded.exp < currentTime
      
      console.log('ข้อมูลจาก token:', decoded)
    } catch (error) {
      console.error('ไม่สามารถ decode token ได้:', error)
    }
  }
})
</script>
