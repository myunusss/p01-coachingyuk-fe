<template>
  <b-container class="d-flex justify-content-center main-padding">
    <b-card class="w-75">
      <b-row class="pb-3 border-bottom-grey">
        <b-col
          class="d-flex flex-row align-items-center pointer"
          @click="$router.push({ name: 'Question', params: {
            topic,
            question
          }})"
        >
          <fa-icon
            icon="chevron-left"
            color="#039be5"
            class="mr-2"
          />
          <h5 class="m-0 ml-2 text-sky-blue">
            Question
          </h5>
        </b-col>
        <b-col class="d-flex align-items-center justify-content-center">
          <h3 class="m-0">
            Answer
          </h3>
        </b-col>
        <b-col class="d-flex flex-column justify-content-center">
          <fa-icon
            icon="ellipsis-h"
            class="align-self-end"
          />
        </b-col>
      </b-row>
      <b-row class="border-bottom-grey">
        <b-col class="py-3">
          <h5 class="m-0">
            {{ answer.question.content }}
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="py-3 d-flex flex-row align-items-center">
          <b-avatar
            badge
            badge-variant="success"
            v-if="answer.user.avatar"
            :src="`${bgUrl}${answer.user.avatar}`"
          >
            <template
              v-slot:badge
              v-if="role.code === 'coach'"
            >
              <fa-icon :icon="['far', 'star']" />
            </template>
          </b-avatar>
          <b-avatar
            v-else
            badge
            variant="warning"
            :text="getNameInitial(answer.user.first_name, answer.user.last_name)"
          >
            <template
              v-slot:badge
              v-if="role.code === 'coach'"
            >
              <fa-icon :icon="['far', 'star']" />
            </template>
          </b-avatar>
          <h6 class="m-0 ml-3">
            {{ `${answer.user.first_name} ${answer.user.last_name}` }}
          </h6>
        </b-col>
        <b-col class="d-flex flex-row align-items-center justify-content-end">
          <p class="m-0 text-secondary">
            {{ formatDistanceToNow(new Date(answer.updated_at)) }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="pb-3">
          <p class="m-0">
            {{ answer.content }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="pb-3 d-flex flex-row">
          <div class="d-flex flex-row align-items-center pointer">
            <fa-icon
              class="mr-2 fa-flip-horizontal"
              color="#039be5"
              :icon="['far', 'thumbs-up']"
            />
            <p class="m-0 mr-2 text-sky-blue">
              Helpful
            </p>
            &bull;
            <p class="m-0 ml-2">
              {{ answer.total_helped_users }}
            </p>
          </div>
          <div
            v-if="!isUserReplied"
            class="d-flex flex-row align-items-center pointer"
            @click="isUserReplied = true"
          >
            <fa-icon
              class="mr-2 ml-4 fa-flip-horizontal"
              color="#039be5"
              :icon="['far', 'comment']"
            />
            <p class="m-0 mr-2 text-sky-blue">
              Comment
            </p>
            &bull;
            <p class="m-0 ml-2">
              {{ answer.total_replies }}
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row
        v-for="(items, i) of replies"
        :key="i"
      >
        <card-comment :reply="items" />
      </b-row>
      <b-row v-show="isUserReplied">
        <b-col>
          <v-observer
            v-slot="{ valid }"
            tag="div"
            ref="reply"
          >
            <form @submit.prevent="replyAnswer">
              <v-provider
                v-slot="{ errors }"
                name="reply"
                rules="required"
              >
                <b-form-group :invalid-feedback="errors[0]">
                  <b-form-textarea
                    v-model="reply"
                    placeholder="Comment on this answer"
                    class="p-3"
                    :state="!errors.length && null"
                  />
                </b-form-group>
                <b-button
                  type="submit"
                  variant="primary"
                  class="mr-2"
                  :disabled="!valid"
                >
                  Comment
                </b-button>
                <b-button
                  variant="outline-secondary"
                  class="ml-2"
                  @click="isUserReplied = false"
                >
                  Cancel
                </b-button>
              </v-provider>
            </form>
          </v-observer>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col class="w-100">
          <b-button
            variant="outline-primary"
            class="w-100"
          >
            View All Answers
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'

import CardComment from '@/components/CardComment/CardComment'
import api from '@/api'
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  components: {
    CardComment
  },
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
  data() {
    return {
      answerSlug: this.$route.params.slug,
      replies: [],
      answer: {},
      role: {},
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      reply: null,
      isUserReplied: true,
      isRepliesShown: false
    }
  },
  mounted() {
    this.fetchAnswerDetail()
  },
  methods: {
    formatDistanceToNow,
    getNameInitial,
    async fetchAnswerDetail() {
      const { data } = await api.answer.listSlug(this.answerSlug)
      this.answer = data.data
      await this.fetchRoleDetail()
      await this.fetchReplies()
    },
    async fetchRoleDetail() {
      const { data } = await api.role.getById(this.answer.user.role_id)
      this.role = data.data
    },
    async fetchReplies() {
      const { data } = await api.reply.list({ answer_id: this.answer.id })
      this.replies = data.data
    },
    async replyAnswer() {
      try {
        const { data } = await api.reply.post({ answer_id: this.answer.id, content: this.reply })
        this.$bvToast.toast(data.meta.message, {
          title: 'Comment Added Successfully',
          variant: 'success'
        })
        await this.fetchReplies()
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed to Add Comment',
          variant: 'danger'
        })
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .text-sky-blue {
    color: #039be5
  }

  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
