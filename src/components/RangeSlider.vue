<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  min: number
  max: number
  value: number
  legend: string
  disabled: boolean
}>()

let stopChangeTimeout: number | undefined = undefined

const emit = defineEmits<{
  update: [value: number]
}>()

const changing = ref(false)
const internalValue = ref(props.value)
const internalValueFmt = computed(() => Math.floor(internalValue.value))

watch(props, () => {
  if (!changing.value) {
    internalValue.value = props.value
  }
})

const changeStart = () => {
  changing.value = true
  if (stopChangeTimeout) {
    clearTimeout(stopChangeTimeout)
    stopChangeTimeout = undefined
  }
}

const changeEnd = () => {
  stopChangeTimeout = setTimeout(() => {
    changing.value = false
  }, 100)
  emit('update', internalValue.value)
}
</script>

<template>
  <input
    type="range"
    v-model="internalValue"
    v-on:mousedown="changeStart"
    v-on:mouseup="changeEnd"
    v-on:touchstart="changeStart"
    v-on:touchend="changeEnd"
    :disabled="disabled"
    :max="Math.min(max, 60)"
    :min="min"
    class="h-4 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
    :class="{ '[&::-webkit-slider-thumb]:!bg-blue-400': disabled }"
  />
  <div
    class="text-lg font-bold whitespace-nowrap text-right"
    :class="{ 'w-24': legend.length > 3, 'w-14': legend.length <= 3 }"
  >
    {{ internalValueFmt }} {{ legend }}
  </div>
</template>
