<template>
  <div>
    <shop-header></shop-header>
    <shop-info :info="shopInfo" :qualify="qualifyInfo"></shop-info>
  </div>
</template>

<script>
import ShopHeader from "../../common/shopheader/ShopHeader.vue";
import ShopInfo from "./components/ShopInfo.vue";
import axios from "axios";
export default {
  components: { ShopHeader, ShopInfo },
  name: "Restanurant",
  data() {
    return {
      shopInfo: {},
      qualifyInfo: {},
    };
  },
  methods: {
    getData() {
      axios.get("/api/restanurant.json").then((res) => {
        this.shopInfo = res.data.data;
        this.qualifyInfo = this.shopInfo.poi_qualify_info;
        // console.log(this.shopInfo);
        // console.log(this.qualifyInfo);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
