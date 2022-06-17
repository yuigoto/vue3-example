<script setup lang="ts">
import { computed, ref } from "vue";
import ContainerVue from "@/components/elements/Container.vue";
import OptionsInput from "@/components/example/options/OptionsInput.vue";
import CompositionInput from "@/components/example/composition/CompositionInput.vue";

const valueA = ref("Altere este valor");
const valueB = ref("Altere este valor");
const toggle = ref(false);
const age = ref(10);

const doubleAge = computed(() => {
  return !isNaN(parseInt(`${age.value}`)) ? parseInt(`${age.value}`) * 2 : 0;
});

const valueList = [
  {
    name: "John",
    age: 21,
  },
  {
    name: "Claire",
    age: 24,
  },
  {
    name: "Velt",
    age: 41,
  },
];
</script>

<template>
  <container-vue>
    <h1>Test View</h1>

    <p>Teste de v-model com computed variables:</p>

    <p>
      <input type="text" v-model="age" />
    </p>

    <p>
      Duas vezes sua idade é: <strong>{{ doubleAge }}</strong>
    </p>

    <hr />

    <p>
      <label>
        <input type="checkbox" v-model="toggle" /> Alternar exibição
      </label>
    </p>

    <p v-if="toggle">
      Este parágrago exibe quanto <code>toggle</code> for <code>true</code>.
    </p>
    <p v-else>
      Este parágrago exibe quanto <code>toggle</code> for <code>false</code>.
    </p>

    <hr />

    <h3>Listagem de dados</h3>

    <ul>
      <li v-for="(person, i) in valueList" key="i">
        {{ person.name }}, {{ person.age }}
      </li>
    </ul>

    <hr />

    <p>Componente utilizando <strong>Options API</strong>:</p>

    <options-input label="Options Input" v-model="valueA" />

    <p>
      <code>{{ valueA }}</code>
    </p>

    <hr />

    <p>Componente utilizando <strong>Composition API</strong>:</p>

    <composition-input label="Options Input" v-model="valueB" />

    <p>
      <code>{{ valueB }}</code>
    </p>
  </container-vue>
</template>

<style lang="scss"></style>
