<script setup lang="ts">
import NavButton from './NavButton.vue'
</script>

<template>
  <div class="flex w-full justify-evenly items-center my-4">
    <div class="flex-1">
      <img src="/levitree_logo.png" class="h-11 pl-4" />
    </div>
    <div class="flex justify-evenly max-w-lg gap-4">
      <NavButton to="/dashboard">Dashboard</NavButton>
      <NavButton to="/autopilot">Autopilot</NavButton>
      <NavButton to="/controls">Controls</NavButton>
    </div>
    <div class="flex-1"></div>
  </div>
</template>
