<template>
  <RouterView />
</template>

<script setup lang="ts">
// Main app component now just renders the router view
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #f8fafc;
  color: #1e293b;
}

#app {
  min-height: 100vh;
}
</style>
