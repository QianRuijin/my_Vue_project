<template>
  <div>
    <div class="nav" @click="toTop()">
      <router-link to="/">
        <span class="iconfont back-icon">&#xe62e;</span>
      </router-link>
      <h4 class="title" v-if="shopName">{{ shopName }}</h4>
      <h4 class="title" v-else>{{ "深圳麦当劳" }}</h4>
    </div>
    <div class="tab-bar">
      <router-link to="/menu" class="menu tab-item">点菜</router-link>
      <router-link to="/comment" class="comment tab-item">评价</router-link>
      <router-link to="/restanurant" class="reatanurant tab-item">
        商家
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopHeader",
  computed: {
    ...mapState({
      shopName: "shop",
    }),
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.nav {
  height: 1.706667rem;
  line-height: 1.70667rem;
  width: 100%;
  border-bottom: 1px solid #b2b2b2;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #ffd161;
  font-size: 0.453333rem;
  color: #333;
  text-align: center;
}

.nav .back-icon {
  position: absolute;
  left: 0.32rem;
  font-size: 0.6rem;
  color: #666;
}

.tab-bar {
  font-size: 0.426667rem;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  margin-top: 1.706667rem;
  background-color: #fff;
}

.tab-bar .tab-item {
  flex: 1;
  height: 1.2rem;
  line-height: 1.2rem;
  position: relative;
  color: #666;
  text-align: center;
  text-decoration: none;
}

.tab-bar .tab-item.router-link-exact-active::after {
  content: " ";
  display: block;
  height: 0.106667rem;
  width: 1.6rem;
  position: absolute;
  bottom: 0;
  background-color: #ffd161;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
</style>
