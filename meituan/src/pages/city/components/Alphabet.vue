<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const startY = this.startY;
          const touchY = e.touches[0].clientY - 119;
          const index = Math.floor((touchY - startY) / 30);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 8);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~style/varibless.styl'
.list
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width .4rem
  display flex
  flex-direction column
  justify-content center
  .item
    line-height .4rem
    text-align center
    font-size .36rem
    color $bgColor
</style>
