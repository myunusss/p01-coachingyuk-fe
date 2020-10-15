<template>
  <div class="vh-100 main-padding bg-white">
    <b-container>
      <b-row>
        <b-col cols="6">
          <h2>Choose Your Coaching Plan</h2>
          <h5 class="my-3">
            All plans include unlimited in-app messaging with your coach and a FREE 3-day trial
          </h5>
          <b-row class="mt-5">
            <b-col
              v-for="(item, i) of plans"
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
                <h3>{{ item.price }}<span class="text-shadow">/ WEEK</span></h3>
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
                SAVINGS $21
              </b-badge>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-card>
            <b-card-body>
              <b-row>
                <b-col>
                  <h4>Order Summary</h4>
                  <b-row class="py-3 divider">
                    <b-col
                      cols="4"
                      class="d-flex justify-content-center align-items-center"
                    >
                      <b-avatar
                        size="85px"
                        :src="coach.avatar ? `${bgUrl}${coach.avatar}` : UserDefaultAvatar"
                      />
                    </b-col>
                    <b-col cols="8">
                      <h3>Coaching With</h3>
                      <h3>{{ `${coach.first_name} ${coach.last_name}` }}</h3>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col class="px-5">
                  <b-button
                    variant="primary"
                    class="w-100 border-button"
                  >
                    CONTINUE
                  </b-button>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  props: {
    coach: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      UserDefaultAvatar,
      isCardBillingActive: 2,
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`,
      plans: [
        { key: 1, title: 'BILLED WEEKLY', price: '$25'},
        { key: 2, title: 'BILLED MONTHLY', price: '$20'}
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
  .bg-white {
    background-color: var(--md-white);
  }

  .divider {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .border-card-inactive {
    border: solid 2px var(--md-grey-500);
    border-radius: 10px;
  }

  .border-card-active {
    border: solid 2px var(--md-blue-500);
    border-radius: 10px;
  }

  .text-shadow {
    color: var(--md-grey-400);
    font-size: 10px;
  }

  .border-button {
    border-radius: 25px;
  }
</style>
