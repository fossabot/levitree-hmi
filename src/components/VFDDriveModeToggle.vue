<script setup lang="ts">
import { DriveMode } from '@/plugins/backend_types'
const props = defineProps<{
  driveMode: DriveMode
  disabled: boolean
}>()

const emit = defineEmits<{
  driveModeChanged: [value: DriveMode]
}>()

const update = (newDriveMode: DriveMode) => {
  if (newDriveMode !== props.driveMode) {
    emit('driveModeChanged', newDriveMode)
  }
}
</script>

<template>
  <div className="w-100 inline-flex flex-grow rounded-md" role="group">
    <button
      type="button"
      :disabled="disabled"
      v-on:click="update(DriveMode.FORWARD)"
      class="h-14 flex-grow py-2 text-lg font-light rounded-s-lg border border-blue-600 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 bg-white text-blue-600 hover:bg-gray-100"
      :class="{
        '!bg-blue-600 !text-white': driveMode === DriveMode.FORWARD,
        '!bg-gray-50 !border-blue-300 !text-blue-300 hover:!bg-white':
          driveMode === DriveMode.OFFLINE
      }"
    >
      Forward
    </button>
    <button
      type="button"
      :disabled="disabled"
      v-on:click="update(DriveMode.REVERSE)"
      class="h-14 flex-grow py-2 text-lg font-light border border-blue-600 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 bg-white text-blue-600 hover:bg-gray-100"
      :class="{
        '!bg-blue-600 !text-white': driveMode === DriveMode.REVERSE,
        '!bg-gray-50 !border-blue-300 !text-blue-300 hover:!bg-white':
          driveMode === DriveMode.OFFLINE
      }"
    >
      Reverse
    </button>
    <button
      type="button"
      :disabled="disabled"
      v-on:click="update(DriveMode.STOP)"
      class="h-14 flex-grow py-2 text-lg font-light rounded-e-lg border border-blue-600 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 bg-white text-blue-600 hover:bg-gray-100"
      :class="{
        '!bg-blue-600 !text-white': driveMode === DriveMode.STOP,
        '!bg-gray-50 !border-blue-300 !text-blue-300 hover:!bg-white':
          driveMode === DriveMode.OFFLINE
      }"
    >
      Stop
    </button>
  </div>
</template>
