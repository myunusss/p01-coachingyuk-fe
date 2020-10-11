<template>
  <div>
    <top-bar is-button-shown />
    <main>
      <div class="w-100 d-flex flex-row justify-content-center main-padding bg-accent">
        <h1 class="text-white">
          Privacy Policy
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
                Privacy Policy
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
                {{ docs.privateData.title }}
              </h3>
              <p>{{ docs.privateData.description }}</p>
              <p>{{ docs.privateData.component.title }}</p>
              <b-row>
                <b-col
                  cols="6"
                  v-for="(item, i) of docs.privateData.component.data"
                  class="d-flex flex-row pb-2"
                  :key="i"
                >
                  <fa-icon
                    icon="square"
                    color="#673ab7"
                    class="mt-2 mr-2 fa-xs"
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
                {{ docs.landingData.title }}
              </h3>
              <p>{{ docs.landingData.description }}</p>
              <p>{{ docs.landingData.component.title }}</p>
              <b-row>
                <b-col
                  cols="12"
                  v-for="(item, i) of docs.landingData.component.data"
                  class="d-flex flex-row pb-2"
                  :key="i"
                >
                  <p class="m-0 mr-2">
                    {{ `${i + 1}.` }}
                  </p>
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
                {{ docs.consumerData.title }}
              </h3>
              <p>{{ docs.consumerData.description }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.consentData.title }}
              </h3>
              <p>{{ docs.consentData.description }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="mt-5">
        <b-container>
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">
                {{ docs.inquireData.title }}
              </h3>
              <p>{{ docs.inquireData.description }}</p>
            </b-col>
            <b-col />
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
                Privacy Policy
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div>
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
        privateData: {
          title: 'Private Data We Receive And Collect',
          description: 'Tivo also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable). There is more to this section and we want to keep you informed about it.',
          component: {
            title: 'When you first register for a Tivo account, and when you use the Services, we collect some Personal Information about you such as:',
            data: [
              'The geographic area where you use your computer and mobile devices should be the same with the one of your software',
              'Your billing address and any necessary other information to complete any financial transaction, and when making purchases through the Services, we may also collect your credit card or PayPal information or any other sensitive data that you consider',
              'Your full name, username, and email address and other contact details should be provided in the contact forms',
              'User generated content (such as messages, posts, comments, pages, profiles, images, feeds or communications exchanged on the Supported Platforms that can be used)',
              'A unique Tivo user ID (an alphanumeric string) which is assigned to you upon registration should always be at front',
              'Images or other files that you may publish via our Services',
              'Every system is backuped regularly and it will not fail',
              'Information (such as messages, posts, comments, pages, profiles, images) we may receive relating to communications you send us, such as queries or comments concerning',
              'Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent but please make sure it does',
              'Other information submitted by you or your organizational representatives via various methods and practiced techniques'
            ]
          }
        },
        landingData: {
          title: 'How We Use Tivo Landing Page Data',
          description: 'Tivo Landing Page Template uses visitors\' data for the following general purposes and for other specific ones that are important:',
          component: {
            data: [
              'To identify you when you login to your account so we can start or user security process for the entire session and duration',
              'To enable us to operate the Services and provide them to you without fear of losing precious confidential information of your users',
              'To verify your transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed). Always take security measures like not saving passwords in your browser or writing them down',
              'To analyze the Website or the other Services and information about our visitors and users, including research into our user demographics and user behaviour in order to improve our content and Services',
              'To contact you about your account and provide customer service support, including responding to your comments and questions',
              'To share aggregate (non-identifiable) statistics about users of the Services to prospective advertisers and partners',
              'To keep you informed about the Services, features, surveys, newsletters, offers, surveys, newsletters, offers, contests and events we think you may find useful or which you have requested from us',
              'To sell or market Tivo Landing Page products and services to you or in other parts of the world where legislation is less restrictive',
              'To better understand your needs and the needs of users in the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market to our customers and users',
              'To keep the Services safe and secure for everyone using the app from administrators to regular users with limited rights',
              'We also use non-identifiable information gathered for statistical purposes to keep track of the number of visits to the Services with a view to introducing improvements and improving usability of the Services. We may share this type of statistical data so that our partners also understand how often people use the Services, so that they, too, may provide you with an optimal experience.\n'
            ]
          }
        },
        consumerData: {
          title: 'Customer Content We Process For Customers',
          description: 'Tivo is a HTML landing page template tool. By its nature, Services enable our customers to promote their products and services integrate with hundreds of business applications that they already use, all in one place. Customer security is our primary focus in this document.\n' +
            '\n' +
            'Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing messages; and analyze the results and improve the security levels in all areas of the application.'
        },
        consentData: {
          title: 'Consent Of Using Tivo Landing Page',
          description: 'By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services should be safe and easy to guarantee a great user experience.'
        },
        inquireData: {
          title: 'Inquire What Data We Have',
          description: 'By visiting Tivo or using the Services you agree to the use of cookies in your browser and HTML-based emails. You visit a website, by using any of the Services, or submitting or collecting any Personal Information via the Services, you consent and use of your Personal Information'
        }
      }
    }
  }
}
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
