<template>
  <b-container class="d-flex justify-content-center main-padding">
    <b-card class="w-75 p-3">
      <b-row>
        <b-col>
          <h3 class="mb-4">
            Basics
          </h3>
          <v-observer
            v-slot="{ valid }"
            tag="div"
            ref="profile"
          >
            <form
              @submit.prevent="edit"
              class="d-flex flex-column"
            >
              <v-provider
                v-slot="{ errors }"
                name="first name"
                rules="required"
              >
                <b-form-group
                  label="First Name*"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-input
                    v-model="user.first_name"
                    class="p-4"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <v-provider
                v-slot="{ errors }"
                name="last name"
                rules="required"
              >
                <b-form-group
                  label="Last Name*"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-input
                    v-model="user.last_name"
                    class="p-4"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <v-provider
                v-slot="{ errors }"
                name="username"
                rules="required"
              >
                <b-form-group
                  label="Username*"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-input
                    v-model="user.username"
                    class="p-4"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <v-provider
                v-slot="{ errors }"
                name="email"
                rules="required"
              >
                <b-form-group
                  label="Email*"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-input
                    v-model="user.email"
                    class="p-4"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <v-provider
                v-slot="{ errors }"
                name="password"
                rules="required"
              >
                <b-form-group
                  label="Password*"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-input
                    v-model="user.password"
                    type="password"
                    class="p-4"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <v-provider
                v-slot="{ errors }"
                name="bio"
                rules="required"
              >
                <b-form-group
                  label="Bio*"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-textarea
                    v-model="user.bio"
                    class="p-4"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <v-provider
                v-slot="{ errors }"
                name="timezone"
                rules="required"
              >
                <b-form-group
                  label="Timezone*"
                  :invalid-feedback="errors[0]"
                >
                  <v-multiselect
                    v-model="user.timezone"
                    :options="timezones"
                    :state="!errors.length && null"
                  />
                </b-form-group>
              </v-provider>
              <b-button
                type="submit"
                variant="primary"
                class="align-self-end"
                :disabled="!valid"
              >
                Save Changes
              </b-button>
            </form>
          </v-observer>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import moment from 'moment-timezone'

import api from '@/api'

export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        id: null,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        bio: '',
        timezone: ''
      })
    }
  },
  data() {
    return {
      timezones: moment.tz.names()
    }
  },
  methods: {
    async edit() {
      const valid = this.$refs.profile.validate()
      if (!valid) return false
      try {
        const { data } = await api.user.update(this.user.id, this.user)
        localStorage.setItem('user', JSON.stringify(data.data))
        this.$bvToast.toast('User successfully updated', {
          title: 'Update Success',
          variant: 'success'
        })
        setTimeout(() => { this.$router.push('/dashboard') }, 1500)
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
