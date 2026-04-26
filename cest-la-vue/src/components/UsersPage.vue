<script setup>
const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
  response.json(),
)
</script>

<template>
  <main>
    <h1>Users</h1>
    <div v-for="user in users" :key="user.id" class="user-card">
      <h3>{{ user.name }}</h3>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Company: {{ user.company.name }}</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}
main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

.user-card {
  margin-bottom: 20px;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
}
</style>
