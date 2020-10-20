<template>
  <div>
    <b-card>
      <b-row class="pb-3 bottom-divider-grey">
        <b-col>
          <h3>Cross Promotion Tournament</h3>
          <p>{{ firstDesc }}</p>
        </b-col>
      </b-row>
      <b-row class="py-3 bottom-divider-grey">
        <b-col>
          <p>{{ secondDesc }}</p>
          <h6>Cherry:</h6>
          <div class="pl-3 left-divider-grey">
            <p>The cross-promotion sprint was a fantastic opportunity to get familiar with other coaches' specialty content as well as get new eyes on my own - along with incredible feedback and social shares. On Medium my post reach went up 177%, engagements 187% and new page likes 300% - all in a month!</p>
          </div>
          <h6>Michelle:</h6>
          <div class="pl-3 left-divider-grey">
            <p>The cross-promotion challenge helped me get to know other Coach.me coaches and their services/talents, develop a firmer social media marketing strategy, and create more effective content!</p>
          </div>
          <h6>Jeffrey:</h6>
          <div class="pl-3 left-divider-grey">
            <p>The cross-promotion challenge helped me develop my daily habit of creating content and making it public. I never imagined I could have produced so much in such a short period of time. Yeah, doing all this within a supportive community . . . I could have paid for the opportunity!!</p>
          </div>
          <h6>Ryan:</h6>
          <div class="pl-3 left-divider-grey">
            <p>This was an incredibly helpful challenge as it made me think about content in different ways. The support from the other coaches also helped me gain more followers!</p>
          </div>
          <h6>Scott:</h6>
          <div class="pl-3 left-divider-grey">
            <p>The cross-promotion challenge got me moving again on posting regularly and asking for engagement. I had gotten out of the habit of being consistent in posting and sharing and it was showing in my engagement... This challenge reset and reboosted my focus.</p>
          </div>
          <h6>Misa:</h6>
          <div class="pl-3 left-divider-grey">
            <p>
              {{ `
              - I started my FB page,
              - I gained 84 followers within the first two weeks (I know it's not a lot, but I am
              excited since some are not from my network),
              - I got the motivation to write again - three articles in the works!
              - I recorded my first video,
              - I got to know you better and read loads of interesting content,
              - I resuscitated my Twitter and Instagram I haven't used since 2015.
              Love this challenge, it's awesome. I think I am on a good path to create a habit of marketing.` }}
            </p>
          </div>
          <h6>Karine:</h6>
          <div class="pl-3 left-divider-grey">
            <p>Participating this challenge was a lot of fun! I am really glad I got to know fellow coaches better and it was a great opportunity to let everyone know what I was doing too. Worth every minute invested in it!</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col>
          <h3>FAQ</h3>
          <div
            v-for="(item, i) of faq"
            :key="i"
          >
            <h6>{{ item.question }}</h6>
            <p>{{ item.answer }}</p>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstDesc: `The Monthly Cross Promotion Tournament starts on the first Monday of each month and lasts for four weeks.
        The premise is simple. Every week day you submit a tweet, FB post, LinkedIn, Instagram, or blog post that you want help promoting AND you help at least three other coaches who need the same. It\'s coaches helping coaches
        Start by showing up in Slack on the first Monday of the month. Late comers are accepted until end of day of the first Tuesday (your time).
        The goal is to help participants gain massive exposure, build stronger connections with other coaches and develop a solid marketing habit.
        To create a strong container for this, we run the tournament as “engage or die.” If you miss a day, you’re out! The last coach(es) standing share the $300 prize pool.`,
      secondDesc: 'These are some of the testimonials from the coaches who have participated. Then below that I\'ve got a FAQ about even more details.',
      faq: [
        {
          question: 'Do I need to have a lot of existing content or marketing experience to participate in this ?',
          answer: 'No, definitely not! People have used this challenge to start a Facebook page from scratch, resuscitate Social Media accounts they hadn’t used in years, record their first videos and publish their first articles. Come as you are and be prepared to roll up your sleeves and get to work. If you need more content or more marketing experience, this challenge might be the thing you need to get there!'
        },
        {
          question: 'Is it worth it to do this challenge if I already have a large Social Media following or a lot of promotional experience ?',
          answer: 'Yes! You will get additional comments and likes on your existing Social Media accounts, you can explore new platforms that you don’t already have a strong presence on, you will get to know other coaches more closely (which is useful for referrals, networking and collaboration opportunities) and you will have more motivation to promote your content frequently. Some of the people who participated in this challenge have thousands or tens of thousands of followers on some Social Media platforms and they got a ton of value out of it!'
        },
        {
          question: 'Is this only for coaches who publish in English ?',
          answer: 'No, definitely not! In our first round, roughly half of the participants were non-native English speakers and many mostly or exclusively published in their native language. We didn’t need to speak their language to like/share their content or leave a comment in English. Google Translate for the win!'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .bottom-divider-grey {
    border-bottom: solid 1px var(--md-grey-300);
  }

  .left-divider-grey {
    border-left: solid 3px var(--md-grey-300);
  }
</style>
