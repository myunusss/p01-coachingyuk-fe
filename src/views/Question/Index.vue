<template>
  <b-container class="main-padding">
    <b-row>
      <b-col>
        <h6 class="pb-3 mb-3 border-bottom-grey">
          Question asked in
          <span
            class="text-primary pointer"
            @click="$router.push({ name: 'Topic', params: { topic } })"
          >
            {{ topic.name }}
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
                <b-avatar
                  v-if="question.user.avatar"
                  :src="`${bgUrl}${question.user.avatar}`"
                />
                <b-avatar
                  v-else
                  variant="success"
                  :text="getNameInitial(question.user.first_name, question.user.last_name)"
                />
                <h6 class="ml-2">
                  {{ question.user ? `${question.user.first_name} ${question.user.last_name}` : '' }}
                  &bull;
                  <small>{{ formatDistanceToNow(new Date(question.updated_at)) }}</small>
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
                <card-answer-question
                  @onAnswerSubmitted="postAnswer"
                  @onAnswerClosed="isUserAnswerQuestion = false"
                />
              </b-col>
            </b-row>
            <b-row
              v-for="(items, i) of answers"
              :key="i"
            >
              <card-answer
                :answer="items"
                :topic="topic"
                :question="question"
                :toggle-helpful="toggleHelpfulAnswer"
              />
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
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    topic: {
      type: Object,
      default: () => {}
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
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      isUserAnswerQuestion: false,
      answers: []
    }
  },
  mounted() {
    this.fetchAnswers()
  },
  methods: {
    formatDistanceToNow,
    getNameInitial,
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
      const { data } = await api.answer.list({ question_id: this.question.id })
      this.answers = data.data
    },
    async toggleHelpfulAnswer(answerId) {
      try {
        const { data } = await api.answer.helpful({ answer_id: answerId })
        this.$bvToast.toast(data.meta.message, {
          title: 'Successfully Mark Answer as Helpful',
          variant: 'success'
        })
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed to Mark Answer as Helpful',
          variant: 'success'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
