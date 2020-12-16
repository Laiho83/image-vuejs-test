<template>
  <div class="app-page">
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
// ** Fonts
@font-face {
  font-family: 'Roboto';
  src: url('./fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: 'RobotoMedium';
  src: url('./fonts/Roboto/Roboto-Medium.ttf') format('truetype');
  font-weight: 700;
  font-display: swap;
  font-style: normal;
}
  .home {
    flex: 2;
    padding: 25px 0;
  }
  .footer {
    margin-top: auto;
  }
</style>
