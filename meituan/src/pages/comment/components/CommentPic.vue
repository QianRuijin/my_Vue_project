<template>
  <div class="comment-img-wrap">
    <div
      class="comment-img"
      :class="{ two: isTwo }"
      v-for="(item, index) of pics.slice(0, 3)"
      :key="index"
      :style="{ backgroundImage: 'url(' + item.url + ')' }"
      @click="handleBannerClick(index)"
    ></div>
    <common-gallery
      :pics="pics"
      :user="user"
      :comment="comment"
      :picIndex="picIndex"
      v-show="showGallery"
      @galleryClose="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from "../../../common/gallery/Gallery";
export default {
  name: "CommentPic",
  components: {
    CommonGallery,
  },
  props: {
    pics: Array,
    user: String,
    comment: String,
  },
  data() {
    return {
      isTwo: this.pics.length === 2,
      showGallery: false,
      picIndex: 0,
    };
  },
  methods: {
    handleBannerClick(index) {
      this.showGallery = true;
      this.picIndex = index;
    },
    handleGalleryClose() {
      this.showGallery = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.comment-img-wrap
  width 100%;
  .comment-img
    border-radius .2rem
    background-position center center
    background-size 180%
    float left
    width 32%
    height 0
    padding-bottom 32%
    margin-bottom 2%
  .comment-img:first-child
    width 66%
    height 0
    padding-bottom 66%
    margin-right 2%
  .comment-img.two
    float left
    width 48%
    height 0
    padding-bottom 48%
</style>
