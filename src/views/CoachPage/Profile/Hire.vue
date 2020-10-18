<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <h3>Available For Hire</h3>
          <b-form-checkbox v-model="isAvailable">
            <span class="text-success">Available For Hire</span>
          </b-form-checkbox>
          <p>
            <span class="text-danger">Uncheck to stop accepting new clients. </span>You can reactivate any time.
          </p>
        </b-col>
      </b-row>
      <template v-slot:footer>
        <b-row>
          <b-col>
            <b-button variant="primary">
              Save
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    isAvailable: {
      type: Boolean,
      default: () => true
    }
  }
};
</script>

<style scoped>

</style>
