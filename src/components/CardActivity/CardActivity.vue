<template>
  <div class="w-100">
    <b-row class="justify-content-center">
      <b-col
        cols="3"
        md="2"
        class="justify-content-center"
      >
        <b-avatar
          v-if="activity.user.avatar"
          :src="`${bgUrl}${activity.user.avatar}`"
        />
        <b-avatar
          v-else
          variant="success"
          :text="getNameInitial(activity.user.first_name, activity.user.last_name)"
        />
      </b-col>
      <b-col
        cols="5"
        md="5"
        class="d-flex justify-content-start"
      >
        <h6 class="align-self-center">
          {{ `${activity.user.first_name} ${activity.user.last_name}` }}
        </h6>
      </b-col>
      <b-col
        cols="4"
        md="5"
        class="d-flex justify-content-end"
      >
        <small class="align-self-center text-muted">{{ formatDistanceToNow(new Date(activity.updated_at)) }}</small>
      </b-col>
    </b-row>
    <b-row>
      <div class="w-100 p-3 my-3 activity-card">
        <b-row class="pb-3 divider">
          <b-col>{{ activity.content }}</b-col>
        </b-row>
        <b-row class="pt-3">
          <b-col>{{ activity.note }}</b-col>
        </b-row>
      </div>
    </b-row>
    <b-row class="p-3">
      <b-col class="light-blue-accent">
        <b-row
          class="pointer"
          @click="$emit('onLikeActivity', activity.id)"
        >
          <fa-icon
            class="mr-2 fa-flip-horizontal"
            :icon="['far', 'thumbs-up']"
          />
          <h6>Prop</h6>
        </b-row>
      </b-col>
      <b-col class="light-blue-accent">
        <b-row
          class="pointer"
          @click="isCommentShown = !isCommentShown"
        >
          <fa-icon
            class="mr-2"
            :icon="['far', 'comment']"
          />
          <h6>Comment</h6>
        </b-row>
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
            md="1"
            class="d-flex align-items-center"
          >
            <fa-icon
              color="#9e9e9e"
              :icon="['far', 'comment']"
            />
          </b-col>
          <b-col
            md="11"
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
        note: null
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
