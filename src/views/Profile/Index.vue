<template>
  <b-container class="main-padding">
    <b-card class="bg-card-grey">
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
          <b-img
            :src="UserDefaultAvatar"
            rounded="circle"
            width="150"
            height="150"
            class="mb-3 align-self-center"
          />
          <h3 class="text-white align-self-center">
            {{ user.first_name }}&nbsp;{{ user.last_name }}
          </h3>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  data() {
    return {
      UserDefaultAvatar,
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {}
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-card-grey {
    height: 450px;
    background-color: var(--md-grey-300);
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
