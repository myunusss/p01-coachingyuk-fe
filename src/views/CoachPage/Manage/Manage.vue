<template>
  <div>
    <div>
      <b-row
        v-for="(item, i) of manageMenus"
        class="bg-body body-border-card pointer"
        :key="i"
        :class="{'bg-menu-active': menuActive === item.key}"
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
      manageMenus: [
        { key: 'manage-1', title: 'Manage Membership' }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
.divider-grey {
  border-bottom: solid 1px var(--md-grey-300);
}

.body-border-card {
  border-radius: 5px;
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
