<template>
  <div>
    <div class="shop-bar">
      <div class="choose-content" :class="{ hide: ishide }">
        <div class="content-top">
          <div class="clear-car" @click="clearNum()">清空购物车</div>
        </div>
        <div v-for="item of this.$store.state.menu" :key="item.tag">
          <div v-for="food of item.spus" :key="food.id">
            <div class="choose-item" v-if="food.chooseCount">
              <div class="item-name">{{ food.name }}</div>
              <div class="price">
                ￥<span class="total">{{
                  food.min_price * food.chooseCount
                }}</span>
              </div>
              <div class="select-content">
                <div class="minus" @click="decreaseNum(food)"></div>
                <div class="count">{{ food.chooseCount }}</div>
                <div class="plus" @click="increaseNum(food)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-content">
        <div class="shop-icon" @click="maskToggle()">
          <div class="dot-num" v-show="totalNum > 0">{{ totalNum }}</div>
        </div>
        <div class="price-content" @click="maskToggle()">
          <p class="total-price">
            ￥<span class="total-price-span">{{ totalPrice }}</span>
          </p>
          <p class="other-price">
            另需配送&nbsp;￥<span class="shipping-fee">{{ fee }}</span>
          </p>
        </div>
        <div class="submit-btn">去结算</div>
      </div>
    </div>
    <div class="mask" :class="{ hide: ishide }"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopBar",
  data() {
    return {
      ishide: true,
    };
  },
  methods: {
    maskToggle() {
      this.ishide = !this.ishide;
    },
    clearNum() {
      this.$store.state.menu.forEach((item) => {
        item.spus.forEach((food) => {
          if (food.chooseCount) {
            food.chooseCount = 0;
          }
        });
      });
    },
    increaseNum(item) {
      if (!item.chooseCount) {
        this.$set(item, "chooseCount", 0);
      }
      item.chooseCount++;
    },
    decreaseNum(item) {
      if (!item.chooseCount || item.chooseCount == 0) return;
      item.chooseCount--;
    },
  },
  computed: {
    ...mapState({
      fee: "fee",
    }),
    totalNum() {
      let totalNum = 0,
        menu = this.$store.state.menu;
      menu.forEach((item) => {
        item.spus.forEach((food) => {
          if (food.chooseCount) {
            totalNum += food.chooseCount;
          }
        });
      });
      return totalNum;
    },
    totalPrice() {
      let totalPrice = 0;
      this.$store.state.menu.forEach((item) => {
        item.spus.forEach((food) => {
          if (food.chooseCount) {
            totalPrice += food.chooseCount * food.min_price;
          }
        });
      });
      return totalPrice;
    },
  },
};
</script>

<style scoped>
.shop-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

.shop-bar .bottom-content {
  height: 1.333333rem;
  display: flex;
  background-color: rgba(51, 51, 51, 0.9);
}

.shop-bar .shop-icon {
  width: 1.466667rem;
  height: 1.466667rem;
  background-image: url("../../../assets/img/shop-icon.png");
  background-size: cover;
  margin-top: -0.4rem;
  margin-left: 0.32rem;
  position: relative;
}

.shop-bar .price-content {
  flex: 1;
  padding-top: 0.213333rem;
  padding-left: 0.186667rem;
}

.shop-bar .total-price {
  font-size: 0.533333rem;
  color: #fff;
}

.shop-bar .other-price {
  font-size: 0.32rem;
  color: #999;
  margin-top: 0.053333rem;
}

.shop-bar .dot-num {
  position: absolute;
  background-color: #fb4e44;
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.32rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  right: 0;
  top: 0.053333rem;
  text-align: center;
  line-height: 0.4rem;
}

.shop-bar .submit-btn {
  width: 2.933333rem;
  height: 100%;
  background-color: #ffd161;
  color: #333;
  font-size: 0.426667rem;
  line-height: 1.333333rem;
  text-align: center;
}

.choose-content {
  background-color: #fff;
  max-height: 15rem;
  overflow: auto;
}

.choose-content .content-top {
  height: 0.933333rem;
  background-color: #f4f4f4;
  font-size: 0.293333rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.choose-content .clear-car {
  margin-left: 0.266667rem;
  margin-right: 0.133333rem;
  float: left;
  position: relative;
}

.choose-content .clear-car::after {
  content: " ";
  width: 0.346667rem;
  height: 0.346667rem;
  display: block;
  background-image: url("../../../assets/img/clear.jpeg");
  background-size: cover;
  position: absolute;
  top: -0.026667rem;
  left: -0.373333rem;
}

.choose-content .choose-item {
  display: flex;
  font-size: 0.4rem;
  color: #2f2f2f;
  height: 0.933333rem;
  align-items: center;
  padding-top: 0.266667rem;
  padding-bottom: 0.266667rem;
  border-bottom: 1px solid #ddd;
}

.choose-content .choose-item .price {
  margin-left: 0.133333rem;
  margin-right: 0.666667rem;
}

.choose-content .choose-item .item-name {
  flex: 1;
  padding-left: 0.266667rem;
}

.choose-content .select-content {
  position: relative;
  margin-right: 0.213333rem;
  display: flex;
}

.choose-content .plus {
  width: 0.666667rem;
  height: 0.666667rem;
  background-image: url("../../../assets/img/plus.png");
  background-size: cover;
}

.choose-content .minus {
  width: 0.666667rem;
  height: 0.666667rem;
  background-image: url("../../../assets/img/minus.png");
  background-size: cover;
}

.choose-content .count {
  font-size: 0.4rem;
  color: #2f2f2f;
  width: 0.666667rem;
  height: 0.666667rem;
  line-height: 0.666667rem;
  margin-left: 0.053333rem;
  margin-right: 0.053333rem;
  text-align: center;
}

.hide {
  display: none;
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
