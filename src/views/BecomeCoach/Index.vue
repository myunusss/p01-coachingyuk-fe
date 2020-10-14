<template>
  <div>
    <div class="p-3 py-5 bg-accent">
      <b-container>
        <b-row class="mb-5">
          <b-col>
            <b-img
              width="150"
              class="pointer"
              :src="require('../../assets/logo_coaching_yuk.png')"
              @click="$router.push(isUserDefined('landing'))"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="d-flex flex-column justify-content-center">
            <h1 class="text-white align-self-center">
              Amazing Tools for Coaches
            </h1>
            <p class="m-0 text-white align-self-center">
              A coaching directory and tools to start and grow your online coaching practice
            </p>
            <b-button
              variant="transparent"
              class="w-25 mt-5 p-3 align-self-center button-outline-white"
              @click="$router.push(isUserLoggedIn)"
            >
              JOIN TODAY
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="p-3 py-5">
      <b-container>
        <b-row>
          <b-col class="d-flex justify-content-center">
            <h3>How To Get Started</h3>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col class="d-flex flex-column">
            <b-avatar
              text="1"
              variant="primary"
              class="mb-3 align-self-center"
            />
            <h4 class="align-self-center">
              {{ starterData.first.title }}
            </h4>
            <p class="text-center">
              {{ starterData.first.description }}
            </p>
          </b-col>
          <b-col class="d-flex flex-column">
            <b-avatar
              text="2"
              variant="primary"
              class="mb-3 align-self-center"
            />
            <h4 class="align-self-center">
              {{ starterData.second.title }}
            </h4>
            <p class="text-center">
              {{ starterData.second.description }}
            </p>
          </b-col>
          <b-col class="d-flex flex-column">
            <b-avatar
              text="$"
              variant="success"
              class="mb-3 align-self-center"
            />
            <h4 class="align-self-center">
              {{ starterData.third.title }}
            </h4>
            <p class="text-center">
              {{ starterData.third.description }}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="p-4 bg-grey">
      <b-container>
        <b-row>
          <b-col class="d-flex justify-content-center align-items-center">
            <h4>Reach <span class="font-weight-bold">1M+</span> clients</h4>
          </b-col>
          <b-col class="d-flex justify-content-center align-items-center">
            <h4>Multiply your income <span class="font-weight-bold">x2</span></h4>
          </b-col>
          <b-col class="d-flex justify-content-center align-items-center">
            <h4>Join network of <span class="font-weight-bold">8000+</span> coaches</h4>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="py-5 bg-gradient">
      <b-container>
        <b-row class="mt-xl">
          <b-col>
            <b-carousel
              indicators
              :interval="5000"
            >
              <b-carousel-slide>
                <template v-slot:img>
                  <b-row>
                    <b-col class="d-flex justify-content-center">
                      <b-img
                        rounded="circle"
                        class="align-self-center"
                        :src="require('../../assets/ic_landing_testi_iman.jpg')"
                      />
                    </b-col>
                    <b-col class="align-self-center">
                      <p class="text-white">
                        Setelah saya join dan ikut dalam program coachingyuk, saya merasa lebih percaya diri dan optimis dalam membangun startup yang saat ini sedang saya kerjakan.
                      </p>
                      <p class="text-white font-weight-bold">
                        Iman Ahmad - Founder & CEO Tetamart
                      </p>
                    </b-col>
                  </b-row>
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <b-row>
                    <b-col class="d-flex justify-content-center">
                      <b-img
                        rounded="circle"
                        class="align-self-center"
                        :src="require('../../assets/ic_landing_testi_hasanah.jpg')"
                      />
                    </b-col>
                    <b-col class="align-self-center">
                      <p class="text-white">
                        Fitur-fitur yang ada di coachingyuk dan para coach profesional membantu saya menjadi seseorang yang tidak hanya mengejar Karir saja melainkan membantu saya menjadi Dosen yang lebih baik lagi.
                      </p>
                      <p class="text-white font-weight-bold">
                        Hasanah Putri - Dosen
                      </p>
                    </b-col>
                  </b-row>
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <b-row>
                    <b-col class="d-flex justify-content-center">
                      <b-img
                        rounded="circle"
                        class="align-self-center"
                        :src="require('../../assets/ic_landing_testi_budi.jpg')"
                      />
                    </b-col>
                    <b-col class="align-self-center">
                      <p class="text-white">
                        Coachingyuk.com merupakan platform coaching digital yang konprehensif lengkap dan mudah digunakan.  Sungguh membantu para coach dan client dalam menyelesaikan berbagai isu yang dihadapi.
                      </p>
                      <p class="text-white font-weight-bold">
                        Budi Dewo - Coach & Pebisnis
                      </p>
                    </b-col>
                  </b-row>
                </template>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="pb-5">
      <b-container>
        <b-row class="py-5 bottom-divider">
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Directory Starting at $5/Month</h3>
            <p>The most effective way to promote your coaching business. Thousands of potential clients browse our directory every day.</p>
          </b-col>
        </b-row>
        <b-row class="pt-5 pb-3">
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Additional Features + Benefits</h3>
          </b-col>
        </b-row>
        <b-row class="py-3">
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Beautiful Coaching Profile</h3>
            <p class="px-5 text-center">
              Create a beautiful coaching profile where clients can purchase any of your services.
            </p>
          </b-col>
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Sell Your Coaching Services</h3>
            <p class="px-5 text-center">
              Our platform supports two types of coaching services: traditional session based coaching and daily habit coaching.
            </p>
          </b-col>
        </b-row>
        <b-row class="py-3">
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Become a Coach</h3>
            <p class="px-5 text-center">
              Never coached before? Our Habit Coaching Certification is the best in the world. It's also a simple starting point for new coaches.
            </p>
          </b-col>
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Monthly Marketing Challenge</h3>
            <p class="px-5 text-center">
              Accountability, advice and support from other coaches on how to succeed at social media marketing. Plus cash prizes.
            </p>
          </b-col>
        </b-row>
        <b-row class="py-3">
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Marketing Training</h3>
            <p class="px-5 text-center">
              We run coach-speciifc marketing trainings to help you refine your pitch and grow your audience.
            </p>
          </b-col>
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <h3>Connect With Other Coaches</h3>
            <p class="px-5 text-center">
              Our coaches help each other by sending referrals, giving advice and congregating in our Slack community.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="p-4 bg-grey">
      <b-container>
        <b-row>
          <b-col class="d-flex justify-content-center">
            <b-button
              variant="transparent"
              class="w-25 p-3 align-self-center button-purple"
              @click="$router.push(isUserLoggedIn)"
            >
              JOIN TODAY
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <div class="bg-accent">
        <b-container>
          <b-row class="pt-5 p-3">
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
                @click="$router.push(isUserDefined('login'))"
              >
                Log In
              </p>
              <p
                class="text-white pointer"
                @click="$router.push(isUserDefined('sign-up'))"
              >
                Sign Up
              </p>
              <p class="text-white">
                FAQ
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUserLoggedIn: localStorage.getItem('user')
        ? '/apply-coach'
        : '/login',
      starterData: {
        first: {
          title: 'Join Today',
          description: 'Membership includes a directory listing, business opportunities, training, and a platform for turning your expertise into extra income.'
        },
        second: {
          title: 'List Your Coaching Services',
          description: 'Our directory and referral program are both powerful ways to get new clients. All you have to do is put your coaching services into one of our beautiful coaching profiles.'
        },
        third: {
          title: 'Grow Your Coaching Business',
          description: 'Our number one goal is to bring you business opportunities.'
        }
      }
    }
  },
  methods: {
    isUserDefined(route) {
      return localStorage.getItem('user')
        ? '/dashboard'
        : `/${route}`
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

  .bg-gradient {
    background-image: linear-gradient(to right, var(--md-blue-400), var(--md-deep-purple-400));
  }

  .button-outline-white {
    border: solid 2px var(--md-white);
    border-radius: 25px;
    color: var(--md-white);
  }

  .button-purple {
    background-color: var(--md-deep-purple-800);
    border-radius: 25px;
    color: var(--md-white);
  }

  .bottom-divider {
    border-bottom: solid 1px var(--md-grey-300);
  }
</style>
