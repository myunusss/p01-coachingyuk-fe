<template>
  <div>
    <main>
      <div class="vh-100 main-padding bg-accent">
        <b-container class="d-flex flex-column justify-content-center">
          <b-row class="w-res-50 align-self-center">
            <b-col>
              <b-card>
                <v-observer
                  v-slot="{ valid }"
                  tag="div"
                  ref="login"
                >
                  <b-form @submit.prevent="resetPassword">
                    <v-provider
                      v-slot="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <b-form-group
                        label="New Password"
                        :invalid-feedback="errors[0]"
                      >
                        <b-form-input
                          type="password"
                          v-model="password"
                          placeholder="Put your new password here"
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
                      Submit
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
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      isProgress: false,
      resetPassToken: localStorage.getItem('password-token'),
      password: ''
    }
  },
  methods: {
    async resetPassword() {
      try {
        this.isProgress = true
        await api.resetPassword.password({ password: this.password, token: this.resetPassToken })
        this.isProgress = false
        this.$bvToast.toast('Password successfully updated', {
          title: 'Update Password Success',
          variant: 'success'
        })
        setTimeout(() => { this.$router.push('/login') }, 1500)
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Update Password Failed',
          variant: 'danger'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .bg-accent {
    background-color: var(--md-deep-purple-800);
  }

  .button-fill-accent {
    background-color: var(--md-deep-purple-800);
    border-radius: 25px;
    color: var(--md-white);
  }
</style>
