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
    this.saveCredential()
  },
  methods: {
    saveCredential() {
      const encodedUserData = /data=(.*)/.exec(window.location.search)
      const userData = JSON.parse(decodeURIComponent(encodedUserData[1]))
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', userData.token)

      const encryptedUser = btoa(JSON.stringify(userData))
      return window.location.replace(`http://event.coachingyuk.com?data=${encryptedUser}`)
    }
  }
};
</script>

<style scoped>

</style>
