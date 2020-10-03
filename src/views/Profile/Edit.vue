<template>
  <b-container class="d-flex justify-content-center main-padding">
    <b-card class="w-75 p-3">
      <v-observer
        v-slot="{ valid }"
        tag="div"
        ref="profile"
      >
        <form
          @submit.prevent="edit"
          class="d-flex flex-column"
        >
          <b-row class="border-bottom-grey">
            <b-col>
              <h3 class="mb-4">
                Avatar
              </h3>
              <b-avatar
                v-if="user.avatar"
                size="125px"
                :src="avatarFile"
              />
              <b-avatar
                v-else
                size="125px"
                :text="`${getNameInitial(user.first_name, user.last_name)}`"
              />
              <v-provider
                v-slot="{ errors }"
                name="avatar"
                rules="size:500"
              >
                <b-form-group
                  class="mt-3"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-file
                    plain
                    v-model="user.avatar"
                    accept=".jpeg, .jpg, .png"
                    :state="!errors.length && null"
                    @change="(v) => setImages(v, true)"
                  />
                </b-form-group>
              </v-provider>
              <p>Recommended dimensions: 200x200px or higher. Max file size of 500KB.</p>
            </b-col>
          </b-row>
          <b-row class="border-bottom-grey">
            <b-col>
              <h3 class="my-4">
                Header
              </h3>
              <b-img
                v-if="user.header_image"
                class="w-100"
                :src="headerFile"
              />
              <div
                v-else
                class="d-flex py-5 flex-column justify-content-center header-container"
              >
                <fa-icon
                  icon="ban"
                  size="3x"
                  class="align-self-center mb-3"
                />
                <p class="m-0 align-self-center">
                  You haven't upload a header yet
                </p>
              </div>
              <v-provider
                v-slot="{ errors }"
                name="header"
                rules="size:500"
              >
                <b-form-group
                  class="mt-3"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-file
                    plain
                    v-model="user.header_image"
                    accept=".jpeg, .jpg, .png"
                    :state="!errors.length && null"
                    @change="setImages"
                  />
                </b-form-group>
              </v-provider>
              <p>Recommended dimensions: 1200x400px </p>
              <p>File Formats: JPG, PNG or JPEG. Max file size of 500KB</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex flex-column">
              <h3 class="my-4">
                Basics
              </h3>
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
            </b-col>
          </b-row>
        </form>
      </v-observer>
    </b-card>
  </b-container>
</template>

<script>
import moment from 'moment-timezone';

import api from '@/api';
import { getNameInitial } from '@/utils/avatarHelper';

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
      timezones: moment.tz.names(),
      avatarFile: this.user.avatar,
      headerFile: this.user.header_image
    }
  },
  methods: {
    getNameInitial,
    async edit() {
      const valid = this.$refs.profile.validate()
      if (!valid) return false
      try {
        const { data } = await api.user.update(this.user.id, this.setProfileForm())
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
    },
    transformFile(file) {
      return new Promise((res, rej) => {
        const reader = new FileReader()
        reader.onload = ev => res(ev.target.result)
        reader.onerror = ev => rej(ev)
        reader.readAsDataURL(file)
      })
    },
    setProfileForm() {
      const profileForm = new FormData()
      profileForm.append('_method', 'PUT')
      profileForm.append('first_name', this.user.first_name)
      profileForm.append('last_name', this.user.last_name)
      profileForm.append('username', this.user.username)
      profileForm.append('email', this.user.email)
      profileForm.append('password', this.user.password)
      profileForm.append('bio', this.user.bio)
      profileForm.append('avatar', this.user.avatar)
      profileForm.append('header_image', this.user.header_image)
      return profileForm
    },
    async setImages(ev, isAvatar) {
      const targetFile = ev.target.files[0]
      const transformedFile = await this.transformFile(targetFile)
      if (isAvatar) {
        this.user.avatar = targetFile
        this.avatarFile = transformedFile
      } else {
        this.user.header_image = targetFile
        this.headerFile = transformedFile
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .header-container {
    border-radius: 10px;
    background-color: var(--md-grey-300);
  }
</style>
