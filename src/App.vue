<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from './components/NavHeader.vue'
import 'vue-toast-notification/dist/theme-sugar.css'
</script>

<template>
  <div class="h-screen overflow-x-hidden bg-gray-100">
    <NavHeader />
    <main class="m-0 bg-white mx-4 mb-4 rounded-lg shadow-lg">
      <div class="border-1 rounded-md bg-white p-5">
        <RouterView />
      </div>
    </main>
  </div>
</template>
