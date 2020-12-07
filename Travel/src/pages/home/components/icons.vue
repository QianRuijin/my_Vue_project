<template>
<div class="icons">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class='icon' v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      },
      iconsList: [{
        id: '0001',
        imgUrl: '../../../../static/images/hotel.png',
        desc: '旅馆'
      }, {
        id: '0002',
        imgUrl: '../../../../static/images/flight.png',
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: '../../../../static/images/train.png',
        desc: '火车票'
      }, {
        id: '0004',
        imgUrl: '../../../../static/images/package.png',
        desc: '度假'
      }, {
        id: '0005',
        imgUrl: '../../../../static/images/piao.png',
        desc: '景点门票'
      }, {
        id: '0006',
        imgUrl: '../../../../static/images/1316dc82d1ce6259686d5a68880e5a9d.png',
        desc: '攻略'
      }, {
        id: '0007',
        imgUrl: '../../../../static/images/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      }, {
        id: '0008',
        imgUrl: '../../../../static/images/f5e5770393d759578962e53ee67798c8.png',
        desc: '海外酒店'
      }, {
        id: '0009',
        imgUrl: '../../../../static/images/package.png',
        desc: '度假'
      }, {
        id: '0010',
        imgUrl: '../../../../static/images/piao.png',
        desc: '景点门票'
      }, {
        id: '0011',
        imgUrl: '../../../../static/images/1316dc82d1ce6259686d5a68880e5a9d.png',
        desc: '攻略'
      }, {
        id: '0012',
        imgUrl: '../../../../static/images/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibless.styl'
@import '~style/mixins.styl'
.icons >>> .swiper-container
  height:0
  padding-bottom:50%
.icons
  margin-top:.1rem
  .icon
    position:relative
    float:left
    width:25%
    height:0
    padding-bottom:25%
    overflow:hidden
    .icon-img
      box-sizing:border-box
      padding:.1rem
      position:absolute
      top:0
      left:0
      right:0
      bottom:.44rem
      .icon-img-content
        height:100%
        display:block
        margin:0 auto
    .icon-desc
      position:absolute
      left:0
      right:0
      bottom:0
      height:.44rem
      lne-height:.44rem
      text-align:center
      color:$darkTextColor
      ellipsis()
</style>
