<script>
/**
 * Componente exemplo, demonstração do que a Options API oferece para compor
 * o componente.
 */
export default {
  mixins: [],
  components: {},
  props: {
    name: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      date: Date.now(),
    };
  },
  computed: {},
  beforeCreate() {
    // Write code...
  },
  created() {
    // Write code...
  },
  beforeMount() {
    // Write code...
  },
  mounted() {
    // Write code...
  },
  beforeUpdate() {
    // Write code...
  },
  updated() {
    // Write code...
  },
  beforeUnmount() {
    // Write code...
  },
  unmounted() {
    // Write code...
  },
  methods: {
    updateDate() {
      this.date = Date.now();
    },
  },
  watch: {},
};
</script>

<template>
  <h1>Hello, {{ name }}!</h1>
  <p>Data, em MS: {{ date }}</p>
  <p>
    <button @click="updateDate">Atualizar data</button>
  </p>
</template>
