<template>
  <div>
    <div class="pt-3 pb-5">
      <b-container>
        <b-row class="py-3">
          <b-col>
            <h4 class="font-weight-bold">
              TOP COACHES
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
            md="3"
            v-for="(items, i) of coaches"
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
import CardRecommendation from '@/components/CardRecommendation/CardRecommendation'

export default {
  components: {
    CardRecommendation
  },
  props: {
    coaches: {
      type: Array,
      default: () => []
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
