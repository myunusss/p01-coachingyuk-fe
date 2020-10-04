<template>
  <div class="border-bottom-grey">
    <b-row class="py-3">
      <b-col class="d-flex flex-row align-items-center">
        <b-avatar
          v-if="following.avatar"
          :src="`${bgUrl}${following.avatar}`"
        />
        <b-avatar
          v-else
          variant="info"
          :text="getNameInitial(following.first_name, following.last_name)"
        />
        <p class="m-0 ml-3 font-weight-bold">
          {{ `${following.first_name} ${following.last_name}` }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    following: {
      type: Object,
      default: () => ({
        avatar: null,
        first_name: 'BITCH',
        last_name: 'WHORE'
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

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
