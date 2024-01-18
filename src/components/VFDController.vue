<script setup lang="ts">
import { DriveMode, type VFD } from '@/plugins/backend_types'
import VFDDriveModeToggle from './VFDDriveModeToggle.vue'
import { useVFDStore } from '@/stores/VFDStore'
import ValueViewer from './ValueViewer.vue'
import RangeSlider from './RangeSlider.vue'

defineProps<{
  vfd: VFD
  extraMeasurementName?: string
  extraMeasurementUnits?: string
  extraMeasurementValue?: string | number
}>()

const vfdStore = useVFDStore()
</script>

<template>
  <div class="grid grid-cols-6 gap-2">
    <div class="col-span-6 mt-2 flex flex-col justify-start gap-5 lg:col-span-2">
      <h1 class="font-sans text-2xl font-light flex flex-inline items-center justify-between gap-6">
        {{ vfd.display_name }}
        <span
          v-if="vfd.state.cur_drive_mode === DriveMode.OFFLINE"
          class="text-red-600 font-semibold text-xl"
          >OFFLINE</span
        >
      </h1>
      <VFDDriveModeToggle
        :disabled="vfd.state.cur_drive_mode === DriveMode.OFFLINE"
        :drive-mode="vfd.state.tgt_drive_mode"
        v-on:drive-mode-changed="
          (value) => {
            console.log(value)
            vfdStore.setDriveMode(vfd, value)
          }
        "
      ></VFDDriveModeToggle>
    </div>
    <div class="col-span-6 mr-4 mt-0 flex flex-col gap-0 p-4 pb-0 pt-0 lg:col-span-4">
      <div class="flex h-min items-center justify-start gap-4 p-4 pb-0 mt-[-5px]">
        <RangeSlider
          :disabled="vfd.state.cur_drive_mode === DriveMode.OFFLINE"
          :value="vfd.state.tgt_frequency"
          v-on:update="
            (value) => {
              vfdStore.setFrequency(vfd, value)
            }
          "
          :min="0"
          :max="vfd.state.max_frequency"
          legend=" Hz"
        />
      </div>
      <div class="flex h-min justify-start items-end gap-4 p-4 pr-0 mt-[-10px]">
        <ValueViewer
          name="Current Mode"
          :value="
            vfd.state.cur_drive_mode === DriveMode.FORWARD
              ? `Forward`
              : vfd.state.cur_drive_mode === DriveMode.REVERSE
                ? `Reverse`
                : vfd.state.cur_drive_mode === DriveMode.STOP
                  ? `Off`
                  : `OFFLINE`
          "
        />
        <ValueViewer name="Output freq" :value="vfd.state.cur_frequency.toFixed(2)" units="Hz" />
        <ValueViewer name="Input power" :value="vfd.state.input_power.toFixed(2)" units="W" />
        <ValueViewer name="Output current" :value="vfd.state.output_current.toFixed(2)" units="A" />
        <ValueViewer name="Output voltage" :value="vfd.state.output_voltage.toFixed(2)" units="V" />
        <div v-if="extraMeasurementName" class="flex-grow"></div>
        <ValueViewer
          v-if="extraMeasurementName"
          :name="extraMeasurementName"
          :value="vfd.state.output_voltage"
          :units="extraMeasurementUnits"
        />
      </div>
    </div>
  </div>
</template>
