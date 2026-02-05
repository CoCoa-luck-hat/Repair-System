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
    <div class="">
        <v-row>
            <v-col cols="6">
                <div class="bg-white rounded-lg pa-5 elevation-3 h-100">
                    <div class="d-flex ga-1 text-h6 text-brown-darken-2">
                        <v-icon icon="mdi-cube"></v-icon>
                        <div class="">งานแจ้งซ่อมใหม่ (1)</div>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <!-- contant -->
                    <div class="d-flex flex-column ga-2">
                        <div class="rounded border pa-3 ">
                            <div class="d-flex justify-space-between align-center">
                                <div class="">
                                    เปิดคอมไม่ติด
                                </div>
                                <v-icon icon="mdi-tab-search" color="grey"> </v-icon>
                            </div>
                            <div class="text-subtitle-2 text-grey-darken-1">
                                แจ้งโดย: User A | 2023-10-01 09:00
                            </div>
                            <div class="text-subtitle-2 font-weight-light text-grey-darken-4 py-1">
                                หน้าจอดำ ไฟไม่เข้า ลองขยับปลั๊กแล้วก็ไม่หาย
                            </div>
                            <v-btn color="blue" width="100%" size="small" prepend-icon="mdi-hand-back-left">
                                รับงานนี้</v-btn>
                        </div>

                    </div>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="bg-white rounded-lg pa-5 elevation-3 h-100">
                    <div class="d-flex ga-1 text-h6 text-blue-darken-4">
                        <v-icon icon="mdi-tools"></v-icon>
                        <div class="">งานที่กำลังดำเนินการ (1)</div>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div class="d-flex flex-column ga-2">
                        <div class="rounded border pa-3 ">
                            <div class="d-flex justify-space-between align-center">
                                <div class="">
                                    กระดาษติดเครื่องปริ้น
                                </div>
                                <v-icon icon="mdi-tab-search" class="cursor-pointer" color="grey"
                                    @click="OpenDetailModal()"> </v-icon>
                            </div>
                            <div class="text-subtitle-2 text-grey-darken-1">
                                แจ้งโดย: User A | 2023-10-01 09:00
                            </div>
                            <div class="text-subtitle-2 font-weight-light text-grey-darken-4 py-1">
                                Brother MFC-J200 ชั้น 2 กระดาษติดดึงไม่ออก
                            </div>
                            <img src="https://placehold.co/600x400/e2e8f0/475569?text=Paper+Jam+Photo"
                                class="w-100 mb-1" style="height: 80px; object-fit: cover;" alt="">
                            <v-text-field density="compact" placeholder="ระบุวิธีแกไข"
                                :rules="[(v) => !!v || 'กรุณากรอก']" prepend-inner-icon="mdi-pencil"
                                variant="outlined"></v-text-field>
                            <v-btn color="green" width="100%" size="small" prepend-icon="mdi-check">
                                ปิดงาน</v-btn>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12">
                <div class="bg-white rounded-lg pa-5 elevation-3 h-100">
                    <div class="d-flex ga-1 text-h6 text-amber-darken-4">
                        <v-icon icon="mdi-bookmark-box"></v-icon>
                        <div class="">ประวัติงานล่าสุด</div>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-table>
                        <thead>
                            <tr>
                                <th>
                                    ลำดับ
                                </th>
                                <th>
                                    หัวข้อ
                                </th>
                                <th>
                                    สถานะ
                                </th>
                                <th>
                                    ผู้แจ้ง
                                </th>
                                <th>
                                    วันที่
                                </th>
                                <th>
                                    รายละเอียด
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    #1
                                </td>
                                <td>
                                    ลงโปรแกรม Office ไม่ได้
                                </td>
                                <td>
                                    <v-chip color="green" prepend-icon="mdi-check-circle">
                                        เสร็จสิ้น
                                    </v-chip>
                                </td>
                                <td>
                                    User A
                                </td>
                                <td>
                                    2023-10-05 11:00
                                </td>
                                <td>
                                    <v-chip color="blue" prepend-icon="mdi-tab-search">
                                        รายละเอียด
                                    </v-chip>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </v-col>
        </v-row>
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
                <div class="mt-3">
                    <div class=" d-flex ga-1 mb-2">
                        <v-icon icon="mdi-image"></v-icon>
                        <div class="">รูปภาพประกอบ</div>
                    </div>
                    <div class="pa-1  bg-grey-lighten-1 rounded border">
                        <img src="https://placehold.co/600x400/e2e8f0/475569?text=Paper+Jam+Photo" class="w-100 mb-1"
                            style=" object-fit: cover; max-height: 400px;" alt="">
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
    name: 'staff-dashboard',
    meta: {
        requiresAuth: true,
        requiresRole: 'staff',
        layout: 'AllLayout'
    }
})

const Detail = ref(false)

const OpenDetailModal = () => {
    Detail.value = true
}

</script>