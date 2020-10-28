<template>
  <div class="p-5 bg-light-blue">
    <b-container>
      <div class="d-flex flex-column justify-content-center">
        <div class="w-100 mb-5 align-self-center">
          <h2 class="text-white text-center text-header">
            Let us help you find the perfect coach.
          </h2>
          <h4 class="text-center text-sub-header">
            Habit Coaches Personalized daily text messages starting at $87 per month
          </h4>
        </div>
        <b-row class="w-75 d-flex align-self-center justify-content-center">
          <b-col
            md="3"
            v-for="(item, i) of topics"
            class="d-flex mb-2 justify-content-center"
            :key="i"
          >
            <b-badge class="w-100 p-3 pointer text-truncate badge-transparent">
              {{ item.name }}
            </b-badge>
          </b-col>
        </b-row>
        <div class="w-100 my-3 align-self-center">
          <h2 class="text-center text-header text-sub-header">
            Personal Coaches
          </h2>
          <h4 class="text-center text-sub-header">
            Traditional coaching delivered over phone or video
          </h4>
        </div>
        <b-row class="w-75 mb-3 d-flex align-self-center justify-content-center">
          <b-col
            md="3"
            v-for="(item, i) of topics"
            class="d-flex mb-2 justify-content-center"
            :key="i"
          >
            <b-badge class="w-100 p-3 pointer text-truncate badge-transparent">
              {{ item.name }}
            </b-badge>
          </b-col>
        </b-row>
      </div>
      <div class="d-flex mt-3 justify-content-center">
        <b-input-group class="w-res-50 align-self-center input-bg-white">
          <b-input-group-prepend>
            <b-button variant="transparent">
              <fa-icon
                icon="search"
                color="#BDBDBD"
              />
            </b-button>
          </b-input-group-prepend>
          <b-input placeholder="Search..." />
          <b-input-group-append>
            <b-button
              variant="primary"
              class="button-border"
            >
              SEARCH
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    topics: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
  input {
    border: none;
    outline: none;
  }

  .button-border {
    border-radius: 20px;
  }

  .bg-light-blue {
    background: radial-gradient(#4fc3f7, #2196F3);
  }

  .text-header {
    letter-spacing: 2px;
  }

  .text-sub-header {
    color: rgba(255, 255, 255, 0.4);
  }

  .badge-transparent {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);

    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }

  .input-bg-white {
    border-radius: 20px;
    background-color: var(--md-white);
  }
</style>
