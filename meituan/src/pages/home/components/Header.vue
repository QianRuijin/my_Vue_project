<template>
  <div class="header">
    <div class="search-bar">
      <router-link to="./city">
        <div class="bar-location">
          <span class="location-icon iconfont">&#xe679;</span>
          <span class="location-text">{{ this.city }}</span>
          <span class="location-arrow iconfont">&#xe604;</span>
        </div>
      </router-link>
      <div class="search-btn">
        <span class="search-icon iconfont">&#xe69e;</span>
        <input type="text" placeholder="鸡翅" class="search-input" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style scoped>
/*头部样式*/
.header {
  width: 10rem;
  height: 4.533333rem;
  background: url("../../../assets/img/header.jpg") no-repeat;
  background-size: cover;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.2133333rem;
  width: 100%;
  height: 1.066667rem;
}

.bar-location {
  position: relative;
  margin-right: 0.533333rem;
  border-radius: 0.346667rem;
  background-color: rgba(0, 0, 0, 0.33);
  width: 2.453333rem;
  height: 0.746667rem;
  line-height: 0.746667rem;
  color: #fff;
  text-align: center;
}

.location-icon {
  position: absolute;
  left: 0.15rem;
  font-size: 0.5rem;
}

.location-text {
  display: inline-block;
  font-size: 0.346667rem;
  vertical-align: 0.35rem;
}

.location-arrow {
  position: absolute;
  right: 0.15rem;
  font-size: 0.5rem;
}

.search-btn {
  position: relative;
  width: 4.533333rem;
  height: 0.8rem;
  background: #fff;
  border-radius: 0.533333rem;
}

.search-icon {
  position: absolute;
  left: 0.27rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
}

.search-input {
  position: absolute;
  top: 0;
  left: 0.72rem;
  width: 3.3rem;
  height: 0.773333rem;
  border: none;
  outline: none;
  font-size: 0.4rem;
  color: #333;
}

.search-input::-webkit-input-placeholder {
  color: #a9a9a9;
}

.search-input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #a9a9a9;
}

.search-input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #a9a9a9;
}

.search-input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a9a9a9;
}
</style>
