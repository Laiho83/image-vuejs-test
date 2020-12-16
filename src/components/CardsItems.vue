<template>
    <div class="card" @click="$emit('modal', item.card_url)">
      <div class="card-img">
        <img :src="item.card_url" :alt="'Image from '+item.author">
      </div>
      <div class="card-content l-flex">
        <div class="l-c"><p class="elipsis">{{ item.author }}</p></div>
        <div class="r-c"><p>{{ item.id }}</p></div>
      </div>
    </div>
</template>

<script>


export default {
  name: 'CardItems',
  props: ['item']
}
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    cursor: pointer;
    img {
      transition: transform .3s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.2);        
      }
    }
    .card-img {
      transition: transform .3s ease-in-out;
      overflow: hidden;      
    }
    .card-content {      
      justify-content: space-between;
      align-content: center;
      padding: 15px;
      .l-c {        
        width: 60%;
        text-align: left;
      }
    }
  }

  // Breakpoint 470px
  @include breakpoint-sm {
    .card-img {
      background: $primary-color;
      min-height: 267px;
    }
  }
</style>
