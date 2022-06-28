<script setup lang="ts">
import ContainerVue from "@/components/elements/Container.vue";
import VuexStoreExample from "@/components/example/stores/VuexStoreExample.vue";
import PiniaStoreExample from "@/components/example/stores/PiniaStoreExample.vue";
</script>

<template>
  <container-vue>
    <h1>Stores Test</h1>

    <p class="lead">Exemplo de uso de stores para gerenciamento de estado global, com <strong>VueX</strong> e <strong>Pinia</strong> com o mesmo tipo de store.</p>

    <p>Todas as stores aqui são globais, portanto você pode navegar no projeto e retornar para verificar que os dados continuam na sessão. 😉</p>

    <p>
      <strong>VueX</strong> era considerado o "padrão" para gerenciamento de estados com Vue 2.x:
    </p>

    <vuex-store-example />

    <hr />

    <p>
      <strong>Pinia</strong> é considerado como o sucessor do VueX, e recomendado como o novo padrão a ser seguido. Pode-se notar, também, que é relativamente mais simples e direto usá-la:
    </p>

    <pinia-store-example />

    <p>&nbsp;</p>
  </container-vue>
</template>

<style lang="scss">
.lead {
  color: #909090;
  font-size: 1.25rem;
  font-weight: 300;

  strong {
    font-weight: 700;
  }
}

code {
  background: #e0e0e0;
  border: 1px solid #a0a0a0;
  font-family: Iosevka, Monaco, Consolas, monospace;
  padding: 0 0.25rem;
}
</style>
