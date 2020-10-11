<template>
  <div>
    <top-bar is-button-shown />
    <main>
      <div class="w-100 d-flex flex-row justify-content-center main-padding bg-accent">
        <h1 class="text-white">
          Terms & Conditions
        </h1>
      </div>

      <div class="w-100 p-4 bg-grey">
        <b-container>
          <b-row>
            <b-col class="d-flex flex-row align-items-center">
              <p
                class="m-0 pointer"
                @click="$router.push('/landing')"
              >
                Home
              </p>
              <fa-icon
                icon="chevron-right"
                class="ml-3"
              />
              <fa-icon
                icon="chevron-right"
                class="mr-3"
              />
              <p class="m-0">
                Terms & Conditions
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.liability.title }}
              </h3>
              <p>{{ docs.liability.description }}</p>
              <p>{{ docs.liability.component.title }}</p>
              <b-row>
                <b-col
                  cols="12"
                  v-for="(item, i) of docs.liability.component.data"
                  class="d-flex flex-row ml-3 pb-2"
                  :key="i"
                >
                  <fa-icon
                    icon="square"
                    color="#673ab7"
                    class="mt-1 mr-2 fa-xs"
                  />
                  <p class="m-0">
                    {{ item }}
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.termsAndCondition.title }}
              </h3>
              <p>{{ docs.termsAndCondition.description }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.license.title }}
              </h3>
              <p>{{ docs.license.description }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.membership.title }}
              </h3>
              <p>{{ docs.membership.description }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.assets.title }}
              </h3>
              <p>{{ docs.assets.description }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <b-button
                class="button-outline-purple pointer"
                @click="$router.push('/landing')"
              >
                BACK
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="w-100 mt-5 p-4 bg-grey">
        <b-container>
          <b-row>
            <b-col class="d-flex flex-row align-items-center">
              <p
                class="m-0 pointer"
                @click="$router.push('/landing')"
              >
                Home
              </p>
              <fa-icon
                icon="chevron-right"
                class="ml-3"
              />
              <fa-icon
                icon="chevron-right"
                class="mr-3"
              />
              <p class="m-0">
                Terms & Conditions
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <upper-wave />
      <div class="bg-accent">
        <b-container>
          <b-row class="p-3">
            <b-col>
              <h3 class="text-white font-weight-bold">
                DISCOVER
              </h3>
              <p class="text-white">
                Find Your Goal
              </p>
              <p class="text-white">
                Blog
              </p>
            </b-col>
            <b-col>
              <h3 class="text-white font-weight-bold">
                GET STARTED
              </h3>
              <p
                class="text-white pointer"
                @click="$router.push('/login')"
              >
                Log In
              </p>
              <p
                class="text-white pointer"
                @click="$router.push('/sign-up')"
              >
                Sign Up
              </p>
              <p class="text-white">
                FAQ
              </p>
              <p
                class="text-white pointer"
                @click="$router.push('/terms-and-conditions')"
              >
                Terms & Conditions
              </p>
              <p
                class="text-white pointer"
                @click="$router.push('/privacy-policy')"
              >
                Privacy Policy
              </p>
            </b-col>
            <b-col>
              <h3 class="text-white font-weight-bold">
                COACHES
              </h3>
              <p class="text-white">
                Coach Directory
              </p>
              <p class="text-white">
                Become a Coach
              </p>
              <p class="text-white">
                Habit Coach Certification
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex p-2 justify-content-center">
              <p class="text-white">
                Copyright &copy; 2020 CoachingYuk
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from '@/components/LandingTopBar/LandingTopBar'
import UpperWave from '@/components/UpperWave/UpperWave'

export default {
  components: {
    TopBar,
    UpperWave
  },
  data() {
    return {
      docs: {
        liability: {
          title: 'Limitations Of Liability',
          description: 'Tivo also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable).',
          component: {
            title: 'When you first register for a Tivo account, and when you use the Services, we collect some Personal Information about you such as:',
            data: [
              'The geographic area where you use your computer and mobile devices should be the same with the one on the receipt',
              'Your full name, username, and email address and other contact details must be provided using the dedicated form',
              'A unique Tivo user ID (an alphanumeric string) which is assigned to you upon registration and session',
              'Other optional information as part of your account profile are not required and you should not mention them',
              'Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent are mandatory',
              'Other information submitted by you or your organizational representatives via various methods is not taken into consideration'
            ]
          }
        },
        termsAndCondition: {
          title: 'Terms And Conditions',
          description: 'Under no circumstances shall Tivo be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Tivo or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof should only be provided by the user of the application.'
        },
        license: {
          title: 'License Types & Template Usage',
          description: 'All our templates inherit the GNU general public license from HTML. All .PSD & CSS files are packaged separately and are not licensed under the GPL 2.0. Instead, these files inherit Tivo Personal Use License. These files are given to all Clients on a personal use basis. You may not offer them, modified or unmodified, for redistribution or resale of any kind. You can’t use one of our themes on a HTML domain. More on HTML Vs CSS, you can read here. You can use our templates do develop sites for your clients and also for a limited amount of personal projects.\n' +
            '\n' +
            'Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing messages; and analyze the results are always measured better with a dedicated analytics tool.'
        },
        membership: {
          title: 'Designer Membership And How It Applies',
          description: 'By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services if you don\'t whish to customize the template for your online project.'
        },
        assets: {
          title: 'Assets Used In The Live Preview Content',
          description: 'Tivo Landing Page uses tracking technology on the landing page, in the Applications, and in the Platforms, including mobile application identifiers and a unique Hootsuite user ID to help us recognize you across different Services, to monitor usage and web traffic routing for the Services, and to customize and improve the Services. By visiting Tivo or using the Services you agree to the use of cookies in your browser and HTML-based emails. Cookies are small text files placed on your device when you visit a web site in order to track use of the site and to improve your user experience.'
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .bg-accent {
    background-color: var(--md-deep-purple-800);
  }

  .bg-grey {
    background-color: var(--md-grey-100);
  }

  .button-outline-purple {
    border-radius: 25px;
    border: solid 2px var(--md-deep-purple-800);
    background-color: var(--md-white);
    color: var(--md-deep-purple-800);
    font-weight: bold;
  }
</style>
