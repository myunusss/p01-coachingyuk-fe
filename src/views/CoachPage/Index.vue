<template>
  <div
    class="vh-100 bg-cover"
    :style="{ backgroundImage: `url(${bgUrl}${user.header_image})`}"
  >
    <div class="main-padding">
      <b-container>
        <b-row>
          <b-col cols="6">
            <b-card class="card-height bg-gradient-green">
              <b-row>
                <b-col class="d-flex flex-column justify-content-center align-items-center">
                  <b-avatar
                    class="mb-3"
                    size="90px"
                    :src="user.avatar ? `${bgUrl}${user.avatar}` : UserDefaultAvatar"
                  />
                  <h3 class="mb-3 text-white">
                    Hi, I'm {{ `${user.first_name} ${user.last_name}` }}
                  </h3>
                  <h5 class="text-white">
                    {{ user.bio }}
                  </h5>
                  <div class="w-100 my-3 divider" />
                  <b-row class="d-flex justify-content-center align-items-center">
                    <fa-icon
                      icon="envelope"
                      color="#ffffff"
                      class="mr-3"
                    />
                    <p class="m-0 text-white">
                      {{ user.email }}
                    </p>
                  </b-row>
                  <div class="w-100 my-3 divider" />
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col cols="6" />
        </b-row>
      </b-container>
    </div>
    <div class="py-5">
      <b-container>
        <b-row>
          <b-col cols="6" />
          <b-col cols="6">
            <b-card>
              <b-card-body class="d-flex flex-column align-items-center">
                <h5>Hire {{ `${user.first_name}` }}</h5>
                <h1>$25<span class="text-secondary caption-small">/week</span></h1>
                <b-button
                  variant="primary"
                  class="mt-5 px-5 border-button"
                  @click="$router.push({ name: 'CoachPageSubscribe', params: { coach: user }})"
                >
                  SUBSCRIBE
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      UserDefaultAvatar,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  }
}
</script>

<style scoped lang="scss">
  .bg-gradient-green {
    background: linear-gradient(to bottom, rgba(76, 175, 80, 0.5), rgba(33, 150, 243, 0.5));
  }

  .bg-cover {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card-height {
    height: 925px;
  }

  .divider {
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  }

  .caption-small {
    font-size: 15px;
  }

  .border-button {
    border-radius: 25px;
  }
</style>
