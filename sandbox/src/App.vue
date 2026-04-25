<script lang="ts">
export default {
  data() {
    return {
      pokedex: [1, 2, 3],
    }
  },
  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150').then((response) =>
        response.json(),
      )
    },
  },
  created() {
    this.fetchPokemon()
  },
}
</script>

<template>
  <h1>New App</h1>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">Get Pokemons</button>
</template>

<style scoped></style>
