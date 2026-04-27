import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const users = ref([])

  async function fetchUsers() {
    users.value = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json(),
    )
  }

  fetchUsers()

  return { users }
})
