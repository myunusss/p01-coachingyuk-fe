<template>
  <b-container class="main-padding">
    <b-card
      overlay
      class="bg-card-header"
      :img-src="user.header_image || UserDefaultHeader"
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
  </b-container>
</template>

<script>
import UserDefaultHeader from '@/assets/img-dummy-profile-header.jpg'

import { getNameInitial } from '@/utils/avatarHelper'

export default {
  data() {
    return {
      UserDefaultHeader,
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {},
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  methods: {
    getNameInitial
  }
};
</script>

<style scoped lang="scss">
  .bg-card-header {
    height: 450px;
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
