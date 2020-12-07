<template>
  <div>
    <div class="my">
      <div class="header">
        <img
          class="avatar"
          src="http://i.waimai.meituan.com/static/img/default-avatar.png"
        />
        <p class="nickname">美团小骑手 &gt;</p>
      </div>
      <div class="content">
        <ul class="items">
          <li class="address">
            <span class="iconfont">&#xe679;</span> 收货地址管理
          </li>
          <li class="money">
            <span class="iconfont">&#xe60a;</span> 商家代金券
          </li>
        </ul>
        <ul class="items">
          <li class="email"><span class="iconfont">&#xe6b4;</span> 意见反馈</li>
          <li class="question">
            <span class="iconfont">&#xe7e0;</span> 常见问题
          </li>
        </ul>
        <p class="tel">客服电话:&nbsp;101-097-77</p>
        <p class="time">服务时间:&nbsp;9:00-23:00</p>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from "../../common/bottombar/BottomBar.vue";
export default {
  components: { BottomBar },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 4.266667rem;
  background-image: url("../../assets/img/header.png");
  background-size: cover;
  overflow: hidden;
}

.avatar {
  width: 1.92rem;
  height: 1.92rem;
  margin: 0 auto;
  display: block;
  border: 0.08rem solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-top: 0.666667rem;
}

.nickname {
  color: #333;
  font-size: 0.426667rem;
  text-align: center;
  margin-top: 0.4rem;
}

.content {
  min-height: 13.52rem;
}

.items {
  border-bottom: 0.266667rem solid #eee;
  background-color: #fff;
}

.items .iconfont {
  margin-right: 0.2rem;
  font-size: 0.46rem;
  color: #aaa;
  vertical-align: middle;
}

.items li {
  height: 1.2rem;
  font-size: 0.373333rem;
  position: relative;
  margin-left: 0.4rem;
  border-bottom: 1px solid #e4e4e4;
  line-height: 1.2rem;
}

.items li::after {
  content: ">";
  display: block;
  width: 0.426667rem;
  height: 0.426667rem;
  position: absolute;
  top: 0;
  right: 0.16rem;
  color: #aaa;
}

.items li:last-child {
  border: none;
}

.tel {
  font-size: 0.4rem;
  color: #ffb000;
  text-align: center;
  height: 1.226667rem;
  line-height: 1.226667rem;
  background-color: #fff;
}

.time {
  font-size: 0.373333rem;
  text-align: center;
  margin-top: 0.346667rem;
  color: #999;
}
</style>
