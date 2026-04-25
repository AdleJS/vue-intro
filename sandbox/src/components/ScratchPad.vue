<script lang="ts">
import Counter from './Counter.vue'
import UserCard from './UserCard.vue'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    Counter,
    UserCard,
    BaseButton,
  },
  data() {
    return {
      message: 'Hello it works',
      listOfNumbers: [1, 2, 3, 4, 5],
      userData: {
        name: 'Ben',
        preferredFramework: 'vue',
        favoriteFood: 'sushi',
        favoriteNumbers: [5, 6, 7],
      },
    }
  },
  methods: {
    changeName() {
      this.userData.name = 'Charlie'
    },
  },
}
</script>

<template>
  <h1>Hello Frontend Masters!</h1>
  <div id="app">
    <BaseButton> Arrow Left - Hi </BaseButton>
    <UserCard :user="userData" @change-name="changeName" />
    <Counter />
    <div>
      <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
      <p v-else>Odd: {{ message }}</p>
      <ul>
        <li v-for="(number, index) in listOfNumbers" :key="index">{{ number * Math.random() }}</li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
