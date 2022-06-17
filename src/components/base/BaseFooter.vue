<script setup lang="ts">
import { computed, Ref, ref } from "vue";

const date: Ref<Date> = ref(new Date());
const year = computed(() => date.value.getFullYear());
</script>

<template>
  <footer>
    <p>&copy;{{ year }}</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: #fff;
  background: #2d2d2d;
  width: 100%;
  text-align: right;
  padding: 1rem 2rem;

  p {
    color: #c0c0c0;
  }
}
</style>
