<template>
  <div>
    <div class="pt-3 pb-5">
      <b-container>
        <b-row class="py-3">
          <b-col>
            <h4 class="font-weight-bold">
              TOP PRODUCTIVITY COACHES
            </h4>
          </b-col>
          <b-col class="d-flex justify-content-end">
            <h5 class="font-weight-bold text-color-light-blue">
              SEE ALL >
            </h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="(items, i) of dummyData"
            :key="i"
          >
            <card-recommendation :coach="items" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="pt-3 pb-5 bg-grey">
      <b-container>
        <b-row class="py-3">
          <b-col>
            <h4 class="font-weight-bold">
              TOP MINDFULNESS COACHES
            </h4>
          </b-col>
          <b-col class="d-flex justify-content-end">
            <h5 class="font-weight-bold text-color-light-blue">
              SEE ALL >
            </h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="(items, i) of dummyData"
            :key="i"
          >
            <card-recommendation :coach="items" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="py-3">
      <b-container>
        <b-row class="py-3">
          <b-col>
            <h4 class="font-weight-bold">
              TOP FITNESS COACHES
            </h4>
          </b-col>
          <b-col class="d-flex justify-content-end">
            <h5 class="font-weight-bold text-color-light-blue">
              SEE ALL >
            </h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="(items, i) of dummyData"
            :key="i"
          >
            <card-recommendation :coach="items" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'
import CardRecommendation from '@/components/CardRecommendation/CardRecommendation'

export default {
  components: {
    CardRecommendation
  },
  data() {
    return {
      dummyData: [
        { name: 'Test 1', avatar: UserDefaultAvatar, testimonies: 4 },
        { name: 'Test 2', avatar: UserDefaultAvatar, testimonies: 5 },
        { name: 'Test 3', avatar: UserDefaultAvatar, testimonies: 1 }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
  .text-color-light-blue {
    color: #2196F3;
  }

  .bg-grey {
    background-color: var(--md-blue-grey-50);
  }
</style>
