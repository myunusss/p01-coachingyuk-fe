<template>
  <b-container class="main-padding">
    <b-card>
      <div class="py-3 border-bottom-grey">
        <h3>Become A Coach</h3>
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
        <p class="mt-5 text-primary">
          Have a promo code ?
        </p>
      </div>
      <div class="py-3">
        <h5>Terms And Conditions</h5>
        <p>We want all coaches and clients to have a great experience. To that end, we want to highlight some expectations for all coaches. Please confirm you understand the following:</p>
        <form @submit.prevent="subscribe">
          <b-form-group>
            <b-form-checkbox v-model="states.termService">
              You will abide by CoachingYuk.com's Terms of Service.
            </b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox v-model="states.guideline">
              Respect the guidelines and feedback of our moderators whenever you're participating in the CoachingYuk.com community.
            </b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox v-model="states.paymentService">
              If you use our payment processing services for your own clients, we charge a 5% payment processing fee (which includes credit card processing fees) per client charge.
            </b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox v-model="states.affiliate">
              If you participate in our affiliate program, you share up to 50% of client fees with referrers.
            </b-form-checkbox>
          </b-form-group>
          <div class="my-4 border-bottom-grey" />
          <b-button
            type="submit"
            variant="primary"
            class="align-self-end"
            :disabled="(!states.termService || !states.guideline || !states.paymentService || !states.affiliate)"
          >
            Subscribe
          </b-button>
        </form>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import api from '@/api'

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
      ],
      states: {
        termService: false,
        guideline: false,
        paymentService: false,
        affiliate: false
      }
    }
  },
  methods: {
    async subscribe() {
      try {
        const { data } = await api.user.becomeCoach()
        localStorage.setItem('user', JSON.stringify(data.data))
        this.$bvToast.toast(data.meta.message, {
          title: 'Become a Coach Successful',
          variant: 'success'
        })
      } catch ({ response }) {
        this.$bvToast.toast(response.data.meta.message, {
          title: 'Failed To Become a Coach',
          variant: 'danger'
        })
      }
    },
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
</style>
