<template>
<div>
  <div class="recommend-title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" />
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekkend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '../../../../static/images/weekend1.jpg',
        title: '桂林',
        desc: '唯美桂林旅拍，小众文艺范旅拍札记'
      }, {
        id: '0002',
        imgUrl: '../../../../static/images/weekend2.jpg',
        title: '厦门',
        desc: '文艺背后的市井味道'
      }, {
        id: '0003',
        imgUrl: '../../../../static/images/weekend3.jpg',
        title: '马尔代夫',
        desc: '岛屿来信，想把我唱给你听'
      }, {
        id: '0004',
        imgUrl: '../../../../static/images/weekend4.jpg',
        title: '希腊',
        desc: '希腊，意外之旅'
      }, {
        id: '0005',
        imgUrl: '../../../../static/images/weekend5.jpg',
        title: '婺源',
        desc: '独行徽州，青黛白墙'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .recommend-title
    line-height .8rem
    background #eee
    text-indent  .2rem
  .item-img-wrapper
    height 0
    padding-bottom 37.09%
    overflow hidden
    .item-img
      width 100%
  .item-info
    padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>
