<template>
  <b-container class="main-padding">
    <b-row>
      <b-col>
        <h6 class="pb-3 mb-3 border-bottom-grey">
          Question asked in
          <span class="text-primary">
            {{ topicName }}
          </span>
        </h6>
        <b-card>
          <div class="d-flex pb-3 justify-content-center border-bottom-grey">
            Question
          </div>
          <b-card-body>
            <h5 class="mb-3">
              {{ question.content }}
            </h5>
            <b-row>
              <b-col class="d-flex flex-row align-items-center">
                <b-img
                  rounded="circle"
                  width="50"
                  height="50"
                  class="mr-2"
                  :src="question.user ? question.user.avatar : UserDefaultAvatar"
                />
                <h6 class="ml-2">
                  {{ question.user ? question.user.name : '' }} &bull; <small>{{ formatDistanceToNow(new Date(question.updated_at)) }}</small>
                </h6>
              </b-col>
            </b-row>
            <b-row class="mt-3 pb-3 border-bottom-grey">
              <b-col class="d-flex flex-row align-items-center">
                <b-button
                  variant="primary"
                  @click="isUserAnswerQuestion = !isUserAnswerQuestion"
                >
                  Answer
                </b-button>
                <h6
                  class="ml-auto text-primary"
                  @click="followQuestion"
                >
                  Follow Question
                </h6>
              </b-col>
            </b-row>
            <b-row
              class="border-bottom-grey"
              v-show="isUserAnswerQuestion"
            >
              <b-col>
                <card-answer-question @onAnswerSubmitted="postAnswer" />
              </b-col>
            </b-row>
            <b-row
              v-for="(items, i) of answers"
              :key="i"
            >
              <card-answer :answer="items" />
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'
import CardAnswer from '@/components/CardAnswer/CardAnswer'
import CardAnswerQuestion from '@/components/CardAnswerQuestion/CardAnswerQuestion'

import api from '@/api'

export default {
  props: {
    topicName: {
      type: String,
      default: () => ''
    },
    question: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CardAnswer,
    CardAnswerQuestion
  },
  data() {
    return {
      UserDefaultAvatar,
      isUserAnswerQuestion: false,
      answers: []
    }
  },
  mounted() {
    this.fetchAnswers()
  },
  methods: {
    formatDistanceToNow,
    async followQuestion() {
      try {
        const { data } = await api.questions.follow({ question_id: this.question.id })
        this.$bvToast.toast(data.meta.message, {
          title: 'You Successfully Follow a Question',
          variant: 'success'
        })
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'You Fail to Follow a Question',
          variant: 'danger'
        })
      }
    },
    async postAnswer(value) {
      try {
        const { data } = await api.answer.post({ question_id: this.question.id, content: value })
        this.$bvToast.toast(data.meta.message, {
          title: 'Answer a Question Successful',
          variant: 'success'
        })
        this.isUserAnswerQuestion = false
        await this.fetchAnswers()
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Answer a Question Failed',
          variant: 'danger'
        })
      }
    },
    async fetchAnswers() {
      const { data } = await api.answer.list()
      console.log('ans', data)
      this.answers = data.data
    }
  }
}
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
