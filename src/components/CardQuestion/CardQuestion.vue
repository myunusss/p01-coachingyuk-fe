<template>
  <div
    class="pointer"
    @click="$router.push({ name: 'Question', params: {
      topic,
      question: items
    }})"
  >
    <b-row class="mb-2">
      <b-col>
        <h4>{{ items.content }}</h4>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col
        cols="2"
        class="d-flex justify-content-center"
      >
        <b-avatar
          v-if="items.user.avatar"
          variant="light"
          :src="`${bgUrl}${items.user.avatar}`"
        />
        <b-avatar
          v-else
          variant="success"
          :text="`${getNameInitial(items.user.first_name, items.user.last_name)}`"
        />
      </b-col>
      <b-col
        cols="10"
        class="d-flex justify-content-start"
      >
        <h6 class="font-weight-bold align-self-center">
          {{ items.user ? `${items.user.first_name} ${items.user.last_name}` : '' }}
        </h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h6 class="text-primary">
          {{ items.answers.length }} answer
        </h6>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    topic: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Object,
      default: () => ({
        content: '',
        user: {
          id: null,
          avatar: null,
          name: null
        },
        answers: []
      })
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
};
</script>
