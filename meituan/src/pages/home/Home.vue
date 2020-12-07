<template>
  <div>
    <home-header></home-header>
    <home-category :list="categoryList"></home-category>
    <home-list :list="storeList"></home-list>
    <loading-circle v-show="isLoading"></loading-circle>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeCategory from "./components/Category";
import HomeList from "./components/List";
import LoadingCircle from "../../common/loading/Loading";
import BottomBar from "../../common/bottombar/BottomBar";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeCategory,
    HomeList,
    LoadingCircle,
    BottomBar,
  },
  data() {
    return {
      categoryList: [],
      storeList: [],
      isLoading: true,
    };
  },
  methods: {
    getData() {
      axios.get("/api/head.json").then((res) => {
        this.categoryList = res.data.data.primary_filter;
        // console.log(this.categoryList);
      });
      axios.get("/api/homelist.json").then((res) => {
        this.storeList = res.data.data.poilist;
        this.isLoading = false;
        // console.log(this.storeList);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
