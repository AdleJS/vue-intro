<script lang="ts">
export default {
  data() {
    return {
      counterTitle: 'Counter',
      count: 0,
      incrementAmount: 10,
      message: 'Hello it works',
      listOfNumbers: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter very long'
      }

      return 'Counter'
    },
  },
  methods: {
    incrementCount() {
      this.count += this.incrementAmount
    },
  },
  watch: {
    count(value) {
      if (value > 20) {
        this.counterTitle += ' very long'
      }
    },
  },
}
</script>

<template>
  <h1>Hello Frontend Masters!</h1>
  <div id="app">
    <div>
      <h1>{{ displayTitle }}</h1>
      <p>{{ count }}</p>
      <button v-on:click="incrementCount">Increment count</button>
      <div>
        <label for="incrementAmount">Increment by:</label>
        <input type="number" v-model="incrementAmount" />
      </div>
      <hr />
    </div>
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
