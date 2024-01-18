<script setup lang="ts">
defineProps<{
  value: string | number
  name?: string
  units?: string
}>()
</script>

<template>
  <div class="flex w-44 flex-col items-center gap-2">
    <h6 v-if="name !== undefined" class="w-full text-center font-semibold">
      {{ name }}
    </h6>
    <div class="w-full rounded-md bg-gray-300 py-1 text-center text-lg font-bold">
      {{ value }} {{ units !== undefined ? units : null }}
    </div>
  </div>
</template>
