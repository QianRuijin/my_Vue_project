<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  methods: {
    handleCityClick(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/");
      this.keyword = "";
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, { click: true });
  },
  updated() {
    this.scroll.refresh();
  },
};
</script>

<style lang="stylus" scoped>
@import '~style/varibless.styl'
.search
  height .72rem
  padding 0 .1rem
  font-size: .4rem
  background $bgColor
  .search-input
    box-sizing border-box
    padding 0 .1rem
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  z-index 1
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    font-size: .36rem
    color #666
    background #fff
</style>
