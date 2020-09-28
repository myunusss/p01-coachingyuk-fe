<template>
  <div>
    <b-row
      v-show="isUserAskQuestion"
      class="py-4"
    >
      <b-col>
        <b-form-group label="Ask a question">
          <b-form-input
            v-model="question"
            placeholder="What is your question?"
            class="p-3"
          />
        </b-form-group>
        <b-row>
          <b-col>
            <b-button
              variant="primary"
              class="mr-2"
              :disabled="!question"
              @click="$emit('onQuestionAsked', question)"
            >
              Submit
            </b-button>
            <b-button
              variant="danger"
              class="ml-2"
              @click="isUserAskQuestion = false"
            >
              Cancel
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    isUserAskQuestion: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      question: ''
    }
  }
};
</script>
