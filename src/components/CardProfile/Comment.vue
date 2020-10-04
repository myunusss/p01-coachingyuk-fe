<template>
  <div>
    <b-row class="border-top-blue">
      <b-col class="mt-3">
        <v-observer
          v-slot="{ valid }"
          tag="div"
          ref="comment"
        >
          <form @submit.prevent="postComment">
            <v-provider
              v-slot="{ errors }"
              name="comment"
              rules="required"
            >
              <b-form-group :invalid-feedback="errors[0]">
                <b-form-textarea
                  v-model="comment"
                  placeholder="Say something nice..."
                  :state="!errors.length && null"
                />
              </b-form-group>
            </v-provider>
            <div class="d-flex flex-row">
              <b-button
                type="submit"
                variant="primary"
                class="mr-2"
                :disabled="!valid"
              >
                Post
              </b-button>
              <b-button
                variant="outline-dark"
                class="ml-2"
                @click="$emit('onCancel')"
              >
                Cancel
              </b-button>
            </div>
          </form>
        </v-observer>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    postComment() {
      this.$emit('onSubmit', this.comment)
    }
  }
};
</script>

<style scoped lang="scss">
  .border-top-blue {
    border-top: solid 1px #039be5;
  }
</style>
