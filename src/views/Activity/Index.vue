<template>
  <div class="d-flex justify-content-center">
    <b-card class="w-50 align-self-center">
      <b-row class="py-3 text-center justify-content-center divider">
        <h4>Activity</h4>
      </b-row>
      <b-row
        v-show="!isHasFriends"
        class="my-3 justify-content-center"
      >
        <div class="d-flex flex-column justify-content-center">
          <h6>Follow friends to see their activity here</h6>
          <b-button
            variant="primary"
            class="align-self-center"
          >
            Find Friends to Follow
          </b-button>
        </div>
      </b-row>
      <b-row
        v-for="(items, i) of dummyData"
        class="px-4 py-3 justify-content-center divider"
        :key="i"
      >
        <card-activity
          :activity="items.activity"
          :user="items.user"
        />
      </b-row>
    </b-card>
  </div>
</template>

<script>
import CardActivity from '@/components/CardActivity/CardActivity'

export default {
  components: {
    CardActivity
  },
  data() {
    return {
      isHasFriends: true,
      dummyData: [
        { user: { avatar: '', name: 'Test Name 1', timestamp: '2020-09-22T19:55:00' }, activity: { header: 'Test 1', description: 'test 1' } },
        { user: { avatar: '', name: 'Test Name 2', timestamp: '2020-09-21T20:00:00' }, activity: { header: 'Test 2', description: 'test 2' } },
        { user: { avatar: '', name: 'Test Name 3', timestamp: '2020-09-22T18:00:00' }, activity: { header: 'Test 3', description: 'test 3' } },
        { user: { avatar: '', name: 'Test Name 4', timestamp: '2020-09-22T18:00:00' }, activity: { header: 'Test 4', description: 'test 4' } },
        { user: { avatar: '', name: 'Test Name 5', timestamp: '2020-09-22T18:00:00' }, activity: { header: 'Test 5', description: 'test 5' } }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
  .divider {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
