<template>
  <div>
    <top-bar />
    <main>
      <div class="vh-100 main-padding bg-accent">
        <b-container class="d-flex flex-column justify-content-center">
          <b-row>
            <b-col class="d-flex flex-column justify-content-center">
              <h3 class="align-self-center text-white">
                Log In
              </h3>
              <p class="align-self-center text-white">
                You don't have a password? Then please <a
                  class="text-white pointer"
                  @click="$router.push('/sign-up')"
                >Sign Up</a>
              </p>
            </b-col>
          </b-row>
          <b-row class="w-50 mt-3 align-self-center">
            <b-col>
              <b-card class="p-2 bg-card-grey">
                <v-observer
                  v-slot="{ valid }"
                  tag="div"
                  ref="login"
                >
                  <b-form @submit.prevent="login">
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
                    <b-button
                      type="submit"
                      class="w-100 p-2 button-fill-accent"
                      :disabled="!valid"
                    >
                      Log In
                    </b-button>
                  </b-form>
                </v-observer>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from '@/components/LandingTopBar/LandingTopBar'

import api from '@/api'

export default {
  components: {
    TopBar
  },
  data() {
    return {
      credential: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    async login() {
      const valid = this.$refs.login.validate()
      if (!valid) return false
      try {
        const { data } = await api.login(this.credential)
        localStorage.setItem('user',JSON.stringify(data.data))
        localStorage.setItem('token', data.data.token)
        this.$router.replace('/')
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Log In Failed',
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
</style>
