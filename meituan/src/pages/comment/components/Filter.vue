<template>
  <div class="comment-filter">
    <ul class="comment-tag clearfix">
      <li class="tag-item" v-for="(item, index) of list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentFilter",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.comment-filter {
  background-color: #fff;
  padding: 0.2rem;
}

.tag-item {
  float: left;
  padding: 0.08rem 0.15rem;
  margin: 0.133333rem 0.2rem;
  font-size: 0.35rem;
  background-color: #ffedc1;
  border-radius: 0.053333rem;
}
</style>
