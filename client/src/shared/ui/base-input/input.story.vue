<script setup lang="ts">
import { ref } from 'vue';

import BaseInput from './index.vue';

const input = ref('');
</script>

<template>
  <Story>
    <Variant title="default">
      <BaseInput v-model:value="input" title="Какой то заголовок)" />
    </Variant>
  </Story>
</template>
