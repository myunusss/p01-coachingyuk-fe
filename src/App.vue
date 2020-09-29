<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
$carousel-control-color: var(--md-black);

@import '~material-colors/dist/colors.var';
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';
@import '~vue-multiselect/dist/vue-multiselect.min.css';

  .pointer {
    cursor: pointer;
  }

  .main-padding {
    padding-top: 120px;
    padding-bottom: 25px;
  }
</style>
