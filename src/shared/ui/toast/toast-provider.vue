<template>
  <ToastProvider label="Notification" :duration="3000" swipe-direction="right">
    <slot />

    <Toast
      v-if="toasts.activeToast"
      :key="toasts.activeToast.id"
      :open="!!toasts.activeToast.id"
      :title="toasts.activeToast.title"
      :content="toasts.activeToast.content"
      @update:open="toasts.removeFirstFromQueue"
    />

    <ToastViewport :class="styles.viewport" />
  </ToastProvider>
</template>

<script setup lang="ts">
import { ToastProvider, ToastViewport } from 'radix-vue';

import { useToastStore } from './model';
import styles from './styles.module.css';
import Toast from './toast.vue';

const toasts = useToastStore();
</script>
