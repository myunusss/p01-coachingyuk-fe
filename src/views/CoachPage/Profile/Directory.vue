<template>
  <div>
    <b-card>
      <b-row class="bottom-divider-grey">
        <b-col>
          <h3>Coach Directory</h3>
          <b-form-checkbox v-model="directories.isIncludeInDirectory">
            Yes, include me in the CoachingYuk.com directory
          </b-form-checkbox>
          <ul>
            <li>Be listed in the CoachingYuk.com directory</li>
            <li>Get referrals from other coaches</li>
            <li>Share revenue in exchange for referrals, typically 50/50. <span class="text-primary">See Full Details</span></li>
          </ul>
          <b-button
            variant="primary"
            class="my-3"
          >
            Save
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-3">
          <h4>Profile Checklist</h4>
          <p>These steps are also required before you will be visible in our directory</p>
          <b-form-checkbox v-model="directories.isUploadAvatar">
            Upload Avatar
          </b-form-checkbox>
          <b-form-checkbox v-model="directories.isAddPackages">
            Add coaching packages
          </b-form-checkbox>
          <b-form-checkbox v-model="directories.isAddBio">
            Add bio
          </b-form-checkbox>
          <b-form-checkbox v-model="directories.isAvailableForHire">
            Mark yourself available for hire
          </b-form-checkbox>
          <b-form-checkbox v-model="directories.isAddCoverImage">
            Add cover image
          </b-form-checkbox>
          <b-form-checkbox v-model="directories.isAddDescription">
            Add descriptions to all of your coaching packages
          </b-form-checkbox>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    directories: {
      type: Object,
      default: () => ({
        isIncludeInDirectory: true,
        isUploadAvatar: true,
        isAddPackages: true,
        isAddBio: true,
        isAvailableForHire: true,
        isAddCoverImage: true,
        isAddDescription: true
      })
    }
  }
};
</script>

<style scoped lang="scss">
.bottom-divider-grey {
  border-bottom: solid 1px var(--md-grey-300);
}
</style>
