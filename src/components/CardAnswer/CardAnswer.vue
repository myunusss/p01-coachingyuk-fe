<template>
  <div>
    <b-row class="py-3">
      <b-col class="d-flex flex-row align-items-center">
        <b-avatar
          v-if="answer.user.avatar"
          :src="`${bgUrl}${answer.user.avatar}`"
        />
        <b-avatar
          v-else
          variant="danger"
          :text="getNameInitial(answer.user.first_name, answer.user.last_name)"
        />
        <h6 class="m-0 ml-2 align-self-center">
          {{ answer.user ? `${answer.user.first_name} ${answer.user.last_name}` : '' }}
        </h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{ answer.content }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class="d-flex flex-row align-items-center pointer"
        @click="toggleHelpful(answer.id)"
      >
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
      </b-col>
      <b-col
        class="d-flex flex-row align-items-center pointer"
        @click="$router.push({ name: 'Comment', params: {
          slug: answer.slug,
          topic,
          question
        }})"
      >
        <fa-icon
          class="mr-2 fa-flip-horizontal"
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
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    answer: {
      type: Object,
      default: () => {}
    },
    toggleHelpful: {
      type: Function,
      default: () => {}
    },
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
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  methods: {
    getNameInitial
  }
}
</script>

<style scoped lang="scss">
  .text-sky-blue {
    color: #039be5;
  }
</style>
