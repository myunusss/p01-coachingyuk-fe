<template>
  <div
    class="pb-3 border-bottom-grey"
  >
    <b-row class="pt-3">
      <b-col class="d-flex flex-row align-items-center">
        <b-avatar
          v-if="activity.user.avatar"
          :src="`${bgUrl}${activity.user.avatar}`"
        />
        <b-avatar
          v-else
          variant="success"
          :text="getNameInitial(activity.user.first_name, activity.user.last_name)"
        />
        <p class="m-0 ml-3 font-weight-bold">
          {{ `${activity.user.first_name} ${activity.user.last_name}` }}
        </p>
        <b-col class="d-flex flex-column justify-content-center">
          <small class="text-secondary align-self-end">
            {{ formatDistanceToNow(new Date(activity.updated_at)) }}
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
        <comment
          @onSubmit="v => postComment(v, activity.id)"
          @onCancel="isCommentShown = false"
        />
      </b-col>
    </b-row>
    <div
      v-if="activity.activity_replies.length"
      class="mt-3 border-top-blue"
    >
      <div
        v-for="(item, i) of activity.activity_replies"
        class="mt-3"
        :key="i"
      >
        <b-row>
          <b-col
            cols="1"
            class="d-flex align-items-center"
          >
            <fa-icon
              color="#9e9e9e"
              :icon="['far', 'comment']"
            />
          </b-col>
          <b-col
            cols="11"
            class="d-flex flex-row align-items-center"
          >
            <b-avatar
              v-if="item.user.avatar"
              :src="`${bgUrl}${item.user.avatar}`"
            />
            <b-avatar
              v-else
              variant="success"
              :text="getNameInitial(item.user.first_name, item.user.last_name)"
            />
            <p class="m-0 ml-3 font-weight-bold">
              {{ `${item.user.first_name} ${item.user.last_name}` }}
            </p>
            <b-col class="d-flex flex-column justify-content-center">
              <small class="text-secondary align-self-end">
                {{ formatDistanceToNow(new Date(item.updated_at)) }}
              </small>
            </b-col>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-3 ml-5">
            <p class="m-0">
              {{ item.content }}
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
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
    activity: {
      type: Object,
      default: () => ({
        content: null,
        note: null,
        user: {
          avatar: null,
          first_name: null,
          last_name: null,
          updated_at: null
        },
        activity_replies: []
      })
    },
    postComment: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isCommentShown: false,
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

  .border-bottom-blue {
    border-bottom: solid 1px var(--md-blue-300);
  }

  .border-top-blue {
    border-top: solid 1px var(--md-blue-300);
  }

  .content-container {
    border-radius: 8px;
    background-color: var(--md-blue-grey-50);
  }
</style>
