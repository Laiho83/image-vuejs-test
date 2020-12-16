<template>
  <div class="test">
    <Header />    
    <router-view/>
    <Footer />    
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

export default {
  name:"app",
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
}

</style>
