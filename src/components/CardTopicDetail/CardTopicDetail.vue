<template>
  <div>
    <b-card class="p-3">
      <b-row class="d-flex flex-row pb-3 border-bottom-grey">
        <h3
          class="align-self-center mx-auto pointer"
          @click="$router.push({ name: 'Topic', params: { topic: topicDetail } })"
        >
          {{ topicDetail.name }}
        </h3>
        <fa-icon
          icon="ellipsis-h"
          class="align-self-center"
        />
      </b-row>
      <b-row class="py-5 border-bottom-grey">
        <b-col class="d-flex flex-column">
          <fa-icon
            icon="check-circle"
            size="3x"
            class="align-self-center pointer"
            :color="hasUserCheckedIn ? '#43a047' : '#9e9e9e'"
            @click="$emit('onCheckIn')"
          />
          <b-card class="mt-3 activity-bg-grey">
            <v-observer
              v-slot="{ valid }"
              tag="div"
              ref="activity"
            >
              <form @submit.prevent="editActivity">
                <v-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="content"
                >
                  <b-form-group :invalid-feedback="errors[0]">
                    <b-form-input
                      v-model="activity.content"
                      disabled
                    />
                  </b-form-group>
                </v-provider>
                <v-provider
                  v-slot="{ errors }"
                  name="note"
                  rules="required"
                >
                  <b-form-group :invalid-feedback="errors[0]">
                    <b-form-textarea
                      v-model="activity.note"
                      placeholder="Add a note..."
                      @focus="$emit('onNoteFocus')"
                    />
                  </b-form-group>
                </v-provider>
                <div
                  v-if="isNoteFocused"
                  class="d-flex flex-row"
                >
                  <b-button
                    type="submit"
                    variant="primary"
                    class="mr-2"
                    :disabled="!valid"
                    @mousedown="$emit('onSubmit')"
                  >
                    Post
                  </b-button>
                  <b-button
                    variant="light"
                    class="ml-2"
                    @mousedown="$emit('onCancel')"
                  >
                    Cancel
                  </b-button>
                </div>
              </form>
            </v-observer>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="py-3 border-bottom-grey">
        <b-col
          cols="2"
          class="d-flex justify-content-center"
        >
          <p class="text-secondary align-self-center">
            Weekly Stat
          </p>
        </b-col>
        <b-col
          cols="8"
          class="d-flex align-items-center"
        >
          <b-avatar variant="light">
            {{ topicDetail.total_check_ins }}
          </b-avatar>
        </b-col>
        <b-col
          cols="2"
          class="d-flex justify-content-center"
        >
          <fa-icon
            icon="chevron-right"
            size="2x"
            color="#2196f3"
            class="align-self-center"
          />
        </b-col>
      </b-row>
      <b-row class="py-3 border-bottom-grey">
        <b-col
          cols="2"
          class="d-flex"
        >
          <p class="text-secondary align-self-center">
            {{ topicDetail.total_users }} Today
          </p>
        </b-col>
        <b-col
          cols="8"
          class="d-flex align-items-center"
        >
          <b-avatar-group>
            <div
              v-for="(user, i) of avatarGroupLimit"
              :key="i"
            >
              <b-avatar
                v-if="user.avatar && (avatarGroupLimit.length < maxLength || i < avatarGroupLimit.length - 2)"
                variant="light"
                :key="i"
                :src="`${bgUrl}${user.avatar}`"
              />
              <b-avatar
                v-else-if="user.avatar === null && (avatarGroupLimit.length < maxLength || i < avatarGroupLimit.length - 2)"
                variant="danger"
                :text="`${getNameInitial(user.first_name, user.last_name)}`"
              />
              <b-avatar
                v-else-if="avatarGroupLimit.length >= maxLength && i < avatarGroupLimit.length - 1"
                variant="light"
              >
                <fa-icon
                  icon="ellipsis-h"
                  color="#1e88e5"
                />
              </b-avatar>
            </div>
          </b-avatar-group>
        </b-col>
        <b-col
          cols="2"
          class="d-flex justify-content-center"
        >
          <fa-icon
            icon="chevron-right"
            size="2x"
            color="#2196f3"
            class="align-self-center"
          />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    topicDetail: {
      type: Object,
      default: () => ({
        name: ''
      })
    },
    userId: {
      type: Number,
      default: () => null
    },
    isNoteFocused: {
      type: Boolean,
      default: () => false
    },
    activity: {
      type: Object,
      default: () => ({
        id: null,
        topic_id: null,
        content: null,
        note: null
      })
    },
    editActivity: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      UserDefaultAvatar,
      maxLength: 6,
      maxIndex: 7,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  computed: {
    hasUserCheckedIn() {
      return this.topicDetail.check_in_users.find(v => v.id === this.userId)
    },
    avatarGroupLimit() {
      const tempArr = []
      if (this.topicDetail.joined_users.length > this.maxLength) {
        for (let i = 0; i < this.maxIndex; i++) {
          tempArr.push(this.topicDetail.joined_users[i])
        }
        return tempArr
      } else {
        return this.topicDetail.joined_users
      }
    }
  },
  methods: {
    getNameInitial,
    toggleNote() {
      this.isNoteFocused = !this.isNoteFocused
    }
  }
};
</script>

<style scoped lang="scss">
  input {
    border: none;
    border-bottom: solid 2px var(--md-white);
    background-color: transparent;

    &:disabled {
      background-color: transparent;
    }
  }

  textarea {
    height: 50px;
    border: none;
    background-color: transparent;

    &:focus {
      height: 150px;
      outline: none !important;
      border: solid 1px var(--md-white);
      background-color: transparent;
    }
  }

  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .activity-bg-grey {
    background-color: var(--md-blue-grey-50);
  }
</style>
