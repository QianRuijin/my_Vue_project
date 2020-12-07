<template>
  <div class="general-wrap">
    <dl class="general-container">
      <dt class="general-item">商家评分</dt>
      <dd class="general-star">
        <score-star
          v-if="info.comment_score"
          :score="info.comment_score"
        ></score-star>
        <!--toString报错 加v-if可解  可能是异步数据的问题-->
      </dd>
      <dd class="general-score">{{ info.comment_score }}</dd>
    </dl>
    <dl>
      <dt class="single-item">食品</dt>
      <dd class="single-score">{{ info.food_score }}</dd>
    </dl>
    <dl>
      <dt class="single-item">包装</dt>
      <dd class="single-score">{{ info.pack_score }}</dd>
    </dl>
    <dl>
      <dt class="single-item">配送</dt>
      <dd class="single-score">{{ info.delivery_score }}</dd>
    </dl>
  </div>
</template>

<script>
import ScoreStar from "../../../common/score/Star";
export default {
  name: "CommentGeneral",
  props: {
    info: Object,
  },
  components: {
    ScoreStar,
  },
};
</script>

<style scoped>
.general-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.4rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}

.general-wrap dl {
  margin: 0 0.4rem;
}

.general-container {
  flex-grow: 1;
  position: relative;
  padding-left: 2rem;
}

.general-score {
  position: absolute;
  top: 0;
  left: 0;
  color: orange;
}

.general-star {
  font-size: 0.46rem;
  color: #ffd161;
}

.single-item,
.general-item {
  margin-bottom: 0.15rem;
  font-size: 0.32rem;
  color: #999;
}

.single-score {
  font-size: 0.64rem;
}
</style>
