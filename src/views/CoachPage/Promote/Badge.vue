<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <h3>Add Badge to Your Website or Blog</h3>
          <div class="d-flex flex-row my-3 p-3 w-50 justify-content-center bg-badge">
            <p class="m-0 mr-3 text-white align-self-center">
              I'M A COACH ON
            </p>
            <b-img
              fluid
              width="95"
              class="align-self-end"
              :src="require('../../../assets/logo_coaching_yuk.png')"
            />
          </div>
          <p>Copy and paste this code to your website's HTML. The link contains your referral code.</p>
          <b-form-textarea
            v-model="htmlCode"
            class="textarea-min-width"
          />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlCode: `<div class="d-flex flex-row mt-3 p-3 w-50 justify-content-center bg-badge"><p class="m-0 mr-3 text-white align-self-center">I'M A COACH ON</p><b-img fluid width="95" class="align-self-end" :src="require('../../../assets/logo_coaching_yuk.png')" /></div>`
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-badge {
    background-image: linear-gradient(to left, var(--md-blue-800), var(--md-deep-purple-600));
    border-radius: 15px;
  }

  .textarea-min-width {
    min-height: 100px;
  }
</style>
