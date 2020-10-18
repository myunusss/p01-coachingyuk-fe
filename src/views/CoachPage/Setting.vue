<template>
  <div class="main-padding bg-gradient-green">
    <b-container>
      <b-row>
        <b-col cols="3">
          <profile
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <habit
            class="my-4"
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <promote
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <referral
            class="my-4"
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <writing
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <education
            class="my-4"
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <plans
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
          <manage
            class="mt-4"
            :menu-active.sync="menuActive"
            @setMenu="setActiveMenu"
          />
        </b-col>
        <b-col cols="9">
          <edit-profile
            v-if="menuActive === 'profile-1'"
            :user="user"
          />
          <hire-profile
            v-if="menuActive === 'profile-3'"
            :is-available.sync="isAvailable"
          />
          <directory-profile
            v-if="menuActive === 'profile-4'"
            :directories="directory"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Profile from '@/views/CoachPage/Profile/Profile'
import Habit from '@/views/CoachPage/Habit/Habit'
import Promote from '@/views/CoachPage/Promote/Promote'
import Referral from '@/views/CoachPage/Referral/Referral'
import Writing from '@/views/CoachPage/Writing/Writing'
import Education from '@/views/CoachPage/Education/Education'
import Plans from '@/views/CoachPage/Plans/Plans'
import Manage from '@/views/CoachPage/Manage/Manage'

import EditProfile from '@/views/CoachPage/Profile/Edit'
import HireProfile from '@/views/CoachPage/Profile/Hire'
import DirectoryProfile from '@/views/CoachPage/Profile/Directory'

export default {
  components: {
    Profile,
    Habit,
    Promote,
    Referral,
    Writing,
    Education,
    Plans,
    Manage,
    EditProfile,
    HireProfile,
    DirectoryProfile
  },
  data() {
    return {
      menuActive: '',
      isAvailable: true,
      directory: {
        isIncludeInDirectory: true,
        isUploadAvatar: true,
        isAddPackages: true,
        isAddBio: true,
        isAvailableForHire: true,
        isAddCoverImage: true,
        isAddDescription: true
      },
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {}
    }
  },
  methods: {
    setActiveMenu(item) {
      this.menuActive = item.key
      // This is a WIP, another components is still under development
      switch (item.key) {
        case 'profile-2':
          this.$router.push({ name: 'CoachPage', params: { user: this.user }})
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-gradient-green {
    background: linear-gradient(to right, rgba(76, 175, 80, 0.5), rgba(33, 150, 243, 0.5));
  }
</style>
