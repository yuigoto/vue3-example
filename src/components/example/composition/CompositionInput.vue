<script setup lang="ts">
import { ref, watch } from "vue";

interface ICustomInputB {
  label: string;
  modelValue?: string;
}

const props = defineProps<ICustomInputB>();

const emit = defineEmits(["update:modelValue"]);

const contents = ref(props.modelValue);

const updateValue = () => {
  emit("update:modelValue", contents.value);
};

watch(props, () => {
  contents.value = props.modelValue;
});
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" v-model="contents" @input="updateValue" />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: block;

  label {
    font-size: 0.75rem;
    line-height: 1.25;
    margin: 0 0 0.5rem;
    display: block;
  }

  input {
    border: 1px solid #a0a0a0;
    font-size: 1.25rem;
    line-height: 2;
    padding: 0 1rem;
    border-radius: 0.25rem;
  }
}
</style>
