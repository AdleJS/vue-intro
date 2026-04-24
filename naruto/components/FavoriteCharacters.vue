<script>
export default {
  props: {
    favorites: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <h1>Favorite characters</h1>
  <p v-if="!favorites">No characters to display</p>
  <div v-else>
    <div v-for="character in favorites" :key="`${character} - ${Math.random()}`">
      <h2>{{ character.name }}</h2>
      <h4>Village: {{ character.village }}</h4>
      <h4>Rank: {{ character.rank }}</h4>
    </div>
  </div>
  <hr />
</template>
