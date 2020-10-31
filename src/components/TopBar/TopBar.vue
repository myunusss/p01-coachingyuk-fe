<template>
  <header>
    <b-card class="w-100">
      <b-container class="p-0">
        <b-row>
          <b-col
            cols="6"
            md="5"
            class="d-flex p-0 flex-column flex-md-row justify-content-center align-items-md-center"
          >
            <div
              v-for="(item, i) of menus"
              class="mx-2 pointer"
              :class="[ isMenuActive === item.id ? 'menu-bottom-accent' : 'menu-hover-accent']"
              :key="i"
              @click="onClickMenu(item)"
            >
              {{ item.name.toUpperCase() }}
            </div>
          </b-col>
          <b-col
            cols="1"
            md="2"
          />
          <b-col
            cols="5"
            md="5"
            class="d-flex p-0 end-col"
          >
            <div class="d-flex flex-row p-2 setting-hover-accent">
              <b-avatar
                v-if="user.avatar"
                :src="`${bgUrl}${user.avatar}`"
              />
              <b-avatar
                v-else
                :text="`${getNameInitial(user.first_name, user.last_name)}`"
              />
              <b-dropdown variant="transparent">
                <b-dropdown-item
                  v-if="user.role.code !== 'coach'"
                  @click="$router.push('/become-a-coach')"
                >
                  Become a Coach
                </b-dropdown-item>
                <b-dropdown-item
                  v-if="user.role.code !== 'coach'"
                  @click="$router.push('/profile/edit')"
                >
                  Setting
                </b-dropdown-item>
                <b-dropdown-item
                  v-if="user.role.code !== 'coach'"
                  @click="$router.push('/help')"
                >
                  Help
                </b-dropdown-item>
                <b-dropdown-item
                  v-else
                  @click="$router.push('/coach-page/setting')"
                >
                  Coach Setting
                </b-dropdown-item>
                <b-dropdown-item @click="$router.push('/profile')">
                  Profile
                </b-dropdown-item>
                <b-dropdown-item @click="$router.push('/update-password')">
                  Update Password
                </b-dropdown-item>
                <b-dropdown-item @click="logout">
                  Logout
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </header>
</template>

<script>
import { getNameInitial } from '@/utils/avatarHelper'

export default {
  data() {
    return {
      isMenuActive: 1,
      user: JSON.parse(localStorage.getItem('user')),
      bgUrl: `${process.env.VUE_APP_BACKGROUND_URL}/`
    }
  },
  computed: {
    menus() {
      return [
        { id: 1, name: 'dashboard', route: '/dashboard' },
        { id: 2, name: 'activity', route: '/activity' },
        ( this.user.role.code !== 'coach'
          ? { id: 3, name: 'find a coach', route: '/find-a-coach' }
          : { id: 3, name: 'coaching', route: '/coach-chat' }
        )
      ]
    }
  },
  mounted() {
    this.setDefaultMenu()
  },
  methods: {
    getNameInitial,
    onClickMenu(val) {
      this.isMenuActive = val.id
      this.$router.push(val.route)
    },
    setDefaultMenu() {
      if (this.$route.path !== '/apply-coach') {
        const defaultMenu = this.menus.find(v => v.id === this.isMenuActive)
        this.$router.push(defaultMenu.route)
      }
    },
    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.$router.replace('/landing')
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

  .setting-hover-accent {
    border-radius: 15px;

    &:hover {
      background-color: var(--md-grey-300);
    }
  }
</style>
