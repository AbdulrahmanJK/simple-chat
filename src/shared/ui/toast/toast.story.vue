<script setup lang="ts">
import { BaseButton } from '../base-button';
import { ToastProvider, openToast } from './index';

function open(): void {
  openToast({ title: 'Toast example' });
}
</script>

<template>
  <Story>
    <Variant title="default">
      <ToastProvider>
        <BaseButton @click="open">
          Open toast
        </BaseButton>
      </ToastProvider>
    </Variant>
  </Story>
</template>
