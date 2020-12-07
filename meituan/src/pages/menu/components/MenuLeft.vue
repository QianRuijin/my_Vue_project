<template>
  <div class="menu-inner">
    <div class="left-bar">
      <div class="left-bar-inner">
        <div
          class="left-item"
          v-for="(item, index) of spuTags"
          :key="item.tag"
          :class="{ active: activeIndex == index }"
          @click="getSups(item.spus, item.name, index)"
        >
          <div class="item-text">
            <img class="item-icon" v-if="item.icon" :src="item.icon" />
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <menu-right :sups="spus" :tag="tagName"></menu-right>
  </div>
</template>

<script>
import MenuRight from "./MenuRight.vue";
export default {
  components: { MenuRight },
  name: "MenuLeft",
  props: {
    spuTags: Array,
  },
  data() {
    return {
      activeIndex: 0,
      spus: [],
      tagName: "",
    };
  },
  methods: {
    getSups(spu, name, index) {
      this.spus = spu;
      this.tagName = name;
      this.activeIndex = index;
      //console.log(this.spus);
    },
  },
  watch: {
    spuTags() {
      this.spus = this.spuTags[0].spus;
      this.tagName = this.spuTags[0].name;
    },
  },
};
</script>

<style scoped>
.menu-inner {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 2.933333rem;
  left: 0;
  display: flex;
  overflow: hidden;
}

.left-bar {
  width: 2.266667rem;
  background-color: #efefef;
  overflow: auto;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

.left-bar-inner {
  padding-bottom: 2.266667rem;
}

.left-item {
  font-size: 0.373333rem;
  color: #656565;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
  display: flex;
  height: 1.6rem;
  justify-content: center;
}

.left-item.active {
  background-color: #fff;
}

.item-text {
  text-align: center;
  align-self: center;
}

.item-icon {
  width: 0.533333rem;
  height: 0.533333rem;
  display: inline-block;
  margin-right: 0.16rem;
  vertical-align: -0.106667rem;
}
</style>
