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
            <v-row no-gutters>
                <v-col cols="6">
                    <v-text-field class="mx-2" label="หัวข้อปัญหา" clearable="" variant="outlined"
                        placeholder="เช่น เครื่องปริ้นหมึกไม่ออก"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-select class="mx-2" label="หมวดหมู่" variant="outlined" :item="[]"></v-select>
                </v-col>
                <v-col cols="12">
                    <v-textarea class="mx-2" label="รายละเอียด" variant="outlined"></v-textarea>
                </v-col>
                <v-col cols="12">
                    <v-file-input clearable="" label="รูปภาพประกอบ (ถ้ามี)" variant="outlined" class="mx-2"
                        accept="image/png, image/jpg, image/jpeg"></v-file-input>
                </v-col>
            </v-row>
            <v-btn color="blue-darken-3 mx-2" variant="flat">
                ส่งแจ้งซ่อม
            </v-btn>
        </div>
        <div class="" @click="Detail = true">
            <div class="text-h5 mb-5 font-weight-bold">ประวัติการแจ้งซ่อมของฉัน</div>
            <div class="d-flex ga-3">
                <div class="bg-white w-100 rounded-lg px-7 pt-5 pb-2 border-s-lg border-success border-opacity-100"
                    style="box-shadow: 0px 2px 7px #bdbdbd;">
                    <div class="d-flex justify-space-between align-center mb-2">
                        <div class="text-h5">ต่อ Wifi ไม่ได้</div>
                        <div class="d-flex ga-1 align-center">
                            <v-btn prepend-icon="mdi-check-circle" class="text-subtitle-2">สำเร็จ</v-btn>
                            <v-icon icon="mdi-fullscreen" class="text-h4"></v-icon>
                        </div>
                    </div>
                    <div class="d-flex ga-2 align-center">
                        <v-chip class="text-grey-darken-3">Network (อินเทอร์เน็ต/Wifi)</v-chip>
                        <div class=" d-flex text-subtitle-2 ga-1 text-grey-darken-2">
                            <v-icon icon="mdi-clock-edit"></v-icon>
                            <div class="p-2">
                                2023-09-30 14:00
                            </div>
                        </div>
                    </div>
                    <div class="py-3 ps-2">
                        ขึ้นเครื่องหมายตกใจสีเหลือง
                    </div>
                    <v-divider :thickness="1" class="mb-1"></v-divider>
                    <div class="d-flex flex-column py-2 ga-1">
                        <div class="text-grey-darken-3 d-flex ga-1 text-subtitle-2">
                            <v-icon icon="mdi-account-hard-hat"></v-icon>
                            <div class="">ผู้รับผิดชอบ: <b>Staff Ball</b></div>
                        </div>
                        <div class="text-green-darken-1 d-flex ga-1 text-subtitle-2">
                            <v-icon icon="mdi-chat"></v-icon>
                            <div class=""> วิธีแก้ไข: Reset Access Point ให้แล้ว</div>
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
                        <div class="text-h6">รายละเอียดงานซ่อม #3</div>
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
                            <div class="">2023-09-30 14:00</div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 mb-1 text-lg-h6 ">
                    ต่อ Wifi ไม่ได้
                </div>
                <v-chip color="primary" size="small" class="mb-1">
                    Network (อินเทอร์เน็ต/Wifi)
                </v-chip>
                <div class="border rounded-lg pa-4 mt-2">
                    <div class="">
                        ขึ้นเครื่องหมายตกใจสีเหลือง
                    </div>
                </div>
                <v-divider class="my-4"></v-divider>
                <div class="d-flex mb-4">
                    <div class="d-flex flex-grow-1 flex-column">
                        <div class="text-grey-darken-2 text-subtitle-2">
                            ผู้แจ้ง
                        </div>
                        <div class="">User A</div>

                    </div>
                    <div class="d-flex flex-1 flex-grow-1 flex-column">
                        <div class="text-grey-darken-2 text-subtitle-2 ">
                            ผู้รับผิดชอบ
                        </div>
                        <div class="">Staff Ball</div>
                    </div>
                </div>
                <div
                    style="border: 1px #00800061 solid;border-radius: 10px;padding: 10px;  background: #00800014;color: green;">
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
import { ref } from 'vue';

definePage({
    name: 'user-dashboard',
    meta: {
        requiresAuth: true,
        requiresRole: 'user',
        layout: 'AllLayout'
    }
})

const Detail = ref(false)
</script>