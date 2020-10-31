<template>
  <div>
    <top-bar />
    <main>
      <div class="vh-100 main-padding bg-accent">
        <b-container class="d-flex flex-column justify-content-center">
          <b-row class="w-res-50 mt-3 align-self-center">
            <b-col>
              <b-card class="p-2 bg-card-grey">
                <v-observer
                  v-slot="{ valid }"
                  tag="div"
                  ref="signUp"
                >
                  <b-form @submit.prevent="signUp">
                    <v-provider
                      v-slot="{ errors }"
                      name="First Name"
                      rules="required"
                    >
                      <b-form-group :invalid-feedback="errors[0]">
                        <b-form-input
                          v-model="credential.first_name"
                          placeholder="Nama Depan"
                          class="p-3"
                          :state="!errors.length && null"
                        />
                      </b-form-group>
                    </v-provider>
                    <v-provider
                      v-slot="{ errors }"
                      name="Last Name"
                      rules="required"
                    >
                      <b-form-group :invalid-feedback="errors[0]">
                        <b-form-input
                          v-model="credential.last_name"
                          placeholder="Nama Belakang"
                          class="p-3"
                          :state="!errors.length && null"
                        />
                      </b-form-group>
                    </v-provider>
                    <v-provider
                      v-slot="{ errors }"
                      name="username"
                      rules="required"
                    >
                      <b-form-group :invalid-feedback="errors[0]">
                        <b-form-input
                          v-model="credential.username"
                          placeholder="Username"
                          class="p-3"
                          :state="!errors.length && null"
                        />
                      </b-form-group>
                    </v-provider>
                    <v-provider
                      v-slot="{ errors }"
                      name="email"
                      rules="required|email"
                    >
                      <b-form-group :invalid-feedback="errors[0]">
                        <b-form-input
                          v-model="credential.email"
                          placeholder="Email"
                          class="p-3"
                          :state="!errors.length && null"
                        />
                      </b-form-group>
                    </v-provider>
                    <v-provider
                      v-slot="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <b-form-group :invalid-feedback="errors[0]">
                        <b-form-input
                          v-model="credential.password"
                          type="password"
                          placeholder="Password"
                          class="p-3"
                          :state="!errors.length && null"
                        />
                      </b-form-group>
                    </v-provider>
                    <v-provider
                      v-slot="{ errors }"
                      name="timezone"
                      rules="required"
                    >
                      <b-form-group :invalid-feedback="errors[0]">
                        <v-multiselect
                          v-model="credential.timezone"
                          placeholder="timezone"
                          :options="timezones"
                          :state="!errors.length && null"
                        />
                      </b-form-group>
                    </v-provider>
                    <b-form-group>
                      <b-form-checkbox
                        v-model="isAgreeToPrivacy"
                        placeholder="Password"
                        class="p-3"
                      >
                        <p class="m-0">
                          Saya setuju dengan CoachingYuk
                          <span
                            class="text-underline pointer"
                            @click="$router.push('/privacy-policy')"
                          >Privacy Policy</span>
                          dan
                          <span
                            class="text-underline pointer"
                            @click="$router.push('/terms-and-conditions')"
                          >Terms Conditions</span>
                        </p>
                      </b-form-checkbox>
                    </b-form-group>
                    <b-button
                      type="submit"
                      class="w-100 p-2 button-fill-accent"
                      :disabled="!valid || !isAgreeToPrivacy"
                    >
                      SIGN UP
                    </b-button>
                    <b-progress
                      v-if="isProgress"
                      striped
                      animated
                      variant="info"
                      value="100"
                      class="mt-3"
                    />
                  </b-form>
                </v-observer>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col class="d-flex flex-column justify-content-center">
              <p class="align-self-center text-white">
                Already signed up? Then just <a
                  class="text-orange pointer"
                  @click="isEvent ? $router.push('/login-event') : $router.push('/login')"
                >Log In</a>
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import TopBar from '@/components/LandingTopBar/LandingTopBar'

import api from '@/api'

export default {
  components: {
    TopBar
  },
  data() {
    return {
      isProgress: false,
      isEvent: this.$route.path === '/sign-up-event',
      credential: {
        first_name: null,
        last_name: null,
        username: null,
        email: null,
        password: null,
        timezone: 'Asia/Jakarta',
        callback_url: `${process.env.VUE_APP_CALLBACK_URL}`
      },
      isAgreeToPrivacy: false,
      timezones: moment.tz.names()
    }
  },
  methods: {
    async signUp() {
      const formValid = this.$refs.signUp.validate()
      if (!formValid) return false
      try {
        this.isProgress = true
        if (this.isEvent) {
          this.credential.callback_url = `${process.env.VUE_APP_EVENT_CALLBACK_URL}`
        }
        await api.signUp(this.credential)
        this.isProgress = false
        this.$bvToast.toast('Please check your email', {
          title: 'Sign Up Success',
          variant: 'success'
        })
        setTimeout(() => { this.$router.push('/landing') }, 2000)
      } catch ({ response }) {
        this.isProgress = false
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Sign Up Failed',
          variant: 'danger'
        })
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-accent {
    background-color: var(--md-deep-purple-800);
  }

  .bg-card-grey {
    background-color: var(--md-blue-grey-50);
  }

  .button-fill-accent {
    background-color: var(--md-deep-purple-800);
    border-radius: 25px;
    color: var(--md-white);
  }

  .text-orange {
    color: var(--md-orange-300);
  }

  .text-underline {
    text-decoration: underline;
  }
</style>
