<template>
  <div>
    <div class="list-content">
      <h4 class="list-title">
        <span class="title-line"></span>
        <span>附近商家</span>
        <span class="title-line"></span>
      </h4>
      <div class="list-wrap">
        <div
          class="list-item-content"
          v-for="item of list"
          :key="item.id"
          @click="showShop(item.name)"
        >
          <img class="item-img" :src="item.pic_url" />
          <div class="brand brand-pin" v-if="item.brand_type">品牌</div>
          <div class="brand brand-xin" v-else>新到</div>
          <div class="item-info-content">
            <p class="item-title">{{ item.name }}</p>
            <div class="item-desc clearfix">
              <score-star
                :score="item.wm_poi_score"
                class="item-score"
              ></score-star>
              <div class="item-count" v-if="item.month_sale_num > 999">
                月售 999+
              </div>
              <div class="item-count" v-else>
                月售 {{ item.month_sale_num }}
              </div>
              <div class="item-distance">{{ item.distance }}</div>
              <div class="item-time">{{ item.mt_delivery_time }}&nbsp;|</div>
            </div>
            <div class="item-price">
              <div class="item-pre-price">{{ item.min_price_tip }}</div>
            </div>
            <div
              class="item-others"
              v-for="tag of item.discounts2"
              :key="tag.id"
            >
              <div class="other-info">
                <img class="other-tag" :src="tag.icon_url" />
                <p class="other-content one-line">{{ tag.info }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreStar from "../../../common/score/Star";
export default {
  name: "HomeList",
  props: {
    list: Array,
  },
  components: {
    ScoreStar,
  },
  methods: {
    showShop(shopName) {
      this.$router.push("/menu?shop=" + shopName);
    },
  },
};
</script>

<style>
.list-content {
  overflow: hidden;
  padding-bottom: 1.333333rem;
}

.list-content .list-title {
  text-align: center;
  font-size: 0.426667rem;
  margin-top: 0.373333rem;
  margin-bottom: 0.133333rem;
}

.list-content .title-line {
  display: inline-block;
  border-bottom: 1px solid #949494;
  height: 1px;
  width: 0.8rem;
  margin: 0.106667rem;
}

.list-item-content {
  display: flex;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin: auto 0.266667rem;
  color: #656565;
  position: relative;
}

.list-item-content .item-img {
  width: 2.293333rem;
  height: 1.733333rem;
  border: 1px solid #e4e4e4;
}

.list-item-content .item-info-content {
  flex: 1;
  margin-left: 0.186667rem;
  overflow: hidden;
}

.list-item-content .brand {
  position: absolute;
  left: 1px;
  top: 0.426667rem;
  font-size: 0.32rem;
  padding: 0.053333rem;
  color: #fff;
}

.list-item-content .brand-pin {
  background-color: #ffa627;
}

.list-item-content .brand-xin {
  background-color: #21c56c;
}

.list-item-content .item-title {
  margin-top: 0.08rem;
  font-size: 0.426667rem;
  font-weight: 500;
  color: #333;
}

.list-item-content .item-desc {
  margin-top: 0.346667rem;
  font-size: 0.36rem;
  line-height: 00.36rem;
}

.list-item-content .item-count {
  float: left;
  margin-left: 0.133333rem;
}

.list-item-content .item-time {
  float: right;
}

.list-item-content .item-distance {
  float: right;
  margin-left: 0.106667rem;
}

.list-item-content .item-score {
  float: left;
  color: #ffd161;
  position: relative;
  top: -0.04rem;
}

.list-item-content .item-price {
  margin-top: 0.266667rem;
  font-size: 0.32rem;
  height: 0.64rem;
}

.list-item-content .other-info {
  color: #898989;
  margin-top: 0.186667rem;
  font-size: 0.32rem;
  display: flex;
}

.list-item-content .other-tag {
  width: 0.373333rem;
  height: 0.373333rem;
}

.other-content {
  margin-left: 0.08rem;
  height: 0.373333rem;
  width: 6.133333rem;
  margin-top: 0.026667rem;
}
</style>
