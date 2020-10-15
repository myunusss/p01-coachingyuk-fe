<template>
  <div>
    <top-bar is-button-shown />
    <main>
      <div class="main-padding">
        <b-container>
          <b-row
            v-if="!events.length"
            class="vh-100"
          >
            <b-col class="d-flex justify-content-center">
              <h3 class="font-italic">
                No Event Was Posted
              </h3>
            </b-col>
          </b-row>
          <b-row v-else>
            <b-col
              cols="4"
              v-for="(item, i) of events"
              class="mb-3"
              :key="i"
            >
              <b-card-group deck>
                <b-card
                  img-top
                  img-height="200px"
                  class="card-height text-white bg-gradient"
                  :img-src="DefaultEventImage"
                >
                  <b-card-body class="p-0 pt-3">
                    <b-row>
                      <b-col>
                        <h4 class="font-weight-bold">
                          {{ item.name }}
                        </h4>
                        <p>Lokasi : {{ item.location }}</p>
                      </b-col>
                    </b-row>
                  </b-card-body>
                  <template v-slot:footer>
                    <b-row>
                      <b-col>
                        <p class="m-0 font-italic">
                          {{ item.date }}
                        </p>
                      </b-col>
                      <b-col class="d-flex justify-content-end">
                        <p class="m-0">
                          {{ item.price }}
                        </p>
                      </b-col>
                    </b-row>
                  </template>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <upper-wave />
        <div class="bg-accent">
          <b-container>
            <b-row class="p-3">
              <b-col>
                <h3 class="text-white font-weight-bold">
                  DISCOVER
                </h3>
                <p class="text-white">
                  Find Your Goal
                </p>
                <p class="text-white">
                  Blog
                </p>
              </b-col>
              <b-col>
                <h3 class="text-white font-weight-bold">
                  GET STARTED
                </h3>
                <p
                  class="text-white pointer"
                  @click="$router.push('/login')"
                >
                  Log In
                </p>
                <p
                  class="text-white pointer"
                  @click="$router.push('/sign-up')"
                >
                  Sign Up
                </p>
                <p class="text-white">
                  FAQ
                </p>
                <p
                  class="text-white pointer"
                  @click="$router.push('/terms-and-conditions')"
                >
                  Terms & Conditions
                </p>
                <p
                  class="text-white pointer"
                  @click="$router.push('/privacy-policy')"
                >
                  Privacy Policy
                </p>
              </b-col>
              <b-col>
                <h3 class="text-white font-weight-bold">
                  COACHES
                </h3>
                <p
                  class="text-white pointer"
                  @click="$router.push('/become-a-coach')"
                >
                  Become a Coach
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="d-flex p-2 justify-content-center">
                <p class="text-white">
                  Copyright &copy; 2020 CoachingYuk
                </p>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DefaultEventImage from '@/assets/logo_coaching_yuk.png'
import TopBar from '@/components/LandingTopBar/LandingTopBar'
import UpperWave from '@/components/UpperWave/UpperWave'

import api from '@/api'

export default {
  components: {
    TopBar,
    UpperWave
  },
  data() {
    return {
      DefaultEventImage,
      events: []
    }
  },
  mounted() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      const { data } = await api.event.list()
      this.events = data.data
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-accent {
    background-color: var(--md-deep-purple-800);
  }

  .bg-gradient {
    background-image: linear-gradient(to bottom, var(--md-blue-800), var(--md-deep-purple-600));
  }

  .bg-footer-blue {
    background-color: var(--md-blue-800);
  }

  .card-height {
    height: 500px;
  }
</style>
