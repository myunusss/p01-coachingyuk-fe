<template>
  <div class="main-padding">
    <b-container class="d-flex justify-content-center">
      <b-card class="w-res-50">
        <b-row>
          <b-col>
            <v-observer
              v-slot="{ valid }"
              tag="div"
              ref="password"
            >
              <form
                @submit.prevent="edit"
                class="d-flex flex-column"
              >
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
                      v-model="password"
                      type="password"
                      class="p-4"
                      :state="!errors.length && null"
                    />
                  </b-form-group>
                </v-provider>
                <b-progress
                  v-if="isProgress"
                  striped
                  animated
                  variant="info"
                  value="100"
                  class="mb-2"
                />
                <b-button
                  type="submit"
                  variant="primary"
                  class="align-self-end"
                  :disabled="!valid"
                >
                  Update Password
                </b-button>
              </form>
            </v-observer>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      isProgress: false,
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {},
      password: ''
    }
  },
  methods: {
    async edit() {
      const valid = this.$refs.password.validate()
      if (!valid) return false
      try {
        this.isProgress = true
        const { data } = await api.user.update(this.user.id, this.prepareForm())
        localStorage.setItem('user', JSON.stringify(data.data))
        this.isProgress = false
        this.$bvToast.toast('Password successfully updated', {
          title: 'Update Success',
          variant: 'success'
        })
        setTimeout(() => { this.$router.push('/dashboard') }, 1500)
      } catch ({ response }) {
        this.isProgress = false
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Update Failed',
          variant: 'danger'
        })
      }
    },
    prepareForm() {
      const profileForm = new FormData()
      profileForm.append('_method', 'PUT')
      profileForm.append('password', this.password)
      return profileForm
    }
  }
};
</script>

<style scoped>

</style>
