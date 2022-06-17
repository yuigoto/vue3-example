<script setup lang="ts">
/**
 * Componente exemplo, demonstração do que a Composition API oferece para compor
 * o componente.
 */
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  onUnmounted,
  ref,
} from "vue";

interface ComponentProps {
  name?: string;
}

// Props vem em um objeto tipado agora
const props = defineProps<ComponentProps>();

// Variáveis reativas, antigo `data.[nome]`, são refs
const date = ref<number>(Date.now());

// Métodos podem ser declarados diretamente
const updateDate = () => {
  date.value = Date.now();
};

onBeforeMount(() => {
  // Write code...
});

onMounted(() => {
  // Write code...
});

onBeforeUpdate(() => {
  // Write code...
});

onUpdated(() => {
  // Write code...
});

onBeforeUnmount(() => {
  // Write code...
});

onUnmounted(() => {
  // Write code...
});
</script>

<template>
  <h1>Hello, {{ props.name }}!</h1>
  <p>Data, em MS: {{ date }}</p>
  <p>
    <button @click="updateDate">Atualizar data</button>
  </p>
</template>
