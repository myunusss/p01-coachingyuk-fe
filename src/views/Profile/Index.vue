<template>
  <b-container class="main-padding">
    <b-row>
      <b-col>
        <b-card
          overlay
          class="bg-card-header"
          img-height="450px"
          :img-src="user.header_image
            ? `${bgUrl}${user.header_image}`
            : UserDefaultHeader"
        >
          <b-card-body class="h-100 d-flex flex-column">
            <b-row>
              <b-col class="d-flex justify-content-end">
                <b-button
                  class="pointer button-outline-white"
                  @click="$router.push({ name: 'Edit', params: { user } })"
                >
                  EDIT PROFILE
                </b-button>
              </b-col>
            </b-row>
            <b-row class="h-100">
              <b-col class="d-flex flex-column justify-content-center">
                <b-avatar
                  v-if="user.avatar"
                  size="85px"
                  class="align-self-center mb-3"
                  :src="`${bgUrl}${user.avatar}`"
                />
                <b-avatar
                  v-else
                  size="85px"
                  class="align-self-center mb-3"
                  :text="`${getNameInitial(user.first_name, user.last_name)}`"
                />
                <h3 class="text-white align-self-center">
                  {{ user.first_name }}&nbsp;{{ user.last_name }}
                </h3>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <b-card>
          <b-card-body>
            <b-row class="mb-3">
              <b-col class="d-flex flex-row align-items-center">
                <span class="mr-3 fa-stack">
                  <fa-icon
                    icon="circle"
                    color="#43a047"
                    class="fa-stack-2x"
                  />
                  <fa-icon
                    icon="check"
                    color="#ffffff"
                    class="fa-stack-1x"
                  />
                </span>
                <h4 class="m-0 mr-2">
                  {{ user.total_check_ins || '0' }}
                </h4>
                <h4 class="m-0">
                  total checkins
                </h4>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col class="d-flex flex-row align-items-center">
                <span class="mr-3 fa-stack">
                  <fa-icon
                    icon="circle"
                    color="#fb8c00"
                    class="fa-stack-2x"
                  />
                  <fa-icon
                    icon="fire"
                    color="#ffffff"
                    class="fa-stack-1x"
                  />
                </span>
                <h4 class="m-0 mr-2">
                  Longest streak of
                </h4>
                <h4 class="m-0 mr-2">
                  {{ user.total_streak || '0' }}
                </h4>
                <h4 class="m-0">
                  in <span class="text-primary">{{ user.best_topic }}</span>
                </h4>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col class="d-flex flex-row align-items-center">
                <span class="mr-3 fa-stack">
                  <fa-icon
                    icon="circle"
                    color="#9e9e9e"
                    class="fa-stack-2x"
                  />
                  <fa-icon
                    color="#ffffff"
                    class="fa-stack-1x"
                    :icon="['far', 'star']"
                  />
                </span>
                <h4 class="m-0 mr-2">
                  {{ formatDistanceToNow(new Date(user.created_at)) }}
                </h4>
                <h4 class="m-0">
                  on CoachingYuk.com
                </h4>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col />
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <b-card>
          <b-row class="pb-3 border-bottom-grey">
            <b-col>Check-Ins</b-col>
            <b-col class="d-flex flex-column justify-content-center">
              <b-badge
                pill
                class="align-self-end"
              >
                0
              </b-badge>
            </b-col>
          </b-row>
          <b-row class="pt-3">
            <b-col>Goals</b-col>
            <b-col class="d-flex flex-column justify-content-center">
              <b-badge
                pill
                class="align-self-end"
              >
                0
              </b-badge>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col />
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <b-card>
          <b-row class="pb-3 border-bottom-grey">
            <b-col>Followers</b-col>
            <b-col class="d-flex flex-column justify-content-center">
              <b-badge
                pill
                class="align-self-end"
              >
                0
              </b-badge>
            </b-col>
          </b-row>
          <b-row class="pt-3">
            <b-col>Following</b-col>
            <b-col class="d-flex flex-column justify-content-center">
              <b-badge
                pill
                class="align-self-end"
              >
                0
              </b-badge>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>

<script>
import UserDefaultHeader from '@/assets/img-dummy-profile-header.jpg'
import { formatDistanceToNow } from 'date-fns'

import api from '@/api'
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  data() {
    return {
      UserDefaultHeader,
      userId: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).id
        : null,
      user: {},
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  mounted() {
    this.getDetailUser()
  },
  methods: {
    formatDistanceToNow,
    getNameInitial,
    async getDetailUser() {
      const { data } = await api.user.detail(this.userId)
      this.user = data.data
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-card-header {
    height: 450px;
  }

  .border-bottom-grey {
    border-bottom: solid 2px var(--md-grey-300);
  }

  .button-outline-white {
    background-color: transparent;
    border-radius: 25px;
    border: solid 2px var(--md-white);

    &:hover {
      background-color: var(--md-grey-500);
    }
  }
</style>
