<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps } from 'radix-vue'

import styles from './styles.module.css'

defineProps<TabsTriggerProps>()
</script>

<template>
  <TabsTrigger :class="styles.tab" :value="value" :disabled="disabled">
    <slot />
  </TabsTrigger>
</template>
