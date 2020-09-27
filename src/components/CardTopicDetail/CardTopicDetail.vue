<template>
  <div>
    <b-card class="p-3">
      <b-row class="d-flex flex-row pb-3 border-bottom-grey">
        <h3 class="align-self-center mx-auto">
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
            color="#9e9e9e"
            class="align-self-center"
          />
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
        <b-col cols="8" />
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
          class="d-flex justify-content-center"
        >
          <p class="text-secondary align-self-center">
            Today
          </p>
        </b-col>
        <b-col cols="8" />
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
export default {
  props: {
    topicDetail: {
      type: Object,
      default: () => ({
        name: ''
      })
    }
  }
};
</script>

<style scoped lang="scss">
  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
