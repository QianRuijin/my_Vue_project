<template>
  <div class="category-content">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="category-item" v-for="(item, index) of page" :key="index">
          <img class="item-icon" :src="item.url" />
          <p class="item-name">{{ item.name }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeCategory",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style>
.category-content {
  height: 4.693333rem;
  padding-bottom: 0.266667rem;
}

.category-content .category-item {
  float: left;
  width: 25%;
  padding-top: 0.373333rem;
  font-size: 0.346667rem;
  text-align: center;
}

.category-content .item-icon {
  width: 1.253333rem;
}

.category-content .item-name {
  margin-top: 0.373333rem;
}
</style>
