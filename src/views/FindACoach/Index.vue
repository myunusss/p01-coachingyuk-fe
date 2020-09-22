<template>
  <div class="bg-white main-padding-coach">
    <search />
    <recommendation />
  </div>
</template>

<script>
import Search from './Search/Search'
import Recommendation from './Recommendation/Recommendation'

export default {
  components: {
    Search,
    Recommendation
  }
}
</script>

<style scoped lang="scss">
  .main-padding-coach {
    padding-top: 90px;
    padding-bottom: 25px;
  }
</style>
