<template>
  <div class="introduction">
    <ul class="items">
      <li class="banner">
        <img class="banner-img" :src="info.pic_url" />
      </li>
      <li class="bulletin">
        <p>提示：</p>
        <p>{{ info.bulletin }}</p>
      </li>
    </ul>
    <ul class="items">
      <li class="address">地址：{{ info.address }}</li>
      <li class="tel">电话：{{ info.call_center }}</li>
      <li class="qualify">
        <a class="qualify_link" :href="qualify.url">
          {{ qualify.content }}
        </a>
      </li>
    </ul>
    <ul class="items">
      <li class="shipping_time">配送时间：{{ info.shipping_time }}</li>
      <li class="shipping_fee">配送费用：{{ info.shipping_fee }}</li>
      <li class="min_price">起送价格：{{ info.min_price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    info: Object,
    qualify: Object,
  },
};
</script>

<style scoped>
.introduction {
  background-color: #eee;
}

.items {
  border-bottom: 0.266667rem solid #eee;
  background-color: #fff;
}

.items li {
  height: 1.2rem;
  font-size: 0.36rem;
  position: relative;
  margin: 0 0.333333rem;
  border-bottom: 1px solid #e4e4e4;
  line-height: 1.2rem;
}

.items li:last-child {
  border: none;
}

.items .banner {
  height: 7rem;
}

.banner-img {
  width: 9.333333rem;
  height: 7rem;
}

.items .bulletin {
  display: flex;
  font-size: 0.3rem;
  line-height: 0.5rem;
  color: red;
}

.items .bulletin p:first-child {
  flex-shrink: 0;
  margin-right: 0.15rem;
}
</style>
