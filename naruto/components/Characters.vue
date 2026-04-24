<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  emits: ['add-favorite'],
}
</script>

<template>
  <h1>Characters of Naruto</h1>
  <p v-if="!characters">No characters to display</p>
  <div v-else>
    <div v-for="character in characters" :key="`${character} - ${Math.random()}`">
      <h2>{{ character.name }}</h2>
      <h4>Village: {{ character.village }}</h4>
      <h4>Rank: {{ character.rank }}</h4>
      <button @click="$emit('add-favorite', character)">Add to favorites</button>
    </div>
  </div>
  <hr />
</template>
