<script setup lang="ts">
import { ref } from 'vue'

import ErrorIcon from 'shared/icons/error.svg'
import { BaseButton } from 'shared/ui/base-button'

import Modal from './index.vue'

const isOpen = ref(false)
</script>

<template>
  <Story>
    <Variant title="default">
      <BaseButton @click="isOpen = true">
        Click me
      </BaseButton>

      <Modal v-model:open="isOpen">
        <template #icon>
          <ErrorIcon />
        </template>
        <template #title>
          Hello!
        </template>
        <template #description>
          This is some additional text
        </template>
        <template #actions="{ close }">
          <BaseButton @click="close">
            Close this modal
          </BaseButton>
        </template>
      </Modal>
    </Variant>
  </Story>
</template>
