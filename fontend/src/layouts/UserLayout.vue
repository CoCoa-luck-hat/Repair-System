<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.page-enter-to {
  opacity: 1;
  transform: scale(1);
}

.page-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
<template>
  <nav class="d-flex justify-space-between" style="padding: 20px;
    box-shadow: 0px 2px 8px #00000021;">
    <div class="d-flex ga-2 align-center">
      <v-icon icon="mdi-laptop" color="blue-darken-4"></v-icon>
      <div class="font-weight-bold text-h6">
        IT Support System
      </div>
    </div>
    <div class="d-flex align-center ga-2">
      <div class="">Name</div>
      <v-icon color="red" icon="mdi-exit-to-app"></v-icon>
    </div>
  </nav>
  <v-main>
    <v-container class="d-flex  justify-center  ">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </v-container>
  </v-main>
</template>

<script setup>


</script>
