<template>
  <div>
    <top-bar />
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
                      name="email"
                      rules="required|email"
                    >
                      <b-form-group
                        label="Email"
                        :invalid-feedback="errors[0]"
                      >
                        <b-form-input
                          v-model="email"
                          placeholder="Put your email here"
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
                      Submit Email
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
import TopBar from '@/components/LandingTopBar/LandingTopBar'

export default {
  components: {
    TopBar
  },
  data() {
    return {
      isProgress: false,
      email: ''
    }
  },
  methods: {
    resetPassword() {}
  }
};
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
