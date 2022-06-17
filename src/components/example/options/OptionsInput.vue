<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      contents: this.modelValue,
    };
  },
  methods: {
    updateValue() {
      this.$emit("update:modelValue", this.contents);
    },
  },
  watch: {
    modelValue() {
      this.contents = this.modelValue;
    },
  },
};
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
