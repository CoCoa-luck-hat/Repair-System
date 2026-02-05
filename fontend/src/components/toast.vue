<style scoped> 
    .toast-custom{
        position: fixed;
        bottom: 5px;
        right:5px;
        z-index: 999999;
        display: flex;
        flex-direction: column-reverse;
        gap: 2px;
    }

    .toast-enter-active,.toast-leave-active{
        transition: all 0.3s ease;
    }
    .toast-enter-from{
        opacity: 0;
        transform: translateY(-50px);
    }
    .toast-enter-to{
        opacity: 1;
        transform: translateY(0px);
    }
    .toast-leave-to{
        opacity: 0;
        transform: scale(0.6);
    }
</style>
<template>

    <transition-group name="toast" tag="div" class="toast-custom">
        <v-alert v-for="toast in ToastStore.toasts" :key="toast.id" :type="toast.type" :text="toast.text" ></v-alert>
    </transition-group>
    
</template>

<script setup>
    import { useToastStore } from '@/stores/toast';
    const ToastStore = useToastStore()

</script>