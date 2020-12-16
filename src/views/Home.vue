<template>
  <div class="home container l-flex">
    <Cards v-bind:items="items[this.activeItems]" v-on:modal="openModal"/>
    <Pagination v-bind:pageData="{
      itemsPerPage: itemsPerPage,
      maxPages: maxPages
    }" v-on:pagination="switchPage" />
    <ModalWindow v-bind:itemUrl="itemUrl" v-on:close="itemUrl = ''"/>
  </div>
</template>

<script>
import Cards from './../components/Cards';
import ApiService from './../services/apiService';
import ModalWindow from './../components/ModalWindow';
import Item from './../models/item.model';
import Pagination from './../components/Pagination';

export default {
  name: 'Home',
  components: {
    Cards,
    ModalWindow,
    Pagination
  },

  data() {
    return {
      items: [],
      itemUrl: '',
      itemsPerPage: 100,
      maxPages: 10,
      activeItems: 0,
    }
  },
  methods: {
    openModal(url) {
      this.itemUrl = url;
    },
    switchPage(page) {
      if(page) {
        if(this.items.length < page) {
          this.getImages(page);
        }
        this.updateIndex(page);
      }
    },
    getImages(page) {
      ApiService.getImages(page, this.itemsPerPage)
        .then(data => {
          this.items.push(data.map(e => new Item(e)));
        })
        .catch(err => console.log(err));
    },
    updateIndex(page) {
      this.activeItems = page - 1;
    }
  },
  created() {
   this.switchPage(1);
  }
}
</script>
