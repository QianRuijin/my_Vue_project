<template>
  <div class="">
    <shop-header></shop-header>
    <menu-left :spuTags="foodSpus"></menu-left>
    <shop-bar></shop-bar>
  </div>
</template>

<script>
import ShopHeader from "../../common/shopheader/ShopHeader.vue";
import MenuLeft from "./components/MenuLeft.vue";
import ShopBar from "./components/ShopBar.vue";
import axios from "axios";
export default {
  components: { ShopHeader, MenuLeft, ShopBar },
  name: "Menu",
  data() {
    return {
      foodSpus: [],
    };
  },
  methods: {
    getData() {
      axios.get("/api/food.json").then((res) => {
        this.$store.commit("getMenu", res.data.data.food_spu_tags);
        this.$store.commit("getFee", res.data.data.poi_info.shipping_fee);
        this.foodSpus = this.$store.state.menu;
        // console.log(this.foodSpus);
        // console.log(this.$store.state.menu);
        // console.log(this.$store.state.fee);
      });
    },
    getShop() {
      let shopName = this.$route.query.shop;
      // console.log(shopName);
      // console.log(this.$route.path);

      if (shopName) {
        this.$store.commit("getShop", shopName);
      }
    },
  },
  mounted() {
    this.getData();
    this.getShop();
  },
  watch: {
    $route() {
      this.getShop();
    },
  },
};
</script>

<style scoped></style>
