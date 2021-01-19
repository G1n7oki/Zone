<template>
  <div class="zone-navbar">
    <div class="logo">
      Logo
    </div>
    <router-link class="link" to="/">
      主页
    </router-link>
    <router-link class="link" to="/album">
      相册
    </router-link>
    <router-link class="link" to="/mood">
      心情
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
  .zone-navbar {
    display: flex;
    align-items: center;
    position: relative;
    height: 55px;
    background-color: #1f1f1f;
    padding: 0 20px;

    .logo {
      color: #fff;
      margin-right: 30px;
    }

    a {
      display: block;
      text-decoration: none;
      margin-right: 20px;
      color: rgba(255, 255, 255, .5);

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
