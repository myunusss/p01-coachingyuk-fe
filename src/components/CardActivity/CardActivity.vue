<template>
  <div class="w-100">
    <b-row class="justify-content-center">
      <b-col
        cols="2"
        class="justify-content-center"
      >
        <b-img
          rounded="circle"
          width="50"
          height="50"
          :src="UserDefaultAvatar"
        />
      </b-col>
      <b-col
        cols="5"
        class="d-flex justify-content-start"
      >
        <h6 class="align-self-center">
          {{ user.name }}
        </h6>
      </b-col>
      <b-col
        cols="5"
        class="d-flex justify-content-end"
      >
        <small class="align-self-center text-muted">{{ formatDistanceToNow(new Date(user.timestamp)) }}</small>
      </b-col>
    </b-row>
    <b-row>
      <div class="w-100 p-3 my-3 activity-card">
        <b-row class="pb-3 divider">
          <b-col>{{ activity.header }}</b-col>
        </b-row>
        <b-row class="pt-3">
          <b-col>{{ activity.description }}</b-col>
        </b-row>
      </div>
    </b-row>
    <b-row class="p-3">
      <b-col class="light-blue-accent">
        <b-row>
          <fa-icon
            class="mr-2 fa-flip-horizontal"
            :icon="['far', 'thumbs-up']"
          />
          <h6>Prop</h6>
        </b-row>
      </b-col>
      <b-col class="light-blue-accent">
        <b-row>
          <fa-icon
            class="mr-2"
            :icon="['far', 'comment']"
          />
          <h6>Comment</h6>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        avatar: '',
        name: '',
        timestamp: ''
      })
    },
    activity: {
      type: Object,
      default: () => ({
        header: '',
        description: ''
      })
    }
  },
  data() {
    return {
      UserDefaultAvatar
    }
  },
  methods: {
    formatDistanceToNow
  }
};
</script>

<style scoped lang="scss">
  .activity-card {
    border-radius: 5px;
    background-color: var(--md-blue-grey-50);
  }

  .divider {
    border-bottom: solid 1px var(--md-white);
  }

  .light-blue-accent {
    color: var(--md-light-blue-600)
  }
</style>
