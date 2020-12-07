<template>
  <div class="comments">
    <div class="comment-item" v-for="item of list" :key="item.wm_comment_id">
      <div class="user-info">
        <div class="user-profile">
          <img
            class="user-img"
            v-if="item.user_pic_url"
            :src="item.user_pic_url"
          />
          <img
            class="user-img"
            v-else
            src="http://i.waimai.meituan.com/static/img/default-avatar.png"
          />
        </div>
        <div class="comment-time">{{ getTime(item.comment_time) }}</div>
        <div class="user-name">{{ item.user_name }}</div>
        <div class="user-score">
          <score-star
            class="score-star"
            :score="item.order_comment_score"
          ></score-star>
          <star-class
            class="score-content"
            :score="item.order_comment_score"
          ></star-class>
        </div>
      </div>
      <div class="comment-wrap clearfix">
        <div class="comment-content">{{ item.comment }}</div>
        <comment-pic
          v-if="hasPics(item.comment_pics)"
          :pics="item.comment_pics"
          :user="item.user_name"
          :comment="item.comment"
        ></comment-pic>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreStar from "../../../common/score/Star";
import StarClass from "../../../common/score/Class";
import CommentPic from "./CommentPic";
export default {
  name: "CommentList",
  components: {
    ScoreStar,
    StarClass,
    CommentPic,
  },
  props: {
    list: Array,
  },
  methods: {
    getTime(time) {
      return new Date(time * 1000).toLocaleDateString().replace(/\//g, ".");
    },
    hasPics(arr) {
      return arr.length;
    },
  },
};
</script>

<style scoped>
.comments {
  padding: 0.3rem;
  background-color: #fff;
  font-size: 0.32rem;
  line-height: 0.45rem;
  color: #333;
}

.comment-item {
  padding: 0.4rem 0;
  border-bottom: 1px solid #aaa;
}

.user-info {
  position: relative;
  padding-left: 1.5rem;
  height: 1.2rem;
  font-size: 0.36rem;
  color: #888;
  margin-bottom: 0.3rem;
}

.user-profile {
  position: absolute;
  left: 0;
}

.user-img {
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
}

.comment-time {
  position: absolute;
  right: 0;
  font-size: 0.35rem;
}

.user-name {
  line-height: 0.6rem;
  color: #333;
}

.user-score {
  line-height: 0.6rem;
}

.score-star {
  display: inline-block;
  font-size: 0.4rem;
  color: #ffd161;
  margin-right: 0.3rem;
}

.comment-wrap {
  width: 100%;
}
</style>
