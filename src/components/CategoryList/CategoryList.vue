<template>
  <div>
    <b-card class="px-3">
      <b-row>
        <b-col class="font-weight-bold justify-content-center text-center">
          <p>What do you want to do?</p>
        </b-col>
      </b-row>
      <b-row v-if="categories.length">
        <b-card
          overlay
          v-for="(items, i) of categories"
          class="w-100 p-3 mb-3 pointer card-img-height"
          :key="i"
          :img-src="items.background
            ? `${bgUrl}${items.background}`
            : CategoryDefaultImage"
          @click="$emit('onCategoryPicked', items)"
        >
          <b-card-body class="h-100 d-flex justify-content-center">
            <h3 class="font-weight-bold text-white align-self-center">
              {{ items.name }}
            </h3>
          </b-card-body>
        </b-card>
      </b-row>
      <b-row v-else>
        <b-col class="d-flex justify-content-center">
          <h5 class="text-style-italic">
            No Topic To Add
          </h5>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import CategoryDefaultImage from '@/assets/img-dummy-default-category.jpg'

export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      CategoryDefaultImage,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  }
};
</script>

<style scoped lang="scss">
  .text-style-italic {
    color: var(--md-grey-500);
    font-style: italic;
  }

  .card-img-height {
    border: none;
    img {
      height: 150px;
    }
  }
</style>
