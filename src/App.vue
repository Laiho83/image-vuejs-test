<template>
  <div class="page">
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
.page {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  min-height: 100vh;
  .home {
    flex: 2;
    padding: 25px 0;
  }
  .footer {
    margin-top: auto;
  }
}
</style>
