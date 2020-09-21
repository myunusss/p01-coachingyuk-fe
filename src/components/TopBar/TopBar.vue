<template>
  <header>
    <b-card class="w-100">
      <b-container>
        <b-row>
          <b-col
            cols="5"
            class="d-flex justify-content-center align-items-center"
          >
            <div
              v-for="(item, i) of menus"
              class="mx-2 pointer"
              :class="[ item.isActive ? 'menu-bottom-accent' : 'menu-hover-accent']"
              :key="i"
              @click="onClickMenu(item)"
            >
              {{ item.name.toUpperCase() }}
            </div>
          </b-col>
          <b-col cols="2" />
          <b-col
            cols="5"
            class="d-flex end-col"
          >
            <b-button
              variant="transparent"
              class="bell-hover-accent mr-2"
            >
              <fa-icon icon="bell" />
            </b-button>
            <b-img
              rounded="circle"
              width="50"
              height="50"
              class="ml-2"
              :src="UserDefaultAvatar"
            />
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </header>
</template>

<script>
import UserDefaultAvatar from '@/assets/undraw_img-avatar.png'

export default {
  data() {
    return {
      UserDefaultAvatar,
      isMenuActive: 1,
      menus: [
        { id: 1, name: 'dashboard', route: '/dashboard', isActive: true },
        { id: 2, name: 'activity', route: '/activity', isActive: false },
        { id: 3, name: 'find a coach', route: '/find-a-coach', isActive: false }
      ]
    }
  },
  mounted() {
    this.setDefaultMenu()
  },
  methods: {
    onClickMenu(val) {
      val.isActive = !val.isActive
      this.menus.map(v => {
        if (v.id === this.isMenuActive) {
          v.isActive = !v.isActive
        }
      })
      this.isMenuActive = val.id
      this.$router.push(val.route)
    },
    setDefaultMenu() {
      const defaultMenu = this.menus.find(v => v.id === this.isMenuActive)
      this.$router.push(defaultMenu.route)
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

  .end-col {
    justify-content: flex-end;
  }

  .menu-bottom-accent {
    color: var(--md-light-blue-600);
    letter-spacing: 2px;
  }

  .menu-hover-accent {
    color: var(--md-grey-500);
    letter-spacing: 2px;

    &:hover {
      color: var(--md-grey-700);
    }
  }

  .bell-hover-accent {
    color: var(--md-grey-300);

    &:hover {
      background-color: var(--md-grey-300);
      color: var(--md-light-blue-300);
    }
  }
</style>
