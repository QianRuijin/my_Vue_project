<template>
  <span>{{ getClass() }}</span>
</template>

<script>
export default {
  name: "StarClass",
  props: {
    score: Number,
  },
  methods: {
    getClass() {
      let _score = Math.floor(this.score),
        starClass = "";
      switch (_score) {
        case 5:
          starClass = "超赞";
          break;
        case 4:
          starClass = "赞";
          break;
        case 3:
          starClass = "一般";
          break;
        case 2:
          starClass = "差";
          break;
        case 1:
          starClass = "极差";
          break;
      }
      return starClass;
    },
  },
};
</script>

<style scoped></style>
