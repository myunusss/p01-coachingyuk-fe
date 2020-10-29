<template>
  <div class="main-padding">
    <b-container class="d-flex justify-content-center align-content-center">
      <b-card class="w-res-50">
        <b-row>
          <b-col>
            <h3>Question? We're happy to help</h3>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <b-form-group>
              <b-form-radio-group
                v-model="type"
                :options="options"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col>
            <b-form-textarea
              v-model="content"
              class="textarea-content-height"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="font-weight-bold">
              Reply to me at this email address
            </p>
            <b-form-input v-model="email" />
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <b-button
              variant="primary"
              class="w-100"
              @click="postFeedback"
            >
              Send
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <small class="font-italic">*Or you can email directly to support@coachingyuk.com</small>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      type: 'general_feedback',
      content: '',
      email: JSON.parse(localStorage.getItem('user')).email,
      options: [
        { text: 'Bug Report', value: 'bug_report' },
        { text: 'Billing Problem', value: 'billing_problem' },
        { text: 'General Feedback', value: 'general_feedback' }
      ]
    }
  },
  methods: {
    async postFeedback() {
      try {
        await api.feedback.post({
          type: this.type,
          content: this.content,
          email: this.email
        })
        this.$bvToast.toast('Thank you for your feedback', {
          title: 'Feedback Sent',
          variant: 'success'
        })
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Feedback Not Sent',
          variant: 'danger'
        })
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .textarea-content-height {
    min-height: 150px;
  }
</style>
