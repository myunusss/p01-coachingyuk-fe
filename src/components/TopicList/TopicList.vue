<template>
  <div>
    <b-card class="px-3">
      <b-row>
        <b-col class="font-weight-bold justify-content-center text-center">
          <p>What do you want to do?</p>
        </b-col>
      </b-row>
      <b-row>
        <b-card
          v-for="(items, i) of topics"
          class="w-100 p-3 mb-3 justify-content-center text-center"
          :key="i"
        >
          <p>{{ items.name }}</p>
        </b-card>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        { id: 1, name: 'Popular' },
        { id: 2, name: 'Fitness Habits' },
        { id: 3, name: 'Productivity Habits' },
        { id: 4, name: 'Sleep Habits' },
        { id: 5, name: 'Mindfulness & Positivity Habits' },
        { id: 6, name: 'Practice Habits' },
        { id: 7, name: 'Lose Weight' },
        { id: 8, name: 'Nutrition Habits' },
        { id: 9, name: 'Quit A Bad Habits' },
        { id: 10, name: 'Learning Habits' },
        { id: 11, name: 'Money Habits' },
        { id: 12, name: 'Special Guided Meditations' }
      ]
    }
  }
};
</script>
