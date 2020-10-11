<template>
  <b-container class="main-padding">
    <div class="d-flex justify-content-center">
      <b-card class="w-50 align-self-center">
        <b-row class="py-3 text-center justify-content-center divider">
          <h4>Activity</h4>
        </b-row>
        <b-row
          v-show="!isHasFriends"
          class="my-3 justify-content-center"
        >
          <div class="d-flex flex-column justify-content-center">
            <h6>Follow friends to see their activity here</h6>
            <b-button
              variant="primary"
              class="align-self-center"
            >
              Find Friends to Follow
            </b-button>
          </div>
        </b-row>
        <b-row
          v-for="(items, i) of activities"
          class="px-4 py-3 justify-content-center divider"
          :key="i"
        >
          <card-activity
            :activity="items"
            :post-comment="postComment"
            @onLikeActivity="toggleLike"
          />
        </b-row>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import CardActivity from '@/components/CardActivity/CardActivity'

import api from '@/api'

export default {
  components: {
    CardActivity
  },
  data() {
    return {
      isHasFriends: true,
      activities: []
    }
  },
  mounted() {
    this.getActivity()
  },
  methods: {
    async getActivity() {
      const { data } = await api.activity.list()
      this.activities = data.data
    },
    async postComment(value, activityId) {
      await api.comment.post({ activity_id: activityId, content: value })
      await this.getActivity()
    },
    async toggleLike(activityId) {
      try {
        const { data } = await api.activity.like({ activity_id: activityId })
        this.$bvToast.toast(data.meta.message, {
          title: 'Successfully Like Activity',
          variant: 'success'
        })
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed to Like Activity',
          variant: 'danger'
        })
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .divider {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
