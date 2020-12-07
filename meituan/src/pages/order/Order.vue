<template>
  <div>
    <order-header></order-header>
    <order-list :list="orderList"></order-list>
    <loading-circle v-show="isLoading"></loading-circle>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import OrderHeader from "./components/Header";
import OrderList from "./components/list";
import LoadingCircle from "../../common/loading/Loading";
import BottomBar from "../../common/bottombar/BottomBar.vue";
import axios from "axios";
export default {
  name: "Order",
  components: {
    OrderHeader,
    OrderList,
    LoadingCircle,
    BottomBar,
  },
  data() {
    return {
      orderList: [],
      isLoading: true,
    };
  },
  methods: {
    getData() {
      axios.get("/api/orders.json").then((res) => {
        this.orderList = res.data.data.digestlist;
        this.isLoading = false;
        // console.log(this.orderList);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="stylus"></style>
