<template>
  <div class="zone-wrapper">
    <Navbar />
    <Signature />
    <Main />
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar'
import Signature from '@/layout/Signature'
import Main from '@/layout/Main'
export default {
  name: 'Album-Wrapper',
  components: {
    Navbar,
    Signature,
    Main
  }
}
</script>

<style scoped>

</style>
