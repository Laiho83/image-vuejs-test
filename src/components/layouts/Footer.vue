<template>
    <footer class="footer">
      <p>&copy; All rights reserved</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .footer {
    background: $secondary-color;    
    text-align: center;
    margin-top: 25px;
    padding: 10px;
    p {
      margin: 0;
      font-weight: bold;
    }
  }
</style>