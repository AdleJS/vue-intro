<script lang="ts">
export default {
  data() {
    return {
      counterTitle: 'Counter',
      count: 0,
      incrementAmount: 10,
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
</template>
