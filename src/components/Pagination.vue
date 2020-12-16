<template>
  <div class="pagination l-flex">
    <div class="prev" @click="$emit('pagination', goToPage(-1))">
      <span></span>
    </div>
    <div class="page l-flex">
      {{ activePage }}
    </div>
    <div class="next"  @click="$emit('pagination', goToPage(1))">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  components: {

  },
  data() {
    return {
      activePage: 1
    }
  },
  props: ['pageData'],
  methods: {
    goToPage(direction) {
      const nextPage = this.activePage + direction;
      if (nextPage > this.pageData.maxPages || nextPage < 1) {
        return null;
      }
      return this.activePage = nextPage < this.pageData.maxPages 
                                ? nextPage 
                                : this.pageData.maxPages;
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination {
    width: 100%;
    width: 200px;
    justify-content: space-between;
    margin: 25px auto;
    .prev,
    .next {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      background: $primary-color;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
      cursor: pointer;
      span {
        display: block;
        width: 40%;
        height: 40%;
        border-left: 4px solid $secondary-color;
        border-top: 4px solid $secondary-color;
        transform-origin: center;
        transform: rotate(-45deg);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
      }
    }
    .next {
      span {
        transform: rotate(135deg);
      }
    }
    .page {      
      align-items: center;
      width: 50px;
      height: 35px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      font-weight: bold;
    }
  }
</style>