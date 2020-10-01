<template>
  <div>
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
      </b-col>
      <p class="m-0 ml-2 align-items-center">
        {{ `${reply.user.first_name} ${reply.user.last_name}` }}
      </p>
    </b-row>
  </div>
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

<style scoped>

</style>
