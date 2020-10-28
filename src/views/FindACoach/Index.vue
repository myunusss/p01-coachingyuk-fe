<template>
  <div class="bg-white main-padding-coach">
    <search :topics="topics" />
    <recommendation :coaches="coaches" />
  </div>
</template>

<script>
import Search from './Search/Search'
import Recommendation from './Recommendation/Recommendation'

import api from '@/api'

export default {
  components: {
    Search,
    Recommendation
  },
  data() {
    return {
      topics: [],
      coaches: []
    }
  },
  mounted() {
    this.fetchTopics()
    this.fetchCoaches()
  },
  methods: {
    async fetchTopics() {
      const { data } = await api.topic.list()
      this.topics = data.data
    },
    async fetchCoaches() {
      const { data } = await api.user.list({ sort_by: 'created_at', sort_dir: 'asc' })
      this.coaches = data.data.filter(v => v.role.code === 'coach')
    }
  }
}
</script>

<style scoped lang="scss">
  .main-padding-coach {
    @media screen and (max-width: 765px) {
      padding-top: 140px;
    }
    padding-top: 90px;
    padding-bottom: 25px;
  }
</style>
