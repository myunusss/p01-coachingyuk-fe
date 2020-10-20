<template>
  <div>
    <b-card>
      <b-row class="pb-3 bottom-divider-grey">
        <b-col>
          <h3>Individual Coaching Sessions</h3>
          <p>Add a price to allow clients to book phone, video or in-person sessions.</p>
          <b-row>
            <b-col>
              <b-input-group
                prepend="$"
                append="per session"
                class="w-50"
              >
                <b-form-input
                  type="number"
                  step="any"
                  v-model="session.price"
                />
              </b-input-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h5>Description</h5>
          <p>This is the marketing message that clients will see on your coaching profile.</p>
          <b-form-group>
            <b-form-textarea
              placeholder="This is where you add a description to your package description"
              v-model="session.description"
              class="textarea-min-width"
            />
          </b-form-group>
          <p class="text-secondary">
            500 characters max
          </p>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h5>Confirmation Message</h5>
          <p>This is the message a client will see when they request sessions from you. You should tell clients how to get in touch with you to schedule the session, and what information you need to start coaching them.</p>
          <b-form-group>
            <b-form-textarea
              placeholder="This is where you add a description to your package confirmation"
              v-model="session.confirmation"
              class="textarea-min-width"
            />
          </b-form-group>
          <p class="text-secondary">
            1000 characters max
          </p>
        </b-col>
      </b-row>
      <b-row class="py-3">
        <b-col>
          <b-button variant="primary">
            Save
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    session: {
      type: Object,
      default: () => ({
        price: 0.00,
        description: '',
        confirmation: ''
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .bottom-divider-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .textarea-min-width {
    min-height: 150px;
  }
</style>
