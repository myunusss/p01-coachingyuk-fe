<template>
  <div>
    <top-bar is-button-shown />
    <main>
      <div class="main-padding bg-accent">
        <b-container>
          <b-row class="d-flex justify-content-center">
            <b-col class="align-self-center">
              <h1 class="mb-4 font-weight-bold text-white">
                Saatnya naik level dengan COACH yang TEPAT
              </h1>
              <p class="mb-4 text-white">
                Akselerasi bisnis Anda. Bangun pribadi yang prima. Belajar tanpa henti.
              </p>
              <b-button
                class="px-4 font-weight-bold button-outline-white"
                @click="$router.push('/sign-up')"
              >
                SIGN UP
              </b-button>
            </b-col>
            <b-col>
              <b-img
                height="550"
                :src="require('../../assets/img-dummy-header.png')"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <bottom-wave class="margin-top-minus" />
      <div class="bg-white">
        <b-container>
          <b-row class="mt-5 mb-5">
            <b-col>
              <b-carousel
                controls
                indicators
                :interval="2000"
              >
                <b-carousel-slide>
                  <template v-slot:img>
                    <b-img
                      :src="require('../../assets/img-dummy-default-category.jpg')"
                      height="450"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <b-img
                      :src="require('../../assets/img-dummy-carousel-sleep.jpg')"
                      height="450"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <b-img
                      :src="require('../../assets/img-dummy-carousel-icf.jpg')"
                      height="450"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row class="mt-xl">
            <b-col class="d-flex flex-column justify-content-center">
              <b-img
                width="250"
                class="align-self-center mb-3"
                :src="require('../../assets/ic_landing_library.png')"
              />
              <h6 class="text-center">
                Belajar dari para Ahli dan dapatkan tips-tips yang praktikal.
              </h6>
              <b-button
                class="mt-3 button-fill-accent"
                @click="$router.push('/event')"
              >
                DAPATKAN ILMU
              </b-button>
            </b-col>
            <b-col class="d-flex flex-column justify-content-center">
              <b-img
                width="250"
                class="align-self-center mb-3"
                :src="require('../../assets/ic_landing_personal_coaching.png')"
              />
              <h6 class="text-center">
                Pelatih khusus siap memberi bantuan pribadi, saran, dan akuntabilitas.
              </h6>
              <b-button
                class="mt-3 button-fill-accent"
                @click="$router.push('/search-coach')"
              >
                TEMUKAN COACH
              </b-button>
            </b-col>
            <b-col class="d-flex flex-column justify-content-center">
              <b-img
                width="250"
                class="align-self-center mb-3"
                :src="require('../../assets/ic_landing_become_coach.png')"
              />
              <h6 class="text-center">
                Pelatihan Digital dan Alat-alat untuk membangun praktek coaching yang berhasil.
              </h6>
              <b-button
                class="mt-3 button-fill-accent"
                @click="$router.push('/become-a-coach')"
              >
                PELAJARI
              </b-button>
            </b-col>
          </b-row>
          <b-row class="mt-xl py-5">
            <b-col>
              <h3>Mengapa Join di Coachingyuk.com</h3>
              <p>Wadah yang mempertemukan Anda dengan para Profesional Coach yang siap membantu mengembangkan potensi diri dan mempercepat pencapaian Anda menuju sukses dalam bisnis, karir, serta kehidupan. Semua kendali anda di tangan anda</p>
              <ul>
                <li>Tumbuh dan berkembang dengan cara yang mudah</li>
                <li>Harga yang terjangkau</li>
                <li>Bisa dimana saja dan kapan saja</li>
              </ul>
              <b-button
                class="px-4 py-2 button-fill-accent"
                @click="$router.push('/sign-up')"
              >
                DAPATKAN SECARA GRATIS
              </b-button>
            </b-col>
            <b-col>
              <b-img
                width="450"
                :src="require('../../assets/img-dummy-landing.jpg')"
              />
            </b-col>
          </b-row>
          <b-row class="mt-xl">
            <b-col>
              <b-carousel
                indicators
                controls
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
                        <p>Setelah saya join dan ikut dalam program coachingyuk, saya merasa lebih percaya diri dan optimis dalam membangun startup yang saat ini sedang saya kerjakan.</p>
                        <p class="font-weight-bold">
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
                        <p>Fitur-fitur yang ada di coachingyuk dan para coach profesional membantu saya menjadi seseorang yang tidak hanya mengejar Karir saja melainkan membantu saya menjadi Dosen yang lebih baik lagi.</p>
                        <p class="font-weight-bold">
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
                        <p>Coachingyuk.com merupakan platform coaching digital yang konprehensif lengkap dan mudah digunakan.  Sungguh membantu para coach dan client dalam menyelesaikan berbagai isu yang dihadapi.</p>
                        <p class="font-weight-bold">
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
                <p
                  class="text-white pointer"
                  @click="$router.push('/become-a-coach')"
                >
                  Become a Coach
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
import BottomWave from '@/components/BottomWave/BottomWave'
import UpperWave from '@/components/UpperWave/UpperWave'

export default {
  components: {
    TopBar,
    BottomWave,
    UpperWave
  }
};
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
  }

  ul {
    list-style: square;
  }

  ul li::before {
    color: var(--md-deep-purple-800);
  }

  .mt-xl {
    margin-top: 150px;
  }

  .margin-top-minus {
    margin-top: -20px;
  }

  .margin-bottom-minus {
    margin-bottom: -20px;
  }

  .bg-accent {
    background-color: var(--md-deep-purple-800);
  }

  .button-outline-white {
    background-color: var(--md-white);
    border: solid 2px var(--md-white);
    border-radius: 25px;
    color: var(--md-deep-purple-800);

    &:hover {
      background-color: transparent;
      color: var(--md-white);
    }
  }

  .button-fill-accent {
    background-color: var(--md-deep-purple-800);
    border-radius: 25px;
    color: var(--md-white);

    &:hover {
      background-color: var(--md-white);
      border: solid 2px var(--md-deep-purple-800);
      border-radius: 25px;
      color: var(--md-deep-purple-800);
    }
  }
</style>
