<template>
  <div>
    <b-row class="py-4">
      <b-col>
        <b-form-group>
          <b-form-textarea
            v-model="answer"
            placeholder="Add an answer"
            class="p-3"
          />
        </b-form-group>
        <b-row>
          <b-col>
            <b-button
              variant="primary"
              class="mr-2"
              :disabled="!answer"
              @click="$emit('onAnswerSubmitted', answer)"
            >
              Submit
            </b-button>
            <b-button
              variant="danger"
              class="ml-2"
              @click="$emit('onAnswerClosed')"
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
  data() {
    return {
      answer: ''
    }
  }
};
</script>
