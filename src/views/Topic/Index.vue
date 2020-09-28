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
    <b-row class="mt-3">
      <b-col>
        <b-card>
          <b-card-text>Ready to build this habit? Join and check in any day you meet your goal</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <b-row class="d-flex flex-row justify-content-center border-bottom-grey">
            <h3 class="align-self-center">
              Questions
            </h3>
          </b-row>
          <b-row
            v-for="(items, i) of questions"
            :key="i"
          >
            <b-col class="py-3 border-bottom-grey">
              <CardQuestion
                :items="items"
                :topic-name="topic.name"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TopicDefaultImage from '@/assets/img-dummy-default-category.jpg'
import CardQuestion from '@/components/CardQuestion/CardQuestion'

import api from '@/api'

export default {
  props: {
    topic: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CardQuestion
  },
  data() {
    return {
      TopicDefaultImage,
      userTopics: localStorage.getItem('topics')
        ? JSON.parse(localStorage.getItem('topics'))
        : [],
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      questions: []
    }
  },
  computed: {
    hasUserJoined() {
      const joinedTopic = this.userTopics.find(v => v.id === this.topic.id)
      return !!joinedTopic
    }
  },
  mounted() {
    this.getQuestions()
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
    },
    async getQuestions() {
      const { data } = await api.questions.list({ topic_id: this.topic.id })
      this.questions = data.data
    }
  }
}
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
