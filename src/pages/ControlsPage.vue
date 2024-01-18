<script setup lang="ts">
import VFDController from '@/components/VFDController.vue'
import { useVFDStore } from '@/stores/VFDStore'

const vfdStore = useVFDStore()
</script>

<template>
  <div className="flex flex-col gap-1">
    <VFDController v-for="vfd in vfdStore.vfds" v-bind:key="vfd.slave_id" :vfd="vfd" />
  </div>
</template>
