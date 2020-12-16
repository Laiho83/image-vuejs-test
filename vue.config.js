module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/image-vuejs-test/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: 
        `@import "@/scss/styles.scss";`
      }
    }
  }
};