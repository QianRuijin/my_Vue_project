<template>
  <div class="wrap">
    <div class="order-list">
      <div class="order-item" v-for="item of list" :key="item.ordr_id">
        <div class="order-item-inner">
          <img class="item-img" :src="item.poi_pic" />
          <div class="item-right">
            <div class="item-top">
              <p class="order-name one-line">{{ item.poi_name }}</p>
              <div class="arrow"></div>
              <div class="order-state">{{ item.status_description }}</div>
            </div>
            <div class="item-bottom">
              <div
                class="product-item"
                v-for="(product, index) of item.product_list"
                :key="index"
              >
                {{ product.product_name }}
                <div class="p-conunt">x {{ product.product_count }}</div>
              </div>
              <div class="product-item">
                <span>...</span>
                <div class="p-total-count">
                  总计 {{ item.product_count }} 个菜，实付
                  <span class="total-price">￥ {{ item.total }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="evaluation clearfix" v-show="!item.is_comment">
          <div class="evaluation-btn">评价</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  props: {
    list: Array,
  },
};
</script>

<style>
.wrap {
  padding-bottom: 2.666667rem;
}

.order-item {
  border-top: 0.346667rem solid #efefef;
}

.order-item .order-item-inner {
  display: flex;
  padding-bottom: 0.48rem;
  border-bottom: 1px solid #e0e0e0;
}

.order-item .item-img {
  width: 1.066667rem;
  height: 1.066667rem;
  margin-top: 0.213333rem;
  margin-left: 0.426667rem;
  display: block;
  border-radius: 50%;
}

.order-item .item-right {
  flex: 1;
  margin-left: 0.4rem;
  font-size: 0.373333rem;
}

.order-item .item-top {
  height: 1.466667rem;
  padding-top: 0.053333rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}

.order-item .order-name {
  font-size: 0.426667rem;
  width: 4.8rem;
  height: 0.426667rem;
  font-weight: 600;
}

.order-item .arrow {
  width: 0.213333rem;
  height: 0.213333rem;
  border: 1px solid #999;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: 45deg;
}

.order-item .order-state {
  font-size: 0.373333rem;
  margin-left: 1.066667rem;
  color: #999;
}

.order-item .product-item {
  font-size: 0.373333rem;
  color: #666;
  margin-top: 0.32rem;
}

.order-item .p-conunt {
  float: right;
  margin-right: 0.4rem;
}

.order-item .p-total-count {
  float: right;
  margin-right: 0.4rem;
  font-size: 0.32rem;
}

.order-item .total-price {
  font-size: 0.373333rem;
  color: #151515;
  margin-left: 0.053333rem;
  letter-spacing: 0.026667rem;
}

.order-item .evaluation {
  padding-top: 0.266667rem;
  padding-bottom: 0.266667rem;
}

.order-item .evaluation-btn {
  float: right;
  width: 2.666667rem;
  height: 0.853333rem;
  color: #6b450a;
  background-color: #ffd161;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  text-align: center;
  margin-right: 0.266667rem;
}
</style>
