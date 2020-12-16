<template>
  <div id="modal" v-bind:class="{'active':itemUrl.length>1}">
    <span class="close" @click="$emit('close', '')">&times;</span>
    <div class="modal-content">
      <img class="" :src="itemUrl" :alt="itemUrl">
    </div>  
    
  </div>
</template>

<script>
export default {
  name: 'ModaleWindow',
  components: {},
  props: ['itemUrl'],
  methods: {
    closeModal() {
      
    }
  }
}
</script>

<style scoped lang="scss">
  #modal {
    display: flex;   
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9);
    z-index: -1;
    opacity: 0;
    transition: all .3s ease-in-out;
    &.active {
      z-index: 999;
      opacity: 1;
      .modal-content {
        transform: scale(1);
      }
    }
    .modal-content {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      transform: scale(0);
      transition: all .3s ease-in-out;
      img {
        width: auto;
      }
    }
    .close {
      position: absolute;
      top: 15px;
      right: 35px;
      color: #f1f1f1;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
      cursor: pointer;
    }
  }
</style>