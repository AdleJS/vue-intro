<script>
export default {
  data() {
    return {
      characterName: '',
      characterVillage: '',
      characterRank: '',
      characters: [
        {
          name: 'Naruto',
          village: 'Leaf',
          rank: 'Hokage',
        },
        {
          name: 'Orochimaru',
          village: 'Sound',
          rank: 'Sennin',
        },
        {
          name: 'Gaara',
          village: 'Sand',
          rank: 'Hokage',
        },
      ],
      favorites: [],
    }
  },
  computed: {
    totalAmount() {
      let total = 0
      for (let character of this.characters) {
        total += 1
        console.log(character)
      }

      return total
    },
  },
  methods: {
    addToFavorites(character) {
      this.favorites.push(character)
    },
    addCharacter() {
      this.characters.push({
        name: this.characterName,
        village: this.characterVillage,
        rank: this.characterRank,
      })
    },
  },
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
      <button @click="addToFavorites(character)">Add to favorites</button>
    </div>
  </div>
  <hr />
  <h1>Statistics</h1>
  <p>Total amount: {{ totalAmount }}</p>
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
  <div>
    <h1>Create Character</h1>
    <label for="character-name">Character Name:</label>
    <input type="text" v-model="characterName" />
    <label for="character-village">Character Village:</label>
    <input type="text" v-model="characterVillage" />
    <label for="character-rank">Character Rank:</label>
    <input type="text" v-model="characterRank" />
    <button @click="addCharacter">Create</button>
  </div>
</template>

<style scoped></style>
