<template>
  <b-container class="mx-5 my-3 border-left-grey">
    <b-row>
      <b-col class="d-flex flex-row">
        <b-avatar
          v-if="reply.user.avatar"
          :src="`${bgUrl}${reply.user.avatar}`"
        />
        <b-avatar
          v-else
          :text="getNameInitial(reply.user.first_name, reply.user.last_name)"
        />
        <p class="m-0 ml-2 align-self-center">
          {{ `${reply.user.first_name} ${reply.user.last_name}` }}
        </p>
      </b-col>
      <b-col class="d-flex flex-column justify-content-center">
        <p class="m-0 align-self-end text-secondary">
          {{ formatDistanceToNow(new Date(reply.updated_at)) }}
        </p>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-container>
          <p>{{ reply.content }}</p>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    reply: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formatDistanceToNow,
      getNameInitial,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  }
};
</script>

<style scoped lang="scss">
  .border-left-grey {
    border-left: solid 1.5px var(--md-grey-300);
  }
</style>
