<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'

import Icon from 'shared/icons/check.svg'

import styles from './styles.module.css'

const props = defineProps<CheckboxRootProps & { label?: string }>()
const emits = defineEmits<CheckboxRootEmits>()
defineSlots<{
  default(props: object): never
}>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <label :class="styles.checkbox">
    <CheckboxRoot v-bind="forwarded" :class="styles.root">
      <CheckboxIndicator :class="styles.indicator">
        <Icon />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span v-if="$slots.default" :class="styles.label">
      <slot />
    </span>
  </label>
</template>
