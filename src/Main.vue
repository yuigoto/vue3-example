<script setup lang="ts">
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseFooter from "@/components/base/BaseFooter.vue";
import "@/styles/main.scss";
</script>

<template>
  <div class="wrap">
    <base-header />

    <div class="wrap__main">
      <router-view />
    </div>

    <base-footer />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wrap__main {
  width: 100%;
  display: block;
  flex: 1;
}
</style>
