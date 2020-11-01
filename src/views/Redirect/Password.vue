<template>
  <div>
    <b-container class="vh-100 d-flex flex-column justify-content-center align-content-center">
      <b-row>
        <b-col class="p-3 d-flex justify-content-center">
          <h3 class="align-self-center">
            Processing Your Data, Please Wait...
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-progress
            striped
            animated
            value="100"
            variant="info"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.savePasswordToken()
  },

  methods: {
    savePasswordToken() {
      const token = /token=(.*)/.exec(window.location.search)
      localStorage.setItem('password-token', token[1])
      this.$router.push('/reset-password')
    }
  }
}
</script>

<style scoped>

</style>
