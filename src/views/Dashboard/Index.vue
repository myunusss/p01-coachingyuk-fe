<template>
  <div>
    <b-row>
      <b-col>
        <b-card>
          <b-row class="d-flex p-3 justify-content-center header-card">
            <b-col cols="10">
              <div>
                <b-row class="justify-content-center">
                  <b-col cols="2">
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
                    cols="2"
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
              cols="2"
              class="d-flex flex-column justify-content-center"
            >
              <fa-icon
                icon="plus"
                size="2x"
                color="#039be5"
                class="align-self-end pointer"
                @click="isTopicShown = !isTopicShown"
              />
            </b-col>
          </b-row>
          <b-row class="p-3">
            <b-row class="w-100">
              <b-col cols="8">
                No goals added
              </b-col>
              <b-col cols="4">
                <b-button variant="primary">
                  Add a goal
                </b-button>
              </b-col>
            </b-row>
          </b-row>
        </b-card>
      </b-col>
      <b-col>
        <div v-if="isTopicShown">
          <b-input-group class="mb-3">
            <b-form-input placeholder="Search or Find Goal" />
            <b-input-group-append>
              <b-button variant="primary">
                <fa-icon icon="search" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <topic-list />
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
</template>

<script>
import TopicList from '@/components/TopicList/TopicList'
import { eachDayOfInterval, format, isYesterday, isToday, sub } from 'date-fns'

export default {
  components: {
    TopicList
  },
  data() {
    return {
      isTopicShown: false,
      dashboardDate: new Date(),
      dummyTopic: [{ id: 1, name: 'Topic A' }]
    }
  },
  methods: {
    format,
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
</style>
