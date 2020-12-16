<template>
    <header class="header">
      <h1>Image VueJs test</h1>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .header {
    background: $primary-color;    
    text-align: center;
    margin-bottom: 25px;
    padding: 15px;
    h1 {
      color: $white-color;
    }
  }
</style>