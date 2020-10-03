<template>
  <div>
    <b-card class="p-3">
      <b-row class="d-flex flex-row pb-3 border-bottom-grey">
        <h3 class="align-self-center mx-auto">
          {{ topicDetail.name }}
        </h3>
        <fa-icon
          icon="ellipsis-h"
          class="align-self-center"
        />
      </b-row>
      <b-row class="py-5 border-bottom-grey">
        <b-col class="d-flex flex-column">
          <fa-icon
            icon="check-circle"
            size="3x"
            class="align-self-center pointer"
            :color="hasUserCheckedIn ? '#43a047' : '#9e9e9e'"
            @click="$emit('onCheckIn')"
          />
        </b-col>
      </b-row>
      <b-row class="py-3 border-bottom-grey">
        <b-col
          cols="2"
          class="d-flex justify-content-center"
        >
          <p class="text-secondary align-self-center">
            Weekly Stat
          </p>
        </b-col>
        <b-col
          cols="8"
          class="d-flex align-items-center"
        >
          <b-avatar variant="light">
            {{ topicDetail.total_check_ins }}
          </b-avatar>
        </b-col>
        <b-col
          cols="2"
          class="d-flex justify-content-center"
        >
          <fa-icon
            icon="chevron-right"
            size="2x"
            color="#2196f3"
            class="align-self-center"
          />
        </b-col>
      </b-row>
      <b-row class="py-3 border-bottom-grey">
        <b-col
          cols="2"
          class="d-flex"
        >
          <p class="text-secondary align-self-center">
            {{ topicDetail.total_users }} Today
          </p>
        </b-col>
        <b-col
          cols="8"
          class="d-flex align-items-center"
        >
          <b-avatar-group>
            <div
              v-for="(user, i) of avatarGroup"
              :key="i"
            >
              <b-avatar
                v-if="user.avatar && avatarGroup.length < maxLength"
                variant="light"
                :key="i"
                :src="`${bgUrl}${user.avatar}`"
              />
              <b-avatar
                v-else-if="user.avatar === null && avatarGroup.length < maxLength"
                variant="danger"
                :text="`${getNameInitial(user.first_name, user.last_name)}`"
              />
              <b-avatar
                v-else-if="avatarGroup.length >= maxLength && i < avatarGroup.length - 1"
                variant="light"
              >
                <fa-icon
                  icon="ellipsis-h"
                  color="#1e88e5"
                />
              </b-avatar>
            </div>
          </b-avatar-group>
        </b-col>
        <b-col
          cols="2"
          class="d-flex justify-content-center"
        >
          <fa-icon
            icon="chevron-right"
            size="2x"
            color="#2196f3"
            class="align-self-center"
          />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    topicDetail: {
      type: Object,
      default: () => ({
        name: ''
      })
    },
    userId: {
      type: Number,
      default: () => null
    }
  },
  data() {
    return {
      UserDefaultAvatar,
      maxLength: 6,
      maxIndex: 7,
      avatarGroup: [],
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  computed: {
    hasUserCheckedIn() {
      return this.topicDetail.check_in_users.find(v => v.id === this.userId)
    }
  },
  mounted() {
    this.setAvatarGroupLimit()
  },
  methods: {
    getNameInitial,
    setAvatarGroupLimit() {
      if (this.topicDetail.joined_users.length > this.maxLength) {
        for (let i = 0; i < this.maxIndex; i++) {
          this.avatarGroup.push(this.topicDetail.joined_users[i])
        }
      } else {
        this.avatarGroup = this.topicDetail.joined_users
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
