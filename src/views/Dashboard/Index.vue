<template>
  <b-container class="main-padding">
    <div>
      <b-row>
        <b-col md="6">
          <b-card>
            <b-row class="d-flex p-3 justify-content-center header-card">
              <b-col
                cols="8"
                md="10"
              >
                <div>
                  <b-row class="justify-content-md-center">
                    <b-col
                      cols="6"
                      md="2"
                    >
                      <b-row class="d-flex justify-content-center">
                        <small class="text-muted">
                          {{ format(dashboardDate, 'MMM') }}
                        </small>
                      </b-row>
                      <b-row class="d-flex justify-content-center">
                        <h5 class="text-black">
                          {{ format(dashboardDate, 'dd') }}
                        </h5>
                      </b-row>
                    </b-col>
                    <b-col
                      cols="6"
                      md="2"
                      class="d-flex justify-content-center"
                    >
                      <b-dropdown
                        :text="defineDate()"
                        variant="transparent"
                      >
                        <b-dropdown-item
                          v-for="(date, i) of getWeekIntervalDate()"
                          :key="i"
                          @click="dashboardDate = date"
                        >
                          {{ format(date, 'MMM dd cccc') }}
                        </b-dropdown-item>
                      </b-dropdown>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col
                cols="4"
                md="2"
                class="d-flex flex-column justify-content-center"
              >
                <fa-icon
                  icon="plus"
                  size="2x"
                  color="#039be5"
                  class="align-self-end pointer"
                  @click="isCategoriesShown = !isCategoriesShown"
                />
              </b-col>
            </b-row>
            <b-row
              class="p-3"
              v-if="!userTopics.length"
            >
              <b-row class="w-100">
                <b-col
                  cols="7"
                  md="8"
                  class="d-flex align-items-center"
                >
                  No goals added
                </b-col>
                <b-col
                  cols="5"
                  md="4"
                >
                  <b-button
                    variant="primary"
                    @click="isCategoriesShown = !isCategoriesShown"
                  >
                    Add a goal
                  </b-button>
                </b-col>
              </b-row>
            </b-row>
            <b-row
              v-else
              v-for="(items, i) of userTopics"
              :class="[hasUserCheckedIn(items)
                ? 'border-bottom-grey post-check-in-bg'
                : 'border-bottom-grey pre-check-in-bg']"
              :key="i"
              @click="getTopicDetail(items)"
            >
              <b-col class="px-5 py-3">
                <b-row>
                  <h3>{{ items.name }}</h3>
                </b-row>
                <b-row class="d-flex align-items-center">
                  <fa-icon
                    icon="check-circle"
                    class="mr-2"
                    :color="[hasUserCheckedIn(items) ? '#ffffff' : '#9e9e9e']"
                  />
                  <h6 class="m-0">
                    {{ items.total_check_ins }}
                  </h6>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          md="6"
          class="mt-3 mt-md-0"
        >
          <!--
   ___   _ _____ ___ ___  ___  ___ ___ ___ ___
  / __| /_\_   _| __/ __|/ _ \| _ \_ _| __/ __|
 | (__ / _ \| | | _| (_ | (_) |   /| || _|\__ \
  \___/_/ \_\_| |___\___|\___/|_|_\___|___|___/
          -->
          <div v-if="isCategoriesShown">
            <b-input-group class="mb-3">
              <b-form-input placeholder="Search or Find Goal" />
              <b-input-group-append>
                <b-button variant="primary">
                  <fa-icon icon="search" />
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <category-list
              :categories="categories"
              @onCategoryPicked="onCategoryPicked"
            />
          </div>
          <!--
  _____ ___  ___ ___ ___
 |_   _/ _ \| _ \_ _/ __|
   | || (_) |  _/| | (__
   |_| \___/|_| |___\___|
          -->
          <div v-else-if="isTopicShown">
            <topic-list
              :category-title="categoryTitle"
              :topics="topics"
              @onClose="onTopicClosed"
            />
          </div>
          <!--
  _____ ___  ___ ___ ___   ___  ___ _____ _   ___ _
 |_   _/ _ \| _ \_ _/ __| |   \| __|_   _/_\ |_ _| |
   | || (_) |  _/| | (__  | |) | _|  | |/ _ \ | || |__
   |_| \___/|_| |___\___| |___/|___| |_/_/ \_\___|____|
          -->
          <div v-else-if="isTopicDetailShown">
            <card-topic-detail
              :user-id="user.id"
              :topic-detail="topicDetail"
              :edit-activity="editActivity"
              :activity.sync="activity"
              :is-note-focused.sync="isNoteFocused"
              @onCheckIn="checkInTopic"
              @onNoteFocus="isNoteFocused = true"
              @onSubmit="editActivity"
              @onCancel="onNoteCancel"
            />
            <b-card class="p-3 mt-5">
              <b-row class="d-flex flex-row pb-3 border-bottom-grey">
                <h3 class="align-self-center mx-auto">
                  Questions
                </h3>
                <h6
                  class="text-primary pointer"
                  @click="isUserAskQuestion = !isUserAskQuestion"
                >
                  Ask
                </h6>
              </b-row>
              <!--
    _   ___ _  __   ___  _   _ ___ ___ _____ ___ ___  _  _
   /_\ / __| |/ /  / _ \| | | | __/ __|_   _|_ _/ _ \| \| |
  / _ \\__ \ ' <  | (_) | |_| | _|\__ \ | |  | | (_) | .` |
 /_/ \_\___/_|\_\  \__\_\\___/|___|___/ |_| |___\___/|_|\_|
              -->
              <card-ask-question
                :is-user-ask-question="isUserAskQuestion"
                @onQuestionAsked="askQuestion"
              />
              <b-row
                v-for="(items, i) of questions"
                :key="i"
              >
                <b-col class="py-3 border-bottom-grey">
                  <!--
   ___  _   _ ___ ___ _____ ___ ___  _  _
  / _ \| | | | __/ __|_   _|_ _/ _ \| \| |
 | (_) | |_| | _|\__ \ | |  | | (_) | .` |
  \__\_\\___/|___|___/ |_| |___\___/|_|\_|
                  -->
                  <CardQuestion
                    :items="items"
                    :topic="topicDetail"
                  />
                </b-col>
              </b-row>
            </b-card>
          </div>

          <div
            v-else
            class="text-center justify-content-center pt-5"
          >
            <h4 class="text-grey-light px-5">
              "If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful at all."
            </h4>
            <h5 class="text-grey py-3">
              - MICHELANGELO
            </h5>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import numeral from 'numeral'
import { eachDayOfInterval, format, isYesterday, isToday, sub } from 'date-fns'

import CategoryList from '@/components/CategoryList/CategoryList'
import TopicList from '@/components/TopicList/TopicList'
import CardTopicDetail from '@/components/CardTopicDetail/CardTopicDetail'
import CardQuestion from '@/components/CardQuestion/CardQuestion'
import CardAskQuestion from '@/components/CardAskQuestion/CardAskQuestion'

import api from '@/api'

export default {
  components: {
    CategoryList,
    TopicList,
    CardTopicDetail,
    CardQuestion,
    CardAskQuestion
  },
  data() {
    return {
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {},
      isCategoriesShown: false,
      isTopicShown: false,
      isTopicDetailShown: false,
      isUserAskQuestion: false,
      isNoteFocused: false,
      dashboardDate: new Date(),
      userTopics: [],
      categories: [],
      categoryTitle: null,
      topics: [],
      topicDetail: {},
      questions: [],
      activity: {
        id: null,
        topic_id: null,
        content: null,
        note: null
      }
    }
  },
  mounted() {
    this.getListOfUserTopics()
    this.getCategories()
  },
  methods: {
    format,
    async getListOfUserTopics() {
      const { data } = await api.topic.list({ user_id: this.user.id })
      localStorage.setItem('topics', JSON.stringify(data.data))
      this.userTopics = data.data
    },
    async getCategories() {
      const { data } = await api.category.list()
      this.categories = data.data
    },
    async getQuestions() {
      const { data } = await api.questions.list({ topic_id: this.topicDetail.id })
      this.questions = data.data
    },
    async askQuestion(value) {
      try {
        await api.questions.ask({
          topic_id: this.topicDetail.id,
          content: value
        })
        this.isUserAskQuestion = false
        await this.getQuestions()
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed To Ask Question',
          variant: 'danger'
        })
      }
    },
    async checkInTopic() {
      try {
        const { data } = await api.topic.checkIn({ topic_id: this.topicDetail.id })
        this.$bvToast.toast(data.meta.message, {
          title: 'Check In Success',
          variant: 'success'
        })
        await this.getListOfUserTopics()
        await this.postActivity()
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Check In Failed',
          variant: 'danger'
        })
      }
    },
    async getActivityOnTopic() {
      const { data } = await api.activity.list({ topic_id: this.topicDetail.id })
      if (data.data.length) {
        this.activity = data.data[0]
        return
      }
      this.activity = {
        id: null,
        topic_id: this.topicDetail.id,
        content: null,
        note: null
      }
    },
    async postActivity() {
      const tempTopic = this.userTopics.find(v => v.id === this.topicDetail.id)
      this.activity.topic_id = this.topicDetail.id
      this.activity.content = `For the ${numeral(tempTopic.total_check_ins).format('0o')} time`
      await api.activity.post(this.activity)
    },
    async editActivity() {
      try {
        const { data } = await api.activity.edit(this.activity.id, {
          topic_id: this.activity.topic_id,
          content: this.activity.content,
          note: this.activity.note
        })
        this.isNoteFocused = false
        this.$bvToast.toast(data.meta.message, {
          title: 'Edit a Note Success',
          variant: 'success'
        })
      } catch ({ response }) {
        this.isNoteFocused = false
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Edit a Note Failed',
          variant: 'danger'
        })
      }
    },
    getWeekIntervalDate() {
      return eachDayOfInterval({
        start: sub(new Date(), { days: 7 }),
        end: new Date()
      }).reverse()
    },
    defineDate() {
      return isToday(this.dashboardDate)
        ? 'Today'
        : isYesterday(this.dashboardDate)
          ? 'Yesterday'
          // 'cccc' is a format formula to show day name
          : format(this.dashboardDate, 'cccc')
    },
    getTopicDetail(items) {
      if (this.topicDetail.id === items.id) {
        this.isTopicDetailShown = !this.isTopicDetailShown
        return
      }
      this.isTopicDetailShown = true
      this.topicDetail = items
      this.getQuestions()
      this.getActivityOnTopic()
    },
    onCategoryPicked(items) {
      this.categoryTitle = items.name
      this.topics = items.topics
      this.isCategoriesShown = false
      this.isTopicShown = true
    },
    onTopicClosed() {
      this.isTopicShown = false
      this.isCategoriesShown = true
    },
    hasUserCheckedIn(item) {
      return item.check_in_users.find(v => v.id === this.user.id)
    },
    onNoteCancel() {
      this.isNoteFocused = false
    }
  }
}
</script>

<style scoped lang="scss">
  .header-card {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .text-grey {
    color: var(--md-blue-grey-200);
    font-style: italic;
    letter-spacing: 1.5px;
  }

  .text-grey-light {
    color: var(--md-grey-400);
    font-style: italic;
  }

  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .pre-check-in-bg {
    background-color: var(--md-white);
  }

  .post-check-in-bg {
    background-color: var(--md-green-400);
    color: var(--md-white);
  }
</style>
