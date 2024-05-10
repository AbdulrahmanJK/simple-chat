<template>
  <div :class="styles.form">
    <Label for="input" :class="[styles.formLabel, { [styles.labelOnTop]: isLabelOnTop }]">
      <span :class="styles.labelTitle">
        {{ title }}
      </span>
      <RequiredIcon v-if="required" />
    </Label>
    <input
      v-bind="$attrs"
      :class="inputStyles"
      :value="value"
      @focusin="focusInput(true)"
      @focusout="focusInput(false)"
      @input="$emit('update:value', ($event.target as HTMLTextAreaElement).value)"
    />
    <CloseIcon
      v-if="clearable"
      :class="[styles.close, { [styles.empty]: !value.length }]"
      @click="$emit('update:value', '')"
    />
  </div>
</template>

<script setup lang="ts">
import { Label } from 'radix-vue';
import { computed, ref } from 'vue';

import CloseIcon from 'shared/icons/close.svg';
import RequiredIcon from 'shared/icons/required.svg';

import styles from './styles.module.css';

const props = withDefaults(
  defineProps<{
    value: string;
    title: string;
    required?: boolean;
    clearable?: boolean;
    error?: boolean;
  }>(),
  {
    value: '',
    title: '',
    required: false,
    clearable: false,
    error: false,
  },
);

const isFocus = ref(false);

const isLabelOnTop = computed<boolean>((): boolean => {
  return !!props.value.length || isFocus.value;
});

const inputStyles = computed<string[]>((): string[] => {
  const classes = [styles.formInput];

  if (props.value.length) {
    classes.push(styles.filled);
  }
  if (isLabelOnTop.value) {
    classes.push(styles.inputDown);
  }
  if (props.error) {
    if (isFocus.value) {
      classes.push(styles.focusInvalid);
    } else {
      classes.push(styles.invalidBg);
    }
  }
  return classes;
});

const focusInput = (value: boolean): void => {
  isFocus.value = value;
};
</script>
