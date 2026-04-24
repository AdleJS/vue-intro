<script>
import Characters from '../components/Characters.vue'
import FavoriteCharacters from '../components/FavoriteCharacters.vue'
import Statistics from '../components/Statistics.vue'

export default {
  components: {
    Characters,
    FavoriteCharacters,
    Statistics,
  },
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
  <Characters :characters="characters" @add-favorite="addToFavorites" />
  <Statistics :totalAmount="totalAmount" />
  <FavoriteCharacters :favorites="favorites" />
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
