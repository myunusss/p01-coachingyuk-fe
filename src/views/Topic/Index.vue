<template>
  <b-container class="main-padding">
    <b-card
      img-top
      :img-src="topic.background
        ? `${bgUrl}${topic.background}`
        : TopicDefaultImage"
    >
      <b-card-body>
        <b-row>
          <b-col>
            <h3>{{ topic.name }}</h3>
          </b-col>
          <b-col class="d-flex justify-content-end">
            <b-button
              variant="primary"
              class="w-25 align-self-center"
              :disabled="hasUserJoined"
              @click="joinTopic"
            >
              {{ hasUserJoined ? 'JOINED' : 'JOIN' }}
            </b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import TopicDefaultImage from '@/assets/img-dummy-default-category.jpg'

import api from '@/api'

export default {
  props: {
    topic: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      TopicDefaultImage,
      userTopics: localStorage.getItem('topics')
        ? JSON.parse(localStorage.getItem('topics'))
        : [],
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  computed: {
    hasUserJoined() {
      const joinedTopic = this.userTopics.find(v => v.id === this.topic.id)
      return !!joinedTopic
    }
  },
  methods: {
    async joinTopic() {
      try {
        const { data } = await api.topic.join({ topic_id: this.topic.id })
        this.$bvToast.toast(data.meta.message, {
          title: 'Success To Join A Topic',
          variant: 'success'
        })
        setTimeout(() => { this.$router.push('/') }, 1500)
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed To Join A Topic',
          variant: 'danger'
        })
      }
    }
  }
}
</script>
