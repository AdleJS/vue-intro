<script></script>

<template>
  <header class="header">
    <span class="logo"> <img src="@/assets/vue-heart.png" width="30" />C'est La Vue </span>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="users">Users</RouterLink>
    </nav>
  </header>
  <RouterView />
  <Suspense>
    <component :is="renderPage" />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
