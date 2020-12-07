<template>
<div>
  <div class="recommend-title">热销推荐</div>
  <ul>
    <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id"
      :to="'/detail/'+item.id">
      <img class="item-img" :src="item.imgUrl" />
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '../../../../static/images/51b63883c25f5d87af3c08bb016e2bd7.jpg_256x160_2c506073.jpg',
        title: '恭王府',
        desc: '一起去看看和珅家'
      }, {
        id: '0002',
        imgUrl: '../../../../static/images/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
        title: '八达岭长城',
        desc: '一定要看那块“不到长城非好汉”碑'
      }, {
        id: '0003',
        imgUrl: '../../../../static/images/4252d24d5d40b4b55e9d6df7d95e9838.jpg_256x160_e600caba.jpg',
        title: '明十三陵',
        desc: '气势磅礴的陵寝建筑群'
      }, {
        id: '0004',
        imgUrl: '../../../../static/images/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0005',
        imgUrl: '../../../../static/images/51b63883c25f5d87af3c08bb016e2bd7.jpg_256x160_2c506073.jpg',
        title: '圆明园',
        desc: '追忆昔日万园之园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent  .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      background #ff9300
      line-height .44rem
      margin-top .16rem
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
