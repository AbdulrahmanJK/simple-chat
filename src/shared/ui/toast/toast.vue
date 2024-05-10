<template>
  <ToastRoot :class="styles.toast" type="foreground">
    <div :class="styles.title">
      <WarningIcon :class="styles.icon" />
      <ToastTitle>{{ title }}</ToastTitle>
    </div>
    <ToastDescription v-if="content">{{ content }}</ToastDescription>
    <!--<ToastAction as-child alt-text="some toast" />-->
    <ToastClose :class="styles.close">
      <CloseIcon />
    </ToastClose>
  </ToastRoot>
</template>

<script setup lang="ts">
import { ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'radix-vue';

import CloseIcon from 'shared/icons/close.svg';
import WarningIcon from 'shared/icons/warning.svg';

import type { ToastProps } from './model';
import styles from './styles.module.css';

defineProps<ToastProps>();
</script>
