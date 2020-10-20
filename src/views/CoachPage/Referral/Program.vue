<template>
  <div>
    <b-card>
      <b-row class="pb-3 bottom-divider-grey">
        <b-col>
          <h3>Your Referral Code</h3>
          <p>The link below contains your referral code so that we can give you credit as the source of a new client. You keep all revenue when your own client uses your referral code or personal promo code (minus a processing fee of 5% + $0.30).</p>
          <h6>XXX-XXX-XXX</h6>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h3>How the Referral Program Works</h3>
          <p>
            You can do good for another coach and get paid, just by referring them to a friend. In order to get credit for tracking, you need to use something called a referral code.

            Your code is 9P6Jn. To use it, attach the code as a parameter to any Coach.me URL, so coach.me becomes coach.me?ref=9P6Jn

            Sound complicated? Use the tool below or use the links provided in the /coach_promotions section.
          </p>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h3>How much can you make ?</h3>
          <p>
            Generally you can expect to make between $40 and $500 for a referral. A good habit coach will keep a client for 3 months. Your share of that would be $40. For coaches with custom packages, you'll make 25% of what the client spends, maxing out at $500.

            All referral bonuses are based on a percentage of what the client spends. You can read the full details on how we calculate this on the Coach's payment page.
          </p>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col>
          <h3>Referral Link Builder</h3>
          <p>You can also earn a referral bonus for promoting any Coach.me coach or product. If someone makes a purchase having followed your link, you will be awarded a referral bonus (full details). The tool below will add your referral code to any Coach.me link.</p>
          <b-form-input placeholder="http://www.coachingyuk.com/" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  .bottom-divider-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
