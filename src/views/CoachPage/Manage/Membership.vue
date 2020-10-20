<template>
  <div>
    <b-card>
      <div class="py-3 border-bottom-grey">
        <h3>Change Membership Level or Billing Interval</h3>
        <p>Your membership started billing on.</p>
        <p>Go to User Settings to update your payment method.</p>
      </div>
      <div class="py-3 border-bottom-grey">
        <b-row>
          <b-col class="border-right-grey">
            <h4>Community Level</h4>
            <p class="m-0 font-weight-bold">
              Includes
            </p>
            <ul>
              <li>Coaching Packages: 1</li>
              <li>Marketing Support & Training</li>
            </ul>
            <b-row class="mt-5">
              <b-col
                v-for="(item, i) of communityBillings"
                class="pointer"
                :key="i"
                @click="setActiveCard(item.key)"
              >
                <h6 class="text-center font-weight-bold">
                  {{ item.title }}
                </h6>
                <div
                  class="p-3 d-flex flex-column justify-content-center align-items-center"
                  :class="[isCardBillingActive === item.key ? 'border-card-active' : 'border-card-inactive']"
                >
                  <h3>{{ item.price }}</h3>
                  <h5 class="text-shadow">
                    {{ item.billing }}
                  </h5>
                </div>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col />
              <b-col class="d-flex flex-row justify-content-center">
                <b-badge
                  variant="success"
                  class="px-3 align-self-center"
                >
                  SAVINGS $10
                </b-badge>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <h4>Pro Level</h4>
            <p class="m-0 font-weight-bold">
              Includes
            </p>
            <ul>
              <li>Coaching Packages: Unlimited</li>
              <li>Everything from Community Level</li>
            </ul>
            <b-row class="mt-5">
              <b-col
                v-for="(item, i) of proBillings"
                class="pointer"
                :key="i"
                @click="setActiveCard(item.key)"
              >
                <h6 class="text-center font-weight-bold">
                  {{ item.title }}
                </h6>
                <div
                  class="p-3 d-flex flex-column justify-content-center align-items-center"
                  :class="[isCardBillingActive === item.key ? 'border-card-active' : 'border-card-inactive']"
                >
                  <h3>{{ item.price }}</h3>
                  <h5 class="text-shadow">
                    {{ item.billing }}
                  </h5>
                </div>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col />
              <b-col class="d-flex flex-row justify-content-center">
                <b-badge
                  variant="success"
                  class="px-3 align-self-center"
                >
                  SAVINGS $90
                </b-badge>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div class="my-3 p-2 bg-orange">
        <b-row>
          <b-col>
            <p class="m-0">
              The remaining amount on your current subscription will be credited to your new subscription.
            </p>
            <b-row>
              <b-col class="d-flex flex-row">
                <b-badge
                  variant="warning"
                  class="m-0"
                >
                  Warning
                </b-badge>
                <p class="m-0">
                  If you downgrade to the community membership, your current coaching packages will be hidden.
                </p>
              </b-col>
            </b-row>
            <p class="m-0">
              You can then go to Coaching Packages to select the package you want to show on your coach profile.
            </p>
          </b-col>
        </b-row>
      </div>
      <b-button variant="primary">
        Change Subscription
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCardBillingActive: 4,
      communityBillings: [
        { key: 1, title: 'BILLED MONTHLY', price: '$4.99', billing: 'PER MONTH' },
        { key: 2, title: 'BILLED YEARLY', price: '$49.99', billing: 'PER YEAR' }
      ],
      proBillings: [
        { key: 3, title: 'BILLED MONTHLY', price: '$19.99', billing: 'PER MONTH' },
        { key: 4, title: 'BILLED YEARLY', price: '$149.99', billing: 'PER YEAR' }
      ]
    }
  },
  methods: {
    setActiveCard(key) {
      this.isCardBillingActive = key
    }
  }
};
</script>

<style scoped lang="scss">
.border-bottom-grey {
  border-bottom: solid 1px var(--md-grey-300);
}

.border-right-grey {
  border-right: solid 1px var(--md-grey-300);
}

.border-card-inactive {
  border-radius: 10px;
  border: solid 2px var(--md-grey-300);
}

.border-card-active {
  border-radius: 10px;
  border: solid 2px var(--md-blue-500);
}

.text-shadow {
  color: var(--md-grey-300);
}

.bg-orange {
  border-radius: 5px;
  background-color: var(--md-orange-100);
}
</style>
