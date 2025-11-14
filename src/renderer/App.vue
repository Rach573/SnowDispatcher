<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { logout } from './utils/auth';

// Ensure the current user is logged out when the window is closed or reloaded.
const handleUnload = () => {
  try {
    logout();
  } catch (e) {
    // ignore
  }
};

onMounted(() => {
  window.addEventListener('beforeunload', handleUnload);
  window.addEventListener('unload', handleUnload);
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleUnload);
  window.removeEventListener('unload', handleUnload);
});
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
