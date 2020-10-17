<template>
  <div>
    <div>
      <b-row class="bg-header header-border-card">
        <b-col>
          <h6 class="m-0 py-3">
            Promote Yourself
          </h6>
        </b-col>
      </b-row>
      <b-row
        v-for="(item, i) of promoteMenus"
        class="bg-body pointer"
        :key="i"
        :class="[
          i !== promoteMenus.length - 1 ? 'divider-grey' : '',
          i === promoteMenus.length - 1 ? 'body-border-card' : '',
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
      promoteMenus: [
        { key: 'promote-1', title: 'Monthly Cross Promotion Tournament ($300 in prizes)' },
        { key: 'promote-2', title: 'Social Media Directory' },
        { key: 'promote-3', title: 'Badge' }
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
