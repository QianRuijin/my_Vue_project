<template>
  <div v-html="getStar()"></div>
</template>

<script>
export default {
  name: "ScoreStar",
  props: {
    score: [Number, String],
  },
  methods: {
    getStar() {
      let starTmpl = '<div class="iconfont">',
        _score = this.score.toString(),
        scoreArray = _score.split("."),
        fullstar = parseInt(scoreArray[0]),
        halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0,
        nullstar = 5 - fullstar - halfstar,
        starStr = "";

      for (var i = 0; i < fullstar; i++) {
        starStr += "&#xe601;";
      }

      for (var j = 0; j < halfstar; j++) {
        starStr += "&#xe62f;";
      }

      for (var k = 0; k < nullstar; k++) {
        starStr += "&#xe600;";
      }
      starTmpl += starStr + "</div>";
      return starTmpl;
    },
  },
};
</script>

<style scoped></style>
