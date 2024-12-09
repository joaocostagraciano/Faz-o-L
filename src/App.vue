<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Séries de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  font-size: 1.2rem;
  padding-left: 2rem;
  background: linear-gradient(
      90deg,
      rgb(7, 148, 77) 0%,
      rgb(25, 112, 112) 100%
    );
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  
}

nav a {
  text-decoration: none;
  color: #ffffff;
  
}

</style>