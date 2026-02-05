<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
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
  <v-app>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <toast></toast>
  </v-app>
</template>

<script setup>
import Toast from './components/toast.vue';
</script>