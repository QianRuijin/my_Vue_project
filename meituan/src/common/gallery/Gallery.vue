<template>
  <div class="container" @touchmove.prevent @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item, index) in pics" :key="index">
          <img class="gallery-img" alt="" :src="item.url" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="user-comment">
      <div class="user-name">@ {{ user }}</div>
      <div class="comment-content">{{ comment }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props: {
    pics: Array,
    user: String,
    comment: String,
    picIndex: Number,
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit("galleryClose");
    },
  },
  watch: {
    picIndex() {
      this.$refs.mySwiper.swiper.slideTo(this.picIndex);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 9
  background rgba(33,33,33,0.98)
  .wrapper
    width 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      top -1rem
      font-size .4rem
  .user-comment
    position absolute
    bottom 0
    z-index 9
    color #fff
    padding 0 .5rem .6rem .5rem
    .user-name
      font-size .44rem
      line-height .8rem
    .comment-content
      font-size .36rem
      line-height .48rem
      word-break break-all
</style>
