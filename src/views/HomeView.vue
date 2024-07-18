<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <PostsView />
  </div>
</template>

<script>
import PostsView from './PostsView.vue';  // Asegúrate de que esta ruta sea correcta

export default {
  name: 'HomeView',
  components: {
    PostsView
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
