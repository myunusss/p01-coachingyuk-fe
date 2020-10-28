<template>
  <b-container class="main-padding">
    <b-row>
      <b-col>
        <b-card
          overlay
          class="bg-card-header"
          img-height="450px"
          :img-src="user.header_image
            ? `${bgUrl}${user.header_image}`
            : UserDefaultHeader"
        >
          <b-card-body class="h-100 d-flex flex-column">
            <b-row>
              <b-col class="d-flex justify-content-end">
                <b-button
                  class="pointer button-outline-white"
                  @click="$router.push({ name: 'Edit', params: { user } })"
                >
                  EDIT PROFILE
                </b-button>
              </b-col>
            </b-row>
            <b-row class="h-100">
              <b-col class="d-flex flex-column justify-content-center">
                <b-avatar
                  v-if="user.avatar"
                  size="85px"
                  class="align-self-center mb-3"
                  :src="`${bgUrl}${user.avatar}`"
                />
                <b-avatar
                  v-else
                  size="85px"
                  class="align-self-center mb-3"
                  :text="`${getNameInitial(user.first_name, user.last_name)}`"
                />
                <h3 class="text-white align-self-center">
                  {{ user.first_name }}&nbsp;{{ user.last_name }}
                </h3>
                <p class="m-0 text-white text-center font-italic align-self-center">
                  {{ user.bio }}
                </p>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <!--
  _    ___ ___ _____   __  __ ___ _  _ _   _
 | |  | __| __|_   _| |  \/  | __| \| | | | |
 | |__| _|| _|  | |   | |\/| | _|| .` | |_| |
 |____|___|_|   |_|   |_|  |_|___|_|\_|\___/
       -->
      <b-col md="6">
        <b-row class="w-100 mt-5">
          <b-col>
            <b-card>
              <b-card-body>
                <b-row class="mb-3">
                  <b-col class="d-flex flex-row align-items-center">
                    <span class="mr-3 fa-stack">
                      <fa-icon
                        icon="circle"
                        color="#43a047"
                        class="fa-stack-2x"
                      />
                      <fa-icon
                        icon="check"
                        color="#ffffff"
                        class="fa-stack-1x"
                      />
                    </span>
                    <h4 class="m-0 mr-2">
                      {{ user.total_check_in_topics }}
                    </h4>
                    <h4 class="m-0">
                      Total Check Ins
                    </h4>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col class="d-flex flex-row align-items-center">
                    <span class="mr-3 fa-stack">
                      <fa-icon
                        icon="circle"
                        color="#fb8c00"
                        class="fa-stack-2x"
                      />
                      <fa-icon
                        icon="fire"
                        color="#ffffff"
                        class="fa-stack-1x"
                      />
                    </span>
                    <h4 class="m-0">
                      Longest Streak of {{ user.total_streak || '0' }} in <span class="text-primary">{{ user.best_topic }}</span>
                    </h4>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col class="d-flex flex-row align-items-center">
                    <span class="mr-3 fa-stack">
                      <fa-icon
                        icon="circle"
                        color="#9e9e9e"
                        class="fa-stack-2x"
                      />
                      <fa-icon
                        color="#ffffff"
                        class="fa-stack-1x"
                        :icon="['far', 'star']"
                      />
                    </span>
                    <h4 class="m-0">
                      {{ formatDistanceToNow(new Date(user.created_at)) }} on CoachingYukDotCom
                    </h4>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="w-100 mt-5">
          <b-col>
            <b-card>
              <b-row
                class="pb-3 border-bottom-grey pointer"
                :class="{'menu-active': activeMenu === 'checkIn'}"
                @click="activeMenu = 'checkIn'"
              >
                <b-col>Check-Ins</b-col>
                <b-col class="d-flex flex-column justify-content-center">
                  <b-badge
                    pill
                    class="align-self-end"
                    :variant="activeMenu === 'checkIn'
                      ? 'primary'
                      : 'secondary'"
                  >
                    {{ user.total_check_in_topics }}
                  </b-badge>
                </b-col>
              </b-row>
              <b-row
                class="pt-3 pointer"
                :class="{'menu-active': activeMenu === 'goal'}"
                @click="activeMenu = 'goal'"
              >
                <b-col>Goals</b-col>
                <b-col class="d-flex flex-column justify-content-center">
                  <b-badge
                    pill
                    class="align-self-end"
                    :variant="activeMenu === 'goal'
                      ? 'primary'
                      : 'secondary'"
                  >
                    {{ topics.length }}
                  </b-badge>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="w-100 mt-5">
          <b-col>
            <b-card>
              <b-row
                class="pb-3 border-bottom-grey pointer"
                :class="{'menu-active': activeMenu === 'follower'}"
                @click="activeMenu = 'follower'"
              >
                <b-col>Followers</b-col>
                <b-col class="d-flex flex-column justify-content-center">
                  <b-badge
                    pill
                    class="align-self-end"
                    :variant="activeMenu === 'follower'
                      ? 'primary'
                      : 'secondary'"
                  >
                    {{ user.followers ? user.followers.length : 0 }}
                  </b-badge>
                </b-col>
              </b-row>
              <b-row
                class="pt-3 pointer"
                :class="{'menu-active': activeMenu === 'following'}"
                @click="activeMenu = 'following'"
              >
                <b-col>Following</b-col>
                <b-col class="d-flex flex-column justify-content-center">
                  <b-badge
                    pill
                    class="align-self-end"
                    :variant="activeMenu === 'following'
                      ? 'primary'
                      : 'secondary'"
                  >
                    {{ user.following ? user.following.length : 0 }}
                  </b-badge>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <!--
  ___ ___ ___ _  _ _____   __  __ ___ _  _ _   _
 | _ \_ _/ __| || |_   _| |  \/  | __| \| | | | |
 |   /| | (_ | __ | | |   | |\/| | _|| .` | |_| |
 |_|_\___\___|_||_| |_|   |_|  |_|___|_|\_|\___/
-->
      <b-col md="6">
        <!--
___ _  _ ___ ___ _  __  ___ _  _
/ __| || | __/ __| |/ /_|_ _| \| |
| (__| __ | _| (__| ' <___| || .` |
\___|_||_|___\___|_|\_\ |___|_|\_|
         -->
        <b-row
          v-if="activeMenu === 'checkIn'"
          class="mt-5"
        >
          <b-col>
            <b-card>
              <b-row class="border-bottom-grey">
                <b-col class="d-flex justify-content-center align-items-center">
                  <h5>Activity</h5>
                </b-col>
              </b-row>
              <div v-if="activities.length">
                <card-check-in
                  v-for="(item, i) of activities"
                  :key="i"
                  :activity="item"
                  :post-comment="postComment"
                />
              </div>
              <b-row v-else>
                <b-col class="pt-3">
                  <p class="m-0 font-italic">
                    You haven't post any activity yet
                  </p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <!--
   ___  ___   _   _
  / __|/ _ \ /_\ | |
 | (_ | (_) / _ \| |__
  \___|\___/_/ \_\____|
        -->
        <b-row
          v-if="activeMenu === 'goal'"
          class="mt-5"
        >
          <b-col>
            <b-card>
              <b-row class="border-bottom-grey">
                <b-col class="d-flex justify-content-center align-items-center">
                  <h5>Goals</h5>
                </b-col>
              </b-row>
              <div v-if="topics.length">
                <card-goal
                  v-for="(item, i) of topics"
                  :key="i"
                  :topic="item"
                />
              </div>
              <b-row v-else>
                <b-col class="pt-3">
                  <p class="m-0 font-italic">
                    You haven't joined any activity yet
                  </p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <!--
  ___ ___  _    _    _____      _____ ___
 | __/ _ \| |  | |  / _ \ \    / / __| _ \
 | _| (_) | |__| |_| (_) \ \/\/ /| _||   /
 |_| \___/|____|____\___/ \_/\_/ |___|_|_\
        -->
        <b-row
          v-if="activeMenu === 'follower'"
          class="mt-5"
        >
          <b-col>
            <b-card>
              <b-row class="border-bottom-grey">
                <b-col class="d-flex justify-content-center align-items-center">
                  <h5>Followers</h5>
                </b-col>
              </b-row>
              <div v-if="user.followers && user.followers.length">
                <card-follower
                  v-for="(item, i) of user.followers"
                  :key="i"
                  :follower="item"
                />
              </div>
              <b-row v-else>
                <b-col class="pt-3">
                  <p class="m-0 font-italic">
                    No followers yet
                  </p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <!--
  ___ ___  _    _    _____      _____ _  _  ___
 | __/ _ \| |  | |  / _ \ \    / /_ _| \| |/ __|
 | _| (_) | |__| |_| (_) \ \/\/ / | || .` | (_ |
 |_| \___/|____|____\___/ \_/\_/ |___|_|\_|\___|
        -->
        <b-row
          v-if="activeMenu === 'following'"
          class="mt-5"
        >
          <b-col>
            <b-card>
              <b-row class="border-bottom-grey">
                <b-col class="d-flex justify-content-center align-items-center">
                  <h5>Following</h5>
                </b-col>
              </b-row>
              <div v-if="user.following && user.following.length">
                <card-following
                  v-for="(item, i) of user.following"
                  :key="i"
                  :following="item"
                />
              </div>
              <b-row v-else>
                <b-col class="pt-3">
                  <p class="m-0 font-italic">
                    Not following anyone yet
                  </p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserDefaultHeader from '@/assets/img-dummy-profile-header.jpg'
import { formatDistanceToNow } from 'date-fns'

import api from '@/api'
import { getNameInitial } from '@/utils/avatarHelper'

import CardCheckIn from '@/components/CardProfile/CheckIn'
import CardGoal from '@/components/CardProfile/Goal'
import CardFollower from '@/components/CardProfile/Follower'
import CardFollowing from '@/components/CardProfile/Following'

export default {
  components: {
    CardCheckIn,
    CardGoal,
    CardFollower,
    CardFollowing
  },
  data() {
    return {
      UserDefaultHeader,
      userId: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).id
        : null,
      user: {},
      topics: [],
      activities: [],
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      activeMenu: 'checkIn'
    }
  },
  mounted() {
    this.getDetailUser()
  },
  methods: {
    formatDistanceToNow,
    getNameInitial,
    async getDetailUser() {
      const { data } = await api.user.detail(this.userId)
      this.user = data.data

      await this.getTopic()
      await this.getActivity()
    },
    async getTopic() {
      const { data } = await api.topic.list({ user_id: this.user.id })

      this.topics = data.data
    },
    async getActivity() {
      const { data } = await api.activity.list({ user_id: this.user.id })
      this.activities = data.data
    },
    async postComment(value, activityId) {
      await api.comment.post({ activity_id: activityId, content: value })
      await this.getActivity()
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-card-header {
    height: 450px;
  }

  .border-bottom-grey {
    border-bottom: solid 2px var(--md-grey-300);
  }

  .button-outline-white {
    background-color: transparent;
    border-radius: 25px;
    border: solid 2px var(--md-white);

    &:hover {
      background-color: var(--md-grey-500);
    }
  }

  .menu-active {
    color: var(--md-blue-500);
    font-weight: bold;
  }
</style>
