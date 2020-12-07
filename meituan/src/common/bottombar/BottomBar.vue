<template>
  <div class="bottom-bar">
    <router-link to="./" class="home btn-item">
      <div class="btn-icon"></div>
      <div class="btn-name">首页</div>
    </router-link>
    <router-link to="./order" class="order btn-item">
      <div class="btn-icon"></div>
      <div class="btn-name">订单</div>
    </router-link>
    <router-link to="/my" class="my btn-item">
      <div class="btn-icon"></div>
      <div class="btn-name">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Bottombar",
  computed: {},
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.333333rem;
  display: flex;
  border-top: 1px solid #b6b6b6;
  background-color: #f6f6f6;
}

.bottom-bar .btn-item {
  flex: 1;
  display: flex;
  font-size: 0.293333rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
}

.bottom-bar .btn-icon {
  margin-bottom: 0.106667rem;
  width: 0.666667rem;
  height: 0.666667rem;
  background-size: cover;
}

.bottom-bar .home.btn-item .btn-icon {
  background-image: url("../../assets/img/homeIcon.png");
}

.bottom-bar .my.btn-item .btn-icon {
  background-image: url("../../assets/img/myIcon.png");
}

.bottom-bar .order.btn-item .btn-icon {
  background-image: url("../../assets/img/orderIcon.png");
}

.bottom-bar .btn-item.router-link-exact-active {
  color: #000;
}

.bottom-bar .home.btn-item.router-link-exact-active .btn-icon {
  background-image: url("../../assets/img/homeIconActive.png");
}

.bottom-bar .my.btn-item.router-link-exact-active .btn-icon {
  background-image: url("../../assets/img/myIconActive.png");
}

.bottom-bar .order.btn-item.router-link-exact-active .btn-icon {
  background-image: url("../../assets/img/orderIconActive.png");
}
</style>
