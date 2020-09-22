<template>
  <div class="wrapper">
    <top-bar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar/TopBar'

export default {
  components: {
    TopBar
  }
};
</script>

<style lang="scss">
  main {
    min-height: 100vh;
    background-color: var(--md-blue-grey-50);
  }
</style>
