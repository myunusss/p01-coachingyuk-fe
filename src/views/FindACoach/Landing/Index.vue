<template>
  <div>
    <top-bar is-button-shown />
    <main>
      <div class="bg-white main-padding-coach">
        <search :topics="topics" />
        <recommendation :coaches="coaches" />
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from '@/components/LandingTopBar/LandingTopBar'
import Search from '@/views/FindACoach/Landing/Search/Search'
import Recommendation from '@/views/FindACoach/Landing/Recommendation/Recommendation'

import api from '@/api'

export default {
  components: {
    TopBar,
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
      this.coaches = data.data
    }
  }
}
</script>

<style scoped lang="scss">
.main-padding-coach {
  padding-top: 85px;
  padding-bottom: 25px;
}
</style>
