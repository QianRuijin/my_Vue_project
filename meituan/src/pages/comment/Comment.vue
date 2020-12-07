<template>
  <div class="com-wrap">
    <shop-header></shop-header>
    <comment-general :info="comments"></comment-general>
    <comment-filter :list="commentCategory"></comment-filter>
    <comment-list :list="commentsList"></comment-list>
  </div>
</template>

<script>
import ShopHeader from "../../common/shopheader/ShopHeader.vue";
import CommentGeneral from "./components/General";
import CommentFilter from "./components/Filter";
import CommentList from "./components/CommentsList.vue";
import axios from "axios";
export default {
  name: "Comment",
  components: {
    ShopHeader,
    CommentGeneral,
    CommentFilter,
    CommentList,
  },
  data() {
    return {
      comments: {},
      commentsList: [],
      commentCategory: [],
    };
  },
  methods: {
    getData() {
      axios.get("/api/comments.json").then((res) => {
        this.comments = res.data.data;
        this.commentsList = this.comments.comments;
        this.commentCategory = this.comments.comment_categories;
        // console.log(this.comments);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.com-wrap {
  background-color: #eee;
}
</style>
