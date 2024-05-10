<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
  useForwardPropsEmits,
} from 'radix-vue';
import type { TooltipRootEmits, TooltipRootProps } from 'radix-vue';

import styles from './styles.module.css';

const props = withDefaults(defineProps<TooltipRootProps>(), { delayDuration: 100 });
const emits = defineEmits<TooltipRootEmits>();

const forward = useForwardPropsEmits(props, emits);
</script>

<template>
  <TooltipRoot v-bind="forward">
    <TooltipTrigger as-child>
      <slot name="trigger" />
    </TooltipTrigger>

    <TooltipPortal>
      <TooltipContent avoid-collisions side="left" :side-offset="8" :class="styles.content">
        <TooltipArrow :width="16" :height="8" :class="styles.arrow" />
        <slot />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
