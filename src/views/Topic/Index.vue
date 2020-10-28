<template>
  <b-container class="main-padding">
    <b-card
      img-top
      :img-src="topic.background
        ? `${bgUrl}${topic.background}`
        : TopicDefaultImage"
    >
      <b-card-body>
        <b-row>
          <b-col md="6">
            <h3>{{ topic.name }}</h3>
          </b-col>
          <b-col
            md="6"
            class="d-flex justify-content-end"
          >
            <b-button
              variant="primary"
              class="w-25 align-self-center"
              :disabled="hasUserJoined"
              @click="joinTopic"
            >
              {{ hasUserJoined ? 'JOINED' : 'JOIN' }}
            </b-button>
          </b-col>
        </b-row>
        <b-row class="pb-3 border-bottom-grey">
          <b-col class="d-flex flex-row align-items-center">
            <b-avatar
              variant="primary"
              class="mr-3"
              :src="require('../../assets/logo_coaching_yuk.png')"
            />
            <h5 class="m-0 mr-2">
              @ CoachingYukDotCom
            </h5>
            &bull;
            <h5 class="m-0 ml-2">
              {{ topicDetail.total_users }} joined
            </h5>
          </b-col>
        </b-row>
        <b-row class="py-3 border-bottom-grey">
          <b-col
            cols="3"
            md="1"
            class="pl-0"
          >
            <p class="m-0 text-secondary">
              {{ topicDetail.total_check_ins }}
            </p>
            <small class="m-0 text-secondary">
              TODAY
            </small>
          </b-col>
          <b-col
            cols="8"
            class="d-flex flex-row align-items-center"
          >
            <b-avatar-group>
              <div
                v-for="(user, i) of avatarCheckInGroup"
                :key="i"
              >
                <b-avatar
                  v-if="user.avatar && (avatarCheckInGroup.length < maxLength || i < avatarCheckInGroup.length - 2)"
                  variant="light"
                  :key="i"
                  :src="`${bgUrl}${user.avatar}`"
                />
                <b-avatar
                  v-else-if="user.avatar === null && (avatarCheckInGroup.length < maxLength || i < avatarCheckInGroup.length - 2)"
                  variant="danger"
                  :text="`${getNameInitial(user.first_name, user.last_name)}`"
                />
                <b-avatar
                  v-else-if="avatarCheckInGroup.length >= maxLength && i < avatarCheckInGroup.length - 1"
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
            cols="1"
            md="1"
            class="pr-0 d-flex justify-content-center"
          >
            <fa-icon
              icon="chevron-right"
              color="#2196f3"
              size="2x"
              class="align-self-center"
            />
          </b-col>
        </b-row>
        <b-row class="pt-3">
          <b-col
            cols="3"
            md="1"
            class="pl-0"
          >
            <p class="m-0 text-secondary">
              {{ topicDetail.total_coach_users }}
            </p>
            <small class="m-0 text-secondary">
              COACHES
            </small>
          </b-col>
          <b-col
            cols="8"
            class="d-flex flex-row align-items-center"
          >
            <b-avatar-group>
              <div
                v-for="(user, i) of avatarCoachGroup"
                :key="i"
              >
                <b-avatar
                  v-if="user.avatar && avatarCoachGroup.length < maxLength"
                  variant="light"
                  :key="i"
                  :src="`${bgUrl}${user.avatar}`"
                />
                <b-avatar
                  v-else-if="user.avatar === null && avatarCoachGroup.length < maxLength"
                  variant="danger"
                  :text="`${getNameInitial(user.first_name, user.last_name)}`"
                />
                <b-avatar
                  v-else-if="avatarCoachGroup.length >= maxLength && i < avatarCoachGroup.length - 1"
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
            cols="1"
            class="pr-0 d-flex justify-content-center"
          >
            <fa-icon
              icon="chevron-right"
              color="#2196f3"
              size="2x"
              class="align-self-center"
            />
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-row class="mt-3">
      <b-col md="6">
        <b-card>
          <b-card-text>Ready to build this habit? Join and check in any day you meet your goal</b-card-text>
        </b-card>
      </b-col>
      <b-col
        md="6"
        class="mt-3 mt-md-0"
      >
        <b-card>
          <b-row class="d-flex flex-row justify-content-center border-bottom-grey">
            <h3 class="align-self-center">
              Questions
            </h3>
          </b-row>
          <b-row
            v-for="(items, i) of questions"
            :key="i"
          >
            <b-col class="py-3 border-bottom-grey">
              <CardQuestion
                :items="items"
                :topic="topic"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TopicDefaultImage from '@/assets/img-dummy-default-category.jpg'
import CardQuestion from '@/components/CardQuestion/CardQuestion'

import api from '@/api'
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  props: {
    topic: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CardQuestion
  },
  data() {
    return {
      TopicDefaultImage,
      userTopics: localStorage.getItem('topics')
        ? JSON.parse(localStorage.getItem('topics'))
        : [],
      topicDetail: {},
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      questions: [],
      maxLength: 6,
      maxIndex: 7,
      avatarCheckInGroup: [],
      avatarCoachGroup: []
    }
  },
  computed: {
    hasUserJoined() {
      const joinedTopic = this.userTopics.find(v => v.id === this.topic.id)
      return !!joinedTopic
    }
  },
  mounted() {
    this.fetchTopicDetail()
    this.getQuestions()
  },
  methods: {
    getNameInitial,
    async fetchTopicDetail() {
      const { data } = await api.topic.listSlug(this.topic.slug)
      this.topicDetail = data.data
      this.setAvatarCheckInGroupLimit()
      this.setAvatarCoachGroupLimit()
    },
    async joinTopic() {
      try {
        const { data } = await api.topic.join({ topic_id: this.topic.id })
        this.$bvToast.toast(data.meta.message, {
          title: 'Success To Join A Topic',
          variant: 'success'
        })
        setTimeout(() => { this.$router.push('/') }, 1500)
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed To Join A Topic',
          variant: 'danger'
        })
      }
    },
    async getQuestions() {
      const { data } = await api.questions.list({ topic_id: this.topic.id })
      this.questions = data.data
    },
    setAvatarCheckInGroupLimit() {
      if (this.topicDetail.check_in_users.length > this.maxLength) {
        for (let i = 0; i < this.maxIndex; i++) {
          this.avatarCheckInGroup.push(this.topicDetail.check_in_users[i])
        }
      } else {
        this.avatarCheckInGroup = this.topicDetail.check_in_users
      }
    },
    setAvatarCoachGroupLimit() {
      const coachUsers = this.topicDetail.joined_users.filter(v => v.role.code === 'coach')
      if (coachUsers.length > this.maxLength) {
        for (let i = 0; i < this.maxIndex; i++) {
          this.avatarCoachGroup.push(coachUsers[i])
        }
      } else {
        this.avatarCoachGroup = coachUsers
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
