<template>
  <div class="my-3 pb-2 d-flex flex-column align-items-center">
    <b-card
      overlay
      img-height="215"
      :img-src="topic.background
        ? `${bgUrl}${topic.background}`
        : HeaderDefaultTopic"
    >
      <b-row class="h-100">
        <b-col class="d-flex flex-row align-self-end">
          <fa-icon
            icon="check-circle"
            color="#ffffff"
            class="mr-2 align-self-center"
          />
          <p class="m-0 text-light align-self-center">
            {{ topic.total_check_ins }}
          </p>
        </b-col>
      </b-row>
    </b-card>
    <p
      class="m-0 mt-2 text-primary align-self-start pointer"
      @click="$router.push({ name: 'Topic', params: {
        topic
      }})"
    >
      {{ topic.name }}
    </p>
  </div>
</template>

<script>
import HeaderDefaultTopic from '@/assets/img-dummy-default-category.jpg'

export default {
  props: {
    topic: {
      type: Object,
      default: () => ({
        id: null,
        background: null,
        name: null
      })
    }
  },
  data() {
    return {
      HeaderDefaultTopic,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  }
};
</script>
