<script lang="ts">
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ['change-name'],
}
</script>

<template>
  <h1>User: {{ user.name }}</h1>
  <p>Favorite Food: {{ user.favoriteFood }}</p>
  <button @click="$emit('change-name')">Change name</button>
</template>
