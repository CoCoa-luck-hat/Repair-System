<style scoped>
.card-custom {
    width: 500px;
    padding: 20px;
    border-radius: 10px;
    background: white;
    overflow-y: auto;
}
</style>
<template>
    <div class="d-flex flex-column w-100 ga-10 py-10">
        <div class="w-100  bg-white rounded-lg pa-7" style="box-shadow: 0px 2px 7px #bdbdbd;">
            <div class="d-flex ga-2 align-center mb-5">
                <v-icon icon="mdi-plus-circle" size="x-large" color="blue-darken-4"></v-icon>
                <div class="text-blue-darken-4 font-weight-bold text-h5">แจ้งปัญหาใหม่</div>
            </div>
            <v-form ref="FormVail">
                <v-row no-gutters>
                    <v-col cols="6">
                        <v-text-field class="mx-2" label="หัวข้อปัญหา" clearable="" variant="outlined" :rules="[(v)=>!!v || 'กรุณากรอกหัวข้อปัญหา']" v-model="ValueForm.title"
                            placeholder="เช่น เครื่องปริ้นหมึกไม่ออก"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-select class="mx-2" label="หมวดหมู่" variant="outlined" :items="GroupStore.groups" item-title="group_name" item-value="group_id" v-model="ValueForm.group_id"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea class="mx-2" label="รายละเอียด" variant="outlined" :rules="[(v)=>!!v || 'กรุณากรอกรายละเอียด']" v-model="ValueForm.description"></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-file-input clearable="" label="รูปภาพประกอบ (ถ้ามี)" variant="outlined" class="mx-2"
                            accept="image/png, image/jpg, image/jpeg" v-model="ValueForm.fileimage"></v-file-input>
                    </v-col>
                </v-row>
            </v-form>
            <v-btn color="blue-darken-3 mx-2" variant="flat" @click="SubmitForm()">
                ส่งแจ้งซ่อม
            </v-btn>
        </div>
        <div class="">
            <div class="text-h5 mb-5 font-weight-bold">ประวัติการแจ้งซ่อมของฉัน</div>
            <div class="d-flex ga-3">
                <div  @click="ModalDetail(ticket)" v-for="ticket in TicketStore.tickets" :key="ticket.id" :class="ticket.status == 'pending' ? 'border-error' : ticket.status == 'done' ? 'border-success' : 'border-warning'" class="bg-white w-100 cursor-pointer rounded-lg px-7 pt-5 pb-2 border-s-lg border-opacity-100"
                    style="box-shadow: 0px 2px 7px #bdbdbd;">
                    <div class="d-flex justify-space-between align-center mb-2">
                        <div class="text-h5">{{ticket.title}}</div>
                        <div class="d-flex ga-1 align-center">
                            <v-btn prepend-icon="mdi-check-circle" class="text-subtitle-2" :color="ticket.status == 'pending' ? 'red' : ticket.status == 'done' ? 'green' : 'warning'">{{ ticket.status }}</v-btn>
                            <v-icon icon="mdi-fullscreen" class="text-h4"></v-icon>
                        </div>
                    </div>
                    <div class="d-flex ga-2 align-center">
                        <v-chip class="text-grey-darken-3">{{ ticket.group_name }}</v-chip>
                        <div class=" d-flex text-subtitle-2 ga-1 text-grey-darken-2">
                            <v-icon icon="mdi-clock-edit"></v-icon>
                            <div class="p-2">
                                {{ ticket.TIMEFORMAT }}
                            </div>
                        </div>
                    </div>
                    <div class="py-3 ps-2">
                        {{ticket.description}}
                    </div>
                    <v-divider :thickness="1" class="mb-1"></v-divider>
                    <div class="d-flex flex-column py-2 ga-1">
                        <div class="text-grey-darken-3 d-flex ga-1 text-subtitle-2">
                            <v-icon icon="mdi-account-hard-hat"></v-icon>
                            <div class="">ผู้รับผิดชอบ: <b v-if="ticket.staff_id">{{ ticket.staff_id }}</b> <b v-else class="text-red-accent-3">ยังไม่มีช่างรับงาน</b></div>
                        </div>
                        <div v-if="ticket.staff_comment" class="text-green-darken-1 d-flex ga-1 text-subtitle-2">
                            <v-icon icon="mdi-chat"></v-icon>
                            <div class=""> วิธีแก้ไข: {{ticket.staff_comment}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog v-model="Detail" width="auto">
            <div class="card-custom">
                <div class="d-flex justify-space-between">
                    <div class="d-flex align-center ga-1">
                        <v-icon icon="mdi-information" color="blue-darken-1"></v-icon>
                        <div class="text-h6">รายละเอียดงานซ่อม #{{ TicketStore.Select_ticket.id }}</div>
                    </div>
                    <div class="">
                        <v-icon icon="mdi-close" @click="Detail = false"></v-icon>
                    </div>
                </div>
                <v-divider class="my-4"></v-divider>
                <div class="border rounded-lg pa-4">
                    <div class="d-flex justify-space-between">
                        <div class="d-flex flex-column">
                            <div class="text-grey-darken-2 text-subtitle-2">
                                สถานะปัจุบัน
                            </div>
                            <div class="d-flex align-center ga-1 rounded border py-1 px-2 w-auto"
                                style="font-size: 14px;">
                                <v-icon icon="mdi-check-circle" size="x-small"></v-icon>
                                <div class="">สำเร็จ</div>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="text-grey-darken-2 text-subtitle-2 text-end">
                                วันที่แจ้ง
                            </div>
                            <div class="">{{ TicketStore.Select_ticket.TIMEFORMAT }}</div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 mb-1 text-lg-h6 ">
                    {{TicketStore.Select_ticket.title}}
                </div>
                <v-chip color="primary" size="small" class="mb-1">
                    {{ TicketStore.Select_ticket.group_name }}
                </v-chip>
                <div class="border rounded-lg pa-4 mt-2">
                    <div class="">
                        {{TicketStore.Select_ticket.description}}
                    </div>
                </div>
                <v-divider class="my-4"></v-divider>
                <div class="d-flex mb-4">
                    <div class="d-flex flex-grow-1 flex-column">
                        <div class="text-grey-darken-2 text-subtitle-2">
                            ผู้แจ้ง
                        </div>
                        <div class="">{{ TicketStore.Select_ticket.fullname}}</div>

                    </div>
                    <div class="d-flex flex-1 flex-grow-1 flex-column">
                        <div class="text-grey-darken-2 text-subtitle-2 ">
                            ผู้รับผิดชอบ
                        </div>
                        <div class="" v-if="TicketStore.Select_ticket.staff_id">Staff Ball</div>
                        <div  v-else class="text-red-accent-3">ยังไม่มีช่างรับงาน</div>

                    </div>
                </div>
                <div class="mt-3">
                    <div class=" d-flex ga-1 mb-2">
                        <v-icon icon="mdi-image"></v-icon>
                        <div class="">รูปภาพประกอบ</div>
                    </div>
                    <div class="pa-1  bg-grey-lighten-1 rounded border">
                        <img :src="getImageUrl(TicketStore.Select_ticket.fileimage)" class="w-100 mb-1"
                            style=" object-fit: cover; max-height: 400px;" alt="">
                    </div>
                </div>
                <div
                    style="border: 1px #00800061 solid;border-radius: 10px;padding: 10px;  background: #00800014;color: green;" v-if="TicketStore.Select_ticket.staff_comment">
                    <div class="d-flex ga-1">
                        <v-icon size="small" icon="mdi-check-circle"></v-icon>
                        <b class="">
                            การแก้ไข
                        </b>
                    </div>
                    <div class="">
                        Reset Access Point ให้แล้ว
                    </div>
                </div>
                <v-divider class="my-5"></v-divider>
                <div class="d-flex justify-end">
                    <v-btn variant="tonal" class="" @click="Detail = false">
                        ปิดหน้าต่าง
                    </v-btn>
                </div>

            </div>
        </v-dialog>
    </div>
</template>
<script setup>
import { useAppStore } from '@/stores/app';
import { useGroupStore } from '@/stores/group';
import { useTicketStore } from '@/stores/ticket';
import { useToastStore } from '@/stores/toast';
import getImageUrl from '@/utils/imageUrl';
import { ref, reactive, onMounted } from 'vue';

definePage({
    name: 'user-dashboard',
    meta: {
        requiresAuth: true,
        requiresRole: 'user',
        layout: 'AllLayout'
    }
})

const GroupStore = useGroupStore()
const ToastStore = useToastStore()
const AppStore = useAppStore()
const TicketStore = useTicketStore()

const Detail = ref(false)
const FormVail = ref()

const ModalDetail = (data)=>{
    TicketStore.Select_ticket = data
    Detail.value = true
}

const ValueForm = reactive({
    title:'',
    description:'',
    group_id:'',
    fileimage: null,
    user_id: AppStore.user.user_id
})

const SubmitForm = async()=>{
    const { valid } = await FormVail.value.validate()
    if(valid){
        // สร้าง FormData สำหรับส่งข้อมูลพร้อมไฟล์
        const formData = new FormData()
        formData.append('title', ValueForm.title)
        formData.append('description', ValueForm.description)
        formData.append('group_id', ValueForm.group_id)
        formData.append('user_id', ValueForm.user_id)

        if(ValueForm.fileimage){
            formData.append('fileimage', ValueForm.fileimage)
        }
        
        const response = await TicketStore.Post(formData)
        
        if(response){
            ToastStore.ToastAdd('ส่งแจ้งซ่อมสำเร็จ', 'success')
            // รีเซ็ตฟอร์ม
            ValueForm.title = ''
            ValueForm.description = ''
            ValueForm.fileimage = null
            FormVail.value.reset()
        }
    }else{  
        ToastStore.ToastAdd('กรุณากรอกข้อมูลให้ครบ','error')
    }
}

onMounted(async()=>{
    await GroupStore.Select()
    console.log(GroupStore.groups)
    // เลือกรายการแรกโดยอัตโนมัติ
    if(GroupStore.groups && GroupStore.groups.length > 0){
        ValueForm.group_id = GroupStore.groups[0].group_id
    }

    await TicketStore.Select_id(AppStore.user.user_id)
})
</script>