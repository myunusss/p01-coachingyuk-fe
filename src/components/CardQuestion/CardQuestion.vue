<template>
  <div>
    <b-row class="mb-2">
      <b-col>
        <h4>{{ items.question }}</h4>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col
        cols="2"
        class="d-flex justify-content-center"
      >
        <b-img
          :src="items.avatar || UserDefaultAvatar"
          width="50"
          height="50"
        />
      </b-col>
      <b-col
        cols="10"
        class="d-flex justify-content-start"
      >
        <h6 class="font-weight-bold align-self-center">
          {{ items.name }}
        </h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h6 class="text-primary">
          {{ items.answers.length }} answer
        </h6>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  props: {
    items: {
      type: Object,
      default: () => ({
        question: '',
        avatar: null,
        name: '',
        answers: []
      })
    }
  },
  data() {
    return {
      UserDefaultAvatar
    }
  }
};
</script>

<style scoped>

</style>
