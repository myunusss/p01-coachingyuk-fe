<template>
  <div>
    <b-card-group class="mb-5">
      <b-card
        img-top
        img-height="250px"
        class="card-height pointer"
        :title="coach.name"
        :img-src="coach.avatar ? `${bgUrl}${coach.avatar}` : UserDefaultAvatar"
        @click="goToCoachPage"
      >
        <b-card-body>
          <b-row>
            <b-col>
              <h5>{{ `${coach.first_name} ${coach.last_name}` }}</h5>
              <p class="font-italic">
                {{ truncate(coach.bio) }}
              </p>
            </b-col>
          </b-row>
        </b-card-body>
        <template v-slot:footer>
          <b-row class="d-flex justify-content-center align-items-center">
            <b-col class="d-flex flex-row justify-content-end">
              <p class="m-0">
                {{ `${coach.followers.length} Followers` }}
              </p>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  props: {
    coach: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      UserDefaultAvatar,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null
    }
  },
  methods: {
    truncate(value) {
      if (value) {
        return value.length > 90
          ? `${value.slice(0, 90)}...`
          : value
      }
    },
    goToCoachPage() {
      if (this.user) {
        return this.$router.push({ name: 'CoachPage', params: { user: this.coach }})
      }
      return this.$router.push('/login')
    }
  }
};
</script>

<style scoped lang="scss">
  .card-height {
    height: 500px;
  }
</style>
