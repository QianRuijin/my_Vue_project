<template>
  <div class="right-content">
    <p class="right-title">{{ tag }}</p>
    <div class="right-list" ref="rightList">
      <div class="right-list-inner" ref="rightInner">
        <div class="menu-item" v-for="item of sups" :key="item.id">
          <img class="menu-img" :src="item.picture" />
          <div class="menu-item-right">
            <p class="item-title">{{ item.name }}</p>
            <p class="item-desc">{{ item.description }}</p>
            <p class="item-zan">{{ item.praise_content }}</p>
            <p class="item-price">
              ￥ {{ item.min_price }}
              <span class="unit">/{{ item.unit }}</span>
            </p>
          </div>
          <div class="select-content">
            <div class="minus" @click="decreaseNum(item)"></div>
            <div class="count">{{ item.chooseCount || 0 }}</div>
            <div class="plus" @click="increaseNum(item)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuRight",
  props: {
    sups: Array,
    tag: String,
  },
  methods: {
    increaseNum(item) {
      if (!item.chooseCount) {
        this.$set(item, "chooseCount", 0);
      }
      item.chooseCount++;
      // console.log(item);
      // console.log(this.$store.state.menu);
    },
    decreaseNum(item) {
      if (!item.chooseCount || item.chooseCount == 0) return;
      item.chooseCount--;
    },
  },
  watch: {
    tag() {
      // console.log(this.$refs.rightInner.offsetHeight);
      // console.log(this.$refs.rightInner.scrollHeight);
      // console.log(this.$refs.rightInner.scrollTop);
      // console.log(this.$refs.rightList.offsetHeight);
      // console.log(this.$refs.rightList.scrollHeight);
      // console.log(this.$refs.rightList.scrollTop);
      this.$refs.rightList.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.right-content {
  flex: 1;
  margin-left: 0.266667rem;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}

.right-content .right-list {
  height: 100%;
  overflow: auto;
}

.right-content .right-list-inner {
  font-size: 0.426667rem;
  padding-bottom: 2.266667rem;
}

.right-content .right-title {
  font-size: 0.346667rem;
  color: #333;
  margin-top: 0.266667rem;
  padding-left: 0.106667rem;
  border-left: 0.053333rem solid #ffd161;
}

.right-content .menu-item {
  display: flex;
  padding-top: 0.666667rem;
  padding-bottom: 0.666667rem;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}

.right-content .menu-item .menu-img {
  width: 1.653333rem;
  height: 1.653333rem;
  margin-right: 0.266667rem;
}

.right-content .menu-item-right {
  flex: 1;
}

.right-content .item-title {
  font-size: 0.426667rem;
  color: #2f2f2f;
}

.item-zan,
.item-desc {
  color: #a9a9a9;
  font-size: 0.32rem;
  margin-top: 0.16rem;
  line-height: 0.373333rem;
  padding-right: 0.106667rem;
}

.right-content .menu-item-right .item-desc {
  line-height: 0.453333rem;
}

.right-content .item-price {
  margin-top: 0.266667rem;
  color: #fe4d3d;
  font-size: 0.48rem;
}

.right-content .unit {
  color: #a9a9a9;
  font-size: 0.32rem;
}

.right-content .select-content {
  position: absolute;
  right: 0.24rem;
  bottom: 0.56rem;
  display: flex;
}

.right-content .plus {
  width: 0.666667rem;
  height: 0.666667rem;
  background-image: url("../../../assets/img/plus.png");
  background-size: cover;
}

.right-content .minus {
  width: 0.666667rem;
  height: 0.666667rem;
  background-image: url("../../../assets/img/minus.png");
  background-size: cover;
}

.right-content .count {
  font-size: 0.4rem;
  color: #2f2f2f;
  width: 0.666667rem;
  height: 0.666667rem;
  line-height: 0.666667rem;
  margin-left: 0.053333rem;
  margin-right: 0.053333rem;
  text-align: center;
}
</style>
