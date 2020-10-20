<template>
  <div>
    <b-card>
      <b-row class="pb-3 bottom-divider-grey">
        <b-col>
          <h3>One Week Habit Trial Promo Code</h3>
          <p>This code is for a one week trial for any of YOUR HABIT coaching packages. Anyone who signs up with this code will automatically be marked as a referral by you.</p>
          <h2>{{ promoCode.first }}</h2>
          <p class="text-secondary">
            * Does not work with phone calls, custom packages or plans
          </p>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col>
          <h3>Free Forever Habit Coaching Promo Code</h3>
          <p>This code gives a person free access to one of YOUR HABIT coaching packages. Coaches most often use this code to give to friends while going through habit coaching certification:</p>
          <h2>{{ promoCode.second }}</h2>
          <p class="text-secondary">
            * Does not work with phone calls, custom packages or plans
          </p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    promoCode: {
      type: Object,
      default: () => ({
        first: 'XXX-XXX-XXX',
        second: 'XXX-XXX-XXX'
      })
    }
  }
};
</script>

<style scoped lang="scss">
  .bottom-divider-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
