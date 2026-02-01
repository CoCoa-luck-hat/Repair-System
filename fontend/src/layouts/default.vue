<style scoped>
.page-enter-active,.page-leave-active{
  transition: all 0.4s ease-in-out;
}
.page-enter-from{
  opacity: 0;
  transform: scale(0.6);
}
.page-enter-to{
  opacity: 1;
  transform: scale(1);
}
.page-leave-to{
  opacity: 0;
  transform: scale(0.6);
}
</style>
<template>
  <v-main>
    <v-container class="d-flex align-center justify-center h-100">
      <router-view v-slot="{Component}">
        <transition name="page" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </v-container>
  </v-main>
</template>

<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute()

</script>
