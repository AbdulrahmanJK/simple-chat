<script lang="ts" setup>
import { computed } from 'vue'

import { Spinner } from 'shared/ui/spinner'

import styles from './styles.module.css'

const props = withDefaults(
  defineProps<{
    submit?: boolean
    type?: 'primary' | 'secondary' | 'neutral' | 'black' | 'neutral-black'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    disabled?: boolean
    loading?: boolean
    full?: boolean
  }>(),
  {
    type: 'primary',
    size: 'lg',
    disabled: false,
    loading: false,
    full: false,
  },
)
const emit = defineEmits<{
  (event: 'click'): void
}>()

const spinnerColor = computed((): 'primary' | 'white' | 'black' => {
  switch (props.type) {
    case 'primary':
      return 'white'
    case 'secondary':
      return 'primary'
    case 'neutral':
      return 'black'
    default:
      return 'primary'
  }
})

const spinnerSize = computed((): 'xs' | 'sm' | 'md' | 'lg' => {
  switch (props.size) {
    case 'xs':
      return 'md'
    case 'sm':
      return 'xs'
    case 'md':
      return 'xs'
    case 'lg':
      return 'sm'
    case 'xl':
      return 'md'
  }
  return 'md'
})

function onBtnClick(): void {
  emit('click')
}
</script>

<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[styles.button, styles[size], styles[type], full && styles.full]"
    :disabled="disabled"
    @click="onBtnClick"
  >
    <Spinner v-if="loading" :color="spinnerColor" :size="spinnerSize" />
    <slot v-else />
  </button>
</template>
