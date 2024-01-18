<script setup lang="ts">
import NavButton from './NavButton.vue'
</script>

<template>
  <div class="flex w-full justify-center my-4">
    <div class="flex justify-evenly w-full max-w-lg gap-4">
      <NavButton to="/dashboard">Dashboard</NavButton>
      <NavButton to="/autopilot">Autopilot</NavButton>
      <NavButton to="/controls">Controls</NavButton>
    </div>
  </div>
</template>
