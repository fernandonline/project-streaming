<script setup>
import { RouterLink } from 'vue-router';
import Logo from '../assets/applogo.png';
</script>

<template>
  <div class="header">
    <RouterLink to="/">
      <img :src="Logo" alt="app-logo" />
    </RouterLink>

    <RouterLink to="/">
      <h1>Spotfy</h1>
    </RouterLink>
 </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
}

img {
    max-width: 100%;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
