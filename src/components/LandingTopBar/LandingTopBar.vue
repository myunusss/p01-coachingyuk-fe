<template>
  <header class="bg-accent">
    <b-container class="p-3">
      <b-row>
        <b-col>
          <b-img
            height="55"
            class="pointer"
            :src="Logo"
            @click="onIconClicked"
          />
        </b-col>
        <b-col
          v-if="isButtonShown"
          class="d-flex flex-column justify-content-center"
        >
          <b-row class="justify-content-end">
            <b-button
              v-show="$route.path === '/event'"
              variant="transparent font-weight-bold btn-transparent-white"
              @click="$router.push('/become-a-coach')"
            >
              BECOME A COACH
            </b-button>
            <b-button
              v-show="$route.path !== '/event'"
              variant="transparent font-weight-bold btn-transparent-white"
              @click="$router.push('/login')"
            >
              LOG IN
            </b-button>
            <b-button
              variant="transparent px-4 font-weight-bold align-self-center btn-outline-white"
              @click="$router.push('/sign-up')"
            >
              SIGN UP
            </b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import Logo from '@/assets/logo_coaching_yuk.png'

export default {
  props: {
    isButtonShown: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      Logo
    }
  },
  methods: {
    onIconClicked() {
      this.$route.path === '/landing'
        ? window.location.reload()
        : this.$router.push('/landing')
    }
  }
};
</script>

<style scoped lang="scss">
  header {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 50;
  }

  .bg-accent {
    background-color: var(--md-deep-purple-800);
  }

  .btn-transparent-white {
    color: var(--md-grey-400);

    &:hover {
      color: var(--md-white);
    }
  }

  .btn-outline-white {
    border: solid 2px var(--md-white);
    border-radius: 25px;
    color: var(--md-white);

    &:hover {
      background-color: var(--md-white);
      color: var(--md-deep-purple-600);
    }
  }
</style>
