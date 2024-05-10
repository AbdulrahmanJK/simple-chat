<script setup lang="ts">
import { variantsMap } from './types';

const keys = Object.keys(variantsMap);
const text = 'The quick brown fox jumps over the lazy dog.';
</script>

<template>
  <Story>
    <Variant title="default">
      <div style="display: flex; flex-direction: column; gap: 12px">
        <typography v-for="key in keys" :key="key" :variant="key">
          {{ key }}: {{ text }}
        </typography>
      </div>
    </Variant>
  </Story>
</template>
