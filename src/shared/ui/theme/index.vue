<script setup lang="ts">
import './variables.css';
import { ToastProvider } from '../toast';
import { TooltipProvider } from '../tooltip';
</script>

<template>
  <Confirm />

  <ToastProvider>
    <TooltipProvider>
      <slot />
    </TooltipProvider>
  </ToastProvider>
</template>
