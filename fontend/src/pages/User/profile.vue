<template>
    <div class="bg-white rounded-lg elevation-1 overflow-hidden " style="max-width: 600px; width: 100%;">
        <div class="bg-blue-accent-4 d-flex justify-space-between align-centern pa-4">
            <div class="d-flex ga-2 text-h6">
                <v-icon icon="mdi-account-edit"></v-icon>
                <div class="font-weight-bold">แก้ไขข้อมูลส่วนตัว</div>
            </div>
            <div class="d-flex align-center opacity-50">
                <v-icon icon="mdi-close"></v-icon>
                <div class="">ยกเลิก</div>
            </div>
        </div>
        <div class="pa-4">
            
        </div>
    </div>
</template>
<script setup>
    definePage({
        name:'user-profile',
        meta:{
            layout:'UserLayout'
        }
    })
</script>