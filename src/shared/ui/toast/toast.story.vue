<template>
  <Story>
    <Variant title="default">
      <ToastProvider>
        <BaseButton @click="open">Open toast</BaseButton>
      </ToastProvider>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ToastProvider, openToast } from './index';
import { BaseButton } from '../base-button';

const open = (): void => {
  openToast({ title: 'Toast example' });
};
</script>
