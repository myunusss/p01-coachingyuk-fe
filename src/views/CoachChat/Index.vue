<template>
  <div class="main-padding">
    <b-container>
      <b-row>
        <!--
  _    ___ ___ _____    ___   _   ___ ___
 | |  | __| __|_   _|  / __| /_\ | _ \   \
 | |__| _|| _|  | |   | (__ / _ \|   / |) |
 |____|___|_|   |_|    \___/_/ \_\_|_\___/
        -->
        <b-col md="6">
          <b-card>
            <b-row class="divider">
              <b-col class="p-3 d-flex justify-content-center align-items-center">
                <h4>Coaching</h4>
              </b-col>
            </b-row>
            <b-row class="p-3 divider">
              <b-col
                v-for="(item, i) of switches"
                class="p-2 d-flex justify-content-center align-items-center pointer"
                :key="i"
                :class="[ activeSwitch === item.id ? 'switch-active' : 'switch-inactive' ]"
                @click="onSwitchChange(item)"
              >
                <p class="m-0">
                  {{ item.title }}
                </p>
              </b-col>
            </b-row>
            <!--
  ___  ___  ___  ___ ___   _____      ___  _ ___
 |   \| _ \/ _ \| _ \   \ / _ \ \    / / \| / __|
 | |) |   / (_) |  _/ |) | (_) \ \/\/ /| .` \__ \
 |___/|_|_\\___/|_| |___/ \___/ \_/\_/ |_|\_|___/
            -->
            <b-row class="py-3">
              <b-col>
                <b-dropdown
                  variant="outline-secondary"
                  class="align-self-start"
                  :text="dropdownSorts[activeSort-1].title"
                >
                  <b-dropdown-item disabled>
                    Filter by
                  </b-dropdown-item>
                  <b-dropdown-item
                    v-for="(item, i) of dropdownFilters"
                    :key="i"
                    :active="activeFilter === item.id"
                    @click="onDropdownFilterChange(item)"
                  >
                    {{ item.title }}
                  </b-dropdown-item>
                  <b-dropdown-divider />
                  <b-dropdown-item disabled>
                    Sort by
                  </b-dropdown-item>
                  <b-dropdown-item
                    v-for="(item, i) of dropdownSorts"
                    :key="i"
                    :active="activeSort === item.id"
                    @click="onDropdownSortChange(item)"
                  >
                    {{ item.title }}
                  </b-dropdown-item>
                </b-dropdown>
              </b-col>
              <b-col class="d-flex flex-row justify-content-end">
                <b-dropdown
                  variant="outline-secondary"
                  text="Tools"
                >
                  <b-dropdown-item>Pause Coaching</b-dropdown-item>
                  <b-dropdown-item @click="$router.push('/coach-page/setting')">
                    Coach Setting
                  </b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
            <!--
   ___ ___   _   ___ _  _
  / __/ _ \ /_\ / __| || |
 | (_| (_) / _ \ (__| __ |
  \___\___/_/ \_\___|_||_|
            -->
            <b-row
              v-if="activeSwitch === 2"
              class="p-3"
            >
              <b-col cols="2">
                <b-avatar :src="DefaultAvatarIcon" />
              </b-col>
              <b-col
                cols="8"
                class="d-flex"
              >
                <h6 class="m-0 align-self-center">
                  Test Developer
                </h6>
              </b-col>
              <b-col
                cols="2"
                class="d-flex"
              >
                <fa-icon
                  icon="chevron-right"
                  color="#039be5"
                  class="align-self-center"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col md="6" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DefaultAvatarIcon from '@/assets/undraw_img-avatar.png'

export default {
  data() {
    return {
      DefaultAvatarIcon,
      activeSwitch: 1,
      activeFilter: 1,
      activeSort: 1,
      switches: [
        { id: 1, title: 'Clients' },
        { id: 2, title: 'Coaches' }
      ],
      dropdownFilters: [
        { id: 1, title: 'Not Messaged Today' },
        { id: 2, title: 'Awaiting Response' },
        { id: 3, title: 'None' }
      ],
      dropdownSorts: [
        { id: 1, title: 'Newest Interaction' },
        { id: 2, title: 'Older Interaction' },
        { id: 3, title: 'Newest Subscribed' },
        { id: 4, title: 'Client Goal' },
        { id: 5, title: 'Unread Messages' },
        { id: 6, title: 'Oldest Checkin' },
        { id: 7, title: 'Newest Checkin' },
        { id: 8, title: 'Name' }
      ]
    }
  },
  methods: {
    onSwitchChange(val) {
      this.activeSwitch = val.id
    },
    onDropdownFilterChange(val) {
      this.activeFilter = val.id
    },
    onDropdownSortChange(val) {
      this.activeSort = val.id
    }
  }
};
</script>

<style scoped lang="scss">
  .divider {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .switch-active {
    background-color: var(--md-blue-300);
    color: var(--md-white);
  }

  .switch-inactive {
    border: solid 1px var(--md-blue-300);
    color: var(--md-blue-300);
  }
</style>
