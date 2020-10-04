<template>
  <div>
    <!--      <div-->
    <!--        class="py-3 border-bottom-grey"-->
    <!--        v-for="(item, i) of activities"-->
    <!--        :key="i"-->
    <!--      >-->
    <b-row>
      <b-col class="d-flex flex-row align-items-center">
        <b-avatar
          v-if="activity.user.avatar"
          :src="`${bgUrl}${activity.user.avatar}`"
        />
        <b-avatar
          v-else
          variant="success"
          :text="getNameInitial(activity.user.first_name, acitivity.user.last_name)"
        />
        <p class="m-0 ml-3 font-weight-bold">
          {{ `${activity.user.first_name} ${activity.user.last_name}` }}
        </p>
        <b-col class="d-flex flex-column justify-content-center">
          <small class="text-secondary align-self-end">
            {{ formatDistanceToNow(new Date(activity.user.updated_at)) }}
          </small>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="mt-3 mx-1 py-3 content-container">
      <b-col>
        <p class="m-0">
          {{ activity.content }}
        </p>
      </b-col>
    </b-row>
    <b-row
      v-show="!isCommentShown"
      class="mt-3 mx-1"
    >
      <b-col
        class="d-flex flex-row align-items-center pointer"
        @click="isCommentShown = true"
      >
        <fa-icon
          color="#039be5"
          :icon="['far', 'comment']"
        />
        <p class="m-0 ml-2 text-primary">
          Comment
        </p>
      </b-col>
    </b-row>
    <b-row
      v-if="isCommentShown"
      class="mt-3"
    >
      <b-col>
        <comment @onCancel="isCommentShown = false" />
      </b-col>
    </b-row>
  </div>
  <!--      </div>-->
</template>

<script>
import { formatDistanceToNow } from 'date-fns'

import Comment from '@/components/CardProfile/Comment'
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  components: {
    Comment
  },
  props: {
    isCommentShown: {
      type: Boolean,
      default: () => false
    },
    activity: {
      type: Object,
      default: () => ({
        content: 'You are being a bitch',
        user: {
          avatar: null,
          first_name: 'Test',
          last_name: 'Test',
          updated_at: '2020-08-01T14:50:00'
        }
      })
    }
  },
  data() {
    return {
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  methods: {
    formatDistanceToNow,
    getNameInitial
  }
};
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .content-container {
    border-radius: 8px;
    background-color: var(--md-blue-grey-50);
  }
</style>
