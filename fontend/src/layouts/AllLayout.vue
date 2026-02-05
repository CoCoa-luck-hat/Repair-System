<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
}

.page-enter-to {
  opacity: 1;
}

.page-leave-to {
  opacity: 0;
}
</style>
<template>
  <div>
    <nav class="d-flex justify-space-between" style="padding: 20px;
      box-shadow: 0px 2px 8px #00000021;">
      <div class="d-flex ga-2 align-center">
        <v-icon icon="mdi-laptop" color="blue-darken-4"></v-icon>
        <div class="font-weight-bold text-h6">
          IT Support System
        </div>
      </div>
      <div class="d-flex align-center ga-2">
        <v-chip color="green">
          {{ AppStore.user.role }}
        </v-chip>
        <v-btn id="menu-account">
          <div class="">{{ AppStore.user.username}}</div>
        </v-btn>
        <v-menu activator="#menu-account">
          <v-list>
            <v-list-item>
              <div class="d-flex ga-1 cursor-pointer" @click="ModalEditProfile = true">
                <v-icon icon="mdi-account"></v-icon>
                <div class="">
                  แก้ไขข้อมูลส่วนตัว
                </div>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="d-flex ga-1 text-red cursor-pointer" @click="AppStore.Logout()">
                <v-icon icon="mdi-exit-to-app"></v-icon>
                <div class="">
                  ออกจากระบบ
                </div>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-dialog v-model="ModalEditProfile" width="auto">
        <div class="rounded-lg overflow-hidden" style="width: 350px;">
          <div class="bg-blue-accent-2 pa-4 align-center d-flex justify-space-between">
            <div class="d-flex align-center text-h6">
              <v-icon icon="mdi-account-edit"></v-icon>
              <div class="">
                แก้ไขข้อมูลส่วนตัว
              </div>
            </div>
            <v-icon icon="mdi-close" class="opacity-50" @click="ModalEditProfile = false"></v-icon>
          </div>
          <div class="pa-4 bg-white pb-1">
            <v-form ref="FormVali" class="">
              <v-text-field label="ชื่อจริง" variant="solo-filled"
                :rules="[(v) => !!v || 'กรุณากรอกชื่อจริง']" v-model="ValueForm.fullname"></v-text-field>
              <v-text-field label="ชื่อผู้ใช้" variant="solo-filled"
                :rules="[(v) => !!v || 'กรุณากรอกชื่อผู้ใช้']" v-model="ValueForm.username"></v-text-field>
              <v-text-field label="รหัสผ่าน" variant="solo-filled"
                :rules="[(v) => !!v || 'กรุณากรอกรหัสผ่าน']" v-model="ValueForm.password"></v-text-field>
            </v-form>
          </div>
          <div class="pa-4 pt-0 bg-white d-flex ga-2">
            <v-btn prepend-icon="mdi-content-save-edit" color="blue-accent-3" @click="SubmitForm()" class="flex-grow-1">
              บันทึกการเปลี่ยนแปลง
            </v-btn>
            <v-btn variant="elevated" color="red-accent-3" class="flex-grow-1" @click="ModalEditProfile = false">
              ยกเลิก
            </v-btn>
          </div>
        </div>
      </v-dialog>
    </nav>
    <v-main>
      <v-container class="d-flex  justify-center  ">
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
import { useToastStore } from '@/stores/toast';
import { ref,reactive } from 'vue';

const AppStore = useAppStore()
const ModalEditProfile = ref(false)
const FormVali = ref()

const ToastStore = useToastStore()

const ValueForm = reactive({
  ...AppStore.user
})

const SubmitForm = async()=>{
  const { valid } = await FormVali.value.validate()
  if(valid){
    const response = AppStore.EditProfile(ValueForm)
    ToastStore.ToastAdd('แก้ไขข้อมูลส่วนตัวสำเร็จ','success')
    ModalEditProfile.value = false
  }else{
    ToastStore.ToastAdd('กรุณากรอกข้อมูลให้ครบ','error')
  }
}

</script>
