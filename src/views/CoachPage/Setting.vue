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
          <!--
  ___ ___  ___  ___ ___ _    ___
 | _ \ _ \/ _ \| __|_ _| |  | __|
 |  _/   / (_) | _| | || |__| _|
 |_| |_|_\\___/|_| |___|____|___|
          -->
          <edit-profile
            v-if="menuActive === 'profile-1'"
            :user="user"
          />
          <hire-profile
            v-else-if="menuActive === 'profile-3'"
            :is-available.sync="isAvailable"
          />
          <directory-profile
            v-else-if="menuActive === 'profile-4'"
            :directories="directory"
          />
          <packages-profile v-if="menuActive === 'profile-5'" />
          <session-profile
            v-else-if="menuActive === 'profile-6'"
            :session.sync="session"
          />
          <testimonial-profile v-else-if="menuActive === 'profile-7'" />
          <coach-stat-profile v-else-if="menuActive === 'profile-8'" />
          <!--
  _  _   _   ___ ___ _____
 | || | /_\ | _ )_ _|_   _|
 | __ |/ _ \| _ \| |  | |
 |_||_/_/ \_\___/___| |_|
          -->
          <certification-habit v-else-if="menuActive === 'habit-1'" />
          <featured-habit
            v-else-if="menuActive === 'habit-2'"
            :featured.sync="featured"
          />
          <promo-habit
            v-else-if="menuActive === 'habit-3'"
            :promo-code.sync="promoCode"
          />
          <!--
  ___ ___  ___  __  __  ___ _____ ___
 | _ \ _ \/ _ \|  \/  |/ _ \_   _| __|
 |  _/   / (_) | |\/| | (_) || | | _|
 |_| |_|_\\___/|_|  |_|\___/ |_| |___|
          -->
          <promotion-promote v-else-if="menuActive === 'promote-1'" />
          <social-media-promote v-else-if="menuActive === 'promote-2'" />
          <badge-promote v-else-if="menuActive === 'promote-3'" />
          <!--
  ___ ___ ___ ___ ___ ___    _   _
 | _ \ __| __| __| _ \ _ \  /_\ | |
 |   / _|| _|| _||   /   / / _ \| |__
 |_|_\___|_| |___|_|_\_|_\/_/ \_\____|
          -->
          <program-referral v-else-if="menuActive === 'referral-1'" />
          <testimonial-referral v-else-if="menuActive === 'referral-2'" />
          <stat-referral v-else-if="menuActive === 'referral-3'" />
          <!--
 __      _____ ___ _____ ___ _  _  ___
 \ \    / / _ \_ _|_   _|_ _| \| |/ __|
  \ \/\/ /|   /| |  | |  | || .` | (_ |
   \_/\_/ |_|_\___| |_| |___|_|\_|\___|
          -->
          <commission-writing v-else-if="menuActive === 'writing-1'" />
          <!--
  ___ ___  _   _  ___   _ _____ ___ ___  _  _
 | __|   \| | | |/ __| /_\_   _|_ _/ _ \| \| |
 | _|| |) | |_| | (__ / _ \| |  | | (_) | .` |
 |___|___/ \___/ \___/_/ \_\_| |___\___/|_|\_|
          -->
          <training-education v-else-if="menuActive === 'education-1'" />
          <!--
  ___ _      _   _  _ ___
 | _ \ |    /_\ | \| / __|
 |  _/ |__ / _ \| .` \__ \
 |_| |____/_/ \_\_|\_|___/
          -->
          <create-plan v-else-if="menuActive === 'plan-1'" />
          <manage-plan v-else-if="menuActive === 'plan-2'" />
          <!--
  __  __ ___ __  __ ___ ___ ___  ___ _  _ ___ ___
 |  \/  | __|  \/  | _ ) __| _ \/ __| || |_ _| _ \
 | |\/| | _|| |\/| | _ \ _||   /\__ \ __ || ||  _/
 |_|  |_|___|_|  |_|___/___|_|_\|___/_||_|___|_|
-->
          <manage-membership v-else-if="menuActive === 'manage-1'" />
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

// Profile Section
import EditProfile from '@/views/CoachPage/Profile/Edit'
import HireProfile from '@/views/CoachPage/Profile/Hire'
import DirectoryProfile from '@/views/CoachPage/Profile/Directory'
import PackagesProfile from '@/views/CoachPage/Profile/Packages'
import SessionProfile from '@/views/CoachPage/Profile/Session'
import TestimonialProfile from '@/views/CoachPage/Profile/Testimonial'
import CoachStatProfile from '@/views/CoachPage/Profile/Stats'

// Habit Section
import CertificationHabit from '@/views/CoachPage/Habit/Certification'
import FeaturedHabit from '@/views/CoachPage/Habit/Featured'
import PromoHabit from '@/views/CoachPage/Habit/Promo'

// Promote Section
import PromotionPromote from '@/views/CoachPage/Promote/Promotion'
import SocialMediaPromote from '@/views/CoachPage/Promote/SocialMedia'
import BadgePromote from '@/views/CoachPage/Promote/Badge'

// Referral Section
import ProgramReferral from '@/views/CoachPage/Referral/Program'
import TestimonialReferral from '@/views/CoachPage/Referral/Testimonial'
import StatReferral from '@/views/CoachPage/Referral/Stats'

// Writing Section
import CommissionWriting from '@/views/CoachPage/Writing/Comission'

// Education Section
import TrainingEducation from '@/views/CoachPage/Education/BrainTraining'

// Plan Section
import CreatePlan from '@/views/CoachPage/Plans/Create'
import ManagePlan from '@/views/CoachPage/Plans/Manage'

// Membership Section
import ManageMembership from '@/views/CoachPage/Manage/Membership'

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
    // Profile Section
    EditProfile,
    HireProfile,
    DirectoryProfile,
    PackagesProfile,
    SessionProfile,
    TestimonialProfile,
    CoachStatProfile,
    // Habit Section
    CertificationHabit,
    FeaturedHabit,
    PromoHabit,
    // Promote Section
    PromotionPromote,
    SocialMediaPromote,
    BadgePromote,
    // Referral Section
    ProgramReferral,
    TestimonialReferral,
    StatReferral,
    // Writing Section
    CommissionWriting,
    // Education Section
    TrainingEducation,
    // Plan Section
    CreatePlan,
    ManagePlan,
    // Membership Section
    ManageMembership
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
      session: {
        price: 5.00,
        description: '',
        confirmation: ''
      },
      featured: {
        category: 'productivity',
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
      },
      promoCode: {
        first: 'XXX-XXX-XXX',
        second: 'XXX-XXX-XXX'
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
        case 'education-2':
          this.$router.push('/not-found')
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
