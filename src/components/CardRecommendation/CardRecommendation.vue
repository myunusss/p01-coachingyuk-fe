<template>
  <div>
    <b-card-group>
      <b-card
        img-top
        :title="coach.name"
        :img-src="coach.avatar"
      >
        <template v-slot:footer>
          <b-row class="px-3">
            <b-col class="d-flex justify-content-center">
              <p class="mb-0 mr-2 align-self-center text-color-light-blue">
                {{ coach.testimonies }}
              </p>
              <p class="mb-0 align-self-center">
                Testimonies
              </p>
            </b-col>
            <b-col class="d-flex flex-row justify-content-end">
              <fa-icon
                icon="comments"
                size="2x"
                color="#1e88e5"
                class="mr-2"
              />
              <fa-icon
                icon="phone"
                size="2x"
                color="#43a047"
                class="ml-2"
              />
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    coach: {
      type: Object,
      default: () => ({
        name: '',
        avatar: '',
        testimonies: 0
      })
    }
  }
};
</script>

<style scoped lang="scss">
  .text-color-light-blue {
    color: #2196F3;
  }
</style>
