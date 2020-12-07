<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" alt="" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination'
      },
      swiperList: [{
        id: '0001',
        imgUrl: require('@/../img/1cfbdaa2682ada2f854ea6114b3677c8.jpeg')
      }, {
        id: '0002',
        imgUrl: require('@/../img/56ad7891af78b372fbe9dac94cb0ce54.jpeg')
      }, {
        id: '0003',
        imgUrl: require('@/../img/569cae4ae98e9793f7341e85eed73c54.jpeg')
      }, {
        id: '0004',
        imgUrl: require('@/../img/7176acd77332a433af9636eb9a2c338c.jpeg')
      }, {
        id: '0005',
        imgUrl: require('@/../img/b8c4527c41649814cc4cf86880abba54.jpeg')
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:#fff
.wrapper
  width:100%
  height:0
  overflow:hidden
  padding-bottom:31.25%
  background:#eee
  .swiper-img
    width:100%
</style>
