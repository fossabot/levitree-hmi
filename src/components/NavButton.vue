<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps(['to'])
</script>

<template>
  <RouterLink
    :to="to"
    active-class="text-white bg-gray-500 hover:bg-gray-500"
    class="p-2 px-6 rounded-lg flex-grow text-center text-lg font-medium border text-gray-500 hover:bg-gray-50"
  >
    <slot></slot>
  </RouterLink>
</template>
