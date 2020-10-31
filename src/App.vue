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
    @media screen and (max-width: 765px) {
      padding-top: 145px;
    }
    padding-top: 120px;
    padding-bottom: 25px;
  }

  .w-xs-100 {
    @media screen and (max-width: 765px) {
      width: 100%;
    }
  }

  .w-res-50 {
    @media screen and (max-width: 765px) {
      width: 100%;
    }
    width: 50%;
  }

  .w-res-75 {
    @media screen and (max-width: 765px) {
      width: 100%;
    }
    width: 75%;
  }
</style>
