<template>
  <div>
    <b-card class="px-3 pointer">
      <b-row class="mb-3">
        <fa-icon
          icon="chevron-left"
          class="align-self-center pointer"
          color="#039be5"
          @click="$emit('onClose')"
        />
        <h4 class="mx-auto">
          {{ categoryTitle }}
        </h4>
      </b-row>
      <div v-if="topics.length">
        <b-row
          v-for="(items, i) of topics"
          class="p-3 border-bottom-grey"
          :key="i"
          @click="$router.push({ name: 'Topic', params: { topic: items } })"
        >
          <b-col>
            <h2>{{ items.name }}</h2>
            <b-row>
              <b-col class="d-flex flex-row">
                <p class="m-0 mr-2 text-primary">
                  {{ numeral(items.total_users).format('0a') }} joined
                </p>
                &bull;
                <p class="m-0 mx-2 text-primary">
                  {{ numeral(items.total_answers).format('0a') }} answers
                </p>
                &bull;
                <p class="m-0 ml-2 text-primary">
                  {{ numeral(items.total_coach_users).format('0a') }} coaches
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div v-else>
        <b-row>
          <b-col class="d-flex justify-content-center">
            <h5 class="text-style-italic">
              No Topic To Add
            </h5>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import numeral from 'numeral'

export default {
  props: {
    categoryTitle: {
      type: String,
      default: () => ''
    },
    topics: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    numeral
  }
};
</script>

<style scoped lang="scss">
  .text-style-italic {
    color: var(--md-grey-500);
    font-style: italic;
  }

  .border-bottom-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
