<script setup lang="ts">
import styles from './styles.module.css';

withDefaults(
  defineProps<{
    color: 'primary' | 'white' | 'black'
    size: 'xs' | 'sm' | 'md' | 'lg'
  }>(),
  {
    color: 'primary',
    size: 'lg',
  },
);
</script>

<template>
  <svg
    class="spinner--circle"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
    :class="[styles.spinner, styles[color], styles[size]]"
  >
    <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" />
  </svg>
</template>
