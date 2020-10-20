<template>
  <div>
    <b-card>
      <b-row class="pb-3 bottom-divider-grey">
        <b-col>
          <h3>Featured Habit Coach</h3>
          <p>We give extra visibility to habit coaches who meet the following criteria</p>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h5>Choose a category to be featured in.</h5>
          <p>Once you've picked a category, make sure you are coaching one of the <span class="text-primary">featured habits in that category.</span> That will maximize the number of places where we feature your coaching profile.</p>
          <b-form-group>
            <b-form-select
              v-model="featured.category"
              class="w-50"
              :options="categories"
            />
          </b-form-group>
          <b-button variant="primary">
            Save
          </b-button>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h5>Habit Coach Certification</h5>
          <b-form-checkbox v-model="featured.certification">
            Certify as a habit coach
          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <h5>Available For Hire</h5>
          <b-form-checkbox v-model="featured.hire.isAvailableForHire">
            Available for hire
          </b-form-checkbox>
          <b-form-checkbox v-model="featured.hire.isAvailableInDirectory">
            Available in the directory
          </b-form-checkbox>
          <b-form-checkbox v-model="featured.hire.isHasPackage">
            Have at least one habit coaching package
          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col>
          <h5>Profile Checklist</h5>
          <p>These steps are also required before you will be visible in our directory</p>
          <b-form-checkbox v-model="featured.profile.isUploadAvatar">
            Upload Avatar
          </b-form-checkbox>
          <b-form-checkbox v-model="featured.profile.isAddCoachingPackage">
            Add coaching packages
          </b-form-checkbox>
          <b-form-checkbox v-model="featured.profile.isAddBio">
            Add bio
          </b-form-checkbox>
          <b-form-checkbox v-model="featured.profile.isAddCoverImage">
            Add cover image
          </b-form-checkbox>
          <b-form-checkbox v-model="featured.profile.isAddDescription">
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
    featured: {
      type: Object,
      default: () => ({
        category: '',
        certification: true,
        hire: {
          isAvailableForHire: true,
          isAvailableInDirectory: true,
          isHasPackage: true
        },
        profile: {
          isUploadAvatar: true,
          isAddCoachingPackage: true,
          isAddBio: true,
          isAddCoverImage: true,
          isAddDescription: true
        }
      })
    }
  },
  data() {
    return {
      categories: [
        { value: 'productivity', text: 'Productivity' },
        { value: 'fitness', text: 'Fitness' },
        { value: 'learning', text: 'Learning' },
        { value: 'sleep', text: 'Sleep' },
        { value: 'addiction', text: 'Addiction' }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
  .bottom-divider-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
