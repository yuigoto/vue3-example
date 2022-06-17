<script setup lang="ts">
type MenuRoute = {
  name: string;
  path: string;
};

const routes: Array<MenuRoute> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Test View",
    path: "/test",
  },
];
</script>

<template>
  <header>
    <h1>Vue Example</h1>
  </header>
  <nav>
    <router-link v-for="(path, i) in routes" :key="i" :to="path.path">
      {{ path.name }}
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
header {
  color: #808080;
  background: #d0d0d0;
  width: 100%;
  padding: 2rem;
  display: block;

  h1 {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
}

nav {
  color: #fff;
  background: #404040;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  a {
    color: #d0d0d0;
    font-size: 1.25rem;
    text-decoration: none;
    line-height: 2;
    transition: 0.3s;

    &:hover {
      color: #a0a0a0;
    }

    &:active {
      color: #fff;
    }
  }

  @include respond-to-min(992) {
    flex-direction: row;

    a {
      padding: 0 1rem;
    }
  }
}
</style>
