<script setup lang="ts">
import { ref } from 'vue'

import BaseCheckbox from './index.vue'

const checked = ref(false)
</script>

<template>
  <Story>
    <Variant title="default">
      <BaseCheckbox v-model:checked="checked">
        Label for checkbox
      </BaseCheckbox>
    </Variant>
    <Variant title="disabled">
      <BaseCheckbox disabled default-checked>
        Disabled
      </BaseCheckbox>
    </Variant>
  </Story>
</template>
