<template>
  <div>
    <div>
      <b-row class="bg-header header-border-card">
        <b-col>
          <h6 class="m-0 py-3">
            Coach Profile
          </h6>
        </b-col>
      </b-row>
      <b-row
        v-for="(item, i) of profileMenus"
        class="bg-body pointer"
        :key="i"
        :class="[
          i !== profileMenus.length - 1 ? 'divider-grey' : '',
          i === profileMenus.length - 1 ? 'body-border-card' : '',
          menuActive === item.key ? 'bg-menu-active' : ''
        ]"
        @click="$emit('setMenu', item)"
      >
        <b-col>
          <h6 class="m-0 py-3">
            {{ item.title }}
          </h6>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuActive: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      profileMenus: [
        { key: 'profile-1', title: 'Edit Profile' },
        { key: 'profile-2', title: 'View Profile' },
        { key: 'profile-3', title: 'Available For Hire' },
        { key: 'profile-4', title: 'Available In Directory' },
        { key: 'profile-5', title: 'Individual Coaching Packages' },
        { key: 'profile-6', title: 'Individual Coaching Sessions' },
        { key: 'profile-7', title: 'Manage Testimonials' },
        { key: 'profile-8', title: 'Coaching Stats' }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
  .divider-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .header-border-card {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .body-border-card {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .bg-header {
    background-color: var(--md-grey-200);
  }

  .bg-body {
    background-color: var(--md-white);
  }

  .bg-menu-active {
    background-color: var(--md-blue-300);
    color: var(--md-white);
  }
</style>
