<template>
  <div class="main">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
  .main {
    width: 100%;
    height: calc(100vh - 500px);
    box-sizing: border-box;
    padding: 0 30px;
  }
</style>
