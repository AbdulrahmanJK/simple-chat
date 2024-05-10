<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'radix-vue'
import type { DialogRootEmits } from 'radix-vue'

import CloseIcon from 'shared/icons/close.svg'

import styles from './styles.module.css'

const emit = defineEmits<DialogRootEmits>()
defineSlots<{
  default(props: { close: VoidFunction }): never
  icon(props: object): never
  title(props: object): never
  description(props: object): never
  actions(props: { close: VoidFunction }): never
}>()
function closeModal(): void {
  emit('update:open', false)
}
</script>

<template>
  <DialogRoot @update:open="$emit('update:open', $event)">
    <DialogPortal disabled>
      <DialogOverlay :class="styles.overlay">
        <DialogContent :class="styles.content">
          <DialogClose :class="styles.close" @click="closeModal">
            <CloseIcon />
          </DialogClose>

          <div v-if="$slots.icon" :class="styles.icon">
            <slot name="icon" />
          </div>

          <DialogTitle v-if="$slots.title" :class="styles.title">
            <slot name="title" />
          </DialogTitle>

          <DialogDescription v-if="$slots.description" :class="styles.description">
            <slot name="description" />
          </DialogDescription>

          <slot :close="closeModal" />

          <div v-if="$slots.actions" :class="styles.actions">
            <slot :close="closeModal" name="actions" />
          </div>
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
