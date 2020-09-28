<template>
  <div>
    <b-row class="py-3">
      <b-col class="d-flex flex-row align-items-center">
        <b-img
          rounded="circle"
          width="50"
          height="50"
          class="mr-3"
          :src="answer.user ? answer.user.avatar : UserDefaultAvatar"
        />
        <h4>{{ answer.user ? answer.user.name : '' }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{ answer.content }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex flex-row align-items-center">
        <fa-icon
          class="mr-2 fa-flip-horizontal"
          color="#039be5"
          :icon="['far', 'thumbs-up']"
        />
        &bull;
      </b-col>
      <b-col class="d-flex flex-row align-items-center">
        <fa-icon
          class="mr-2 fa-flip-horizontal"
          color="#039be5"
          :icon="['far', 'comment']"
        />
        {{ answer.replies.length }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  props: {
    answer: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      UserDefaultAvatar
    }
  }
}
</script>
