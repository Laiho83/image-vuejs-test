<template>
  <div class="cards l-flex">
    <div class="item" v-bind:key="item.id" v-for="item in items">
      <CardItems v-bind:item="item" v-on:modal="$emit('modal', item.card_url)"/>
    </div>
  </div>  
</template>

<script>
import CardItems from './CardsItems';

export default {
  name: 'Cards',
  components: {
    CardItems
  },
  props: ['items'] 
}
</script>  

<style scoped lang="scss">
  .cards {
    .item {
      width: 100%;
      height: auto;
      margin: 25px 0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    }
  }


  // Breakpoint 470px
  @include breakpoint-sm {
    .cards {
      .item {
        width: 367px;
        margin: 25px;
      }
    }
  }
</style>