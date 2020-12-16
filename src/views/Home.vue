<template>
  <div class="home container l-flex">
    <Cards v-bind:items="items[this.activeItems]" v-on:modal="openModal"/>
    <Pagination 
      v-bind:pageData="{
        itemsPerPage: itemsPerPage,
        maxPages: maxPages
      }" 
      v-on:pagination="switchPage" />
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
      itemsPerPage: 99,
      maxPages: 10,
      activeItems: 0,
    }
  },
  methods: {
    // Call to modal component.
    openModal(url) {
      this.itemUrl = url;
    },
    // On pagination action, get the next active page.
    switchPage(page) {
      if(page) {
        if(this.items.length < page) {
          this.getImages(page);
        }
        this.updateIndex(page);
      }
    },
    // Api call (Http request) and push data to item callection.
    getImages(page) {
      ApiService.getImages(page, this.itemsPerPage)
        .then(data => {
          this.items.push(data.map(e => new Item(e)));
        })
        .catch(err => console.log(err));
    },
    // Update number of active index in item array.
    updateIndex(page) {
      this.activeItems = page - 1;
    }
  },
  created() {
   this.switchPage(1);
  }
}
</script>
