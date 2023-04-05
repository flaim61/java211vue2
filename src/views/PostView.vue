<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <Header/>
        <Menu/>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9">
        <div class="border p-3 mb-3">
          <div class="post-image">
            <img class='w-100' v-if='this.post.img' :src="this.post.img" alt="">
            <img class='w-100' v-else src="@/assets/img/no-photo.jpeg" alt="">
          </div>
          <h3>
            {{this.post.title}}
          </h3>
          <p>
            {{this.post.body}}
          </p>
        </div>
        <div class="comments_area border">
          <div class="comment p-3 m-3" v-for="comment in this.comments" :key="comment.id">
            <h4>
              {{comment.name}}
            </h4>
            <a :href="comment.email">{{comment.email}}</a>
            <p>
              {{comment.body}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Header from '../components/Header.vue'
import { getPost, getCommentsByPost } from '../services/index.js'

export default {
  name: "PostView",
  data(){
    return {
      post: {},
      comments: []
    }
  },
  components: {
    Menu
  },
  async created(){
    this.post = await this.getPost();
    this.comments = await this.getComments();
  },
  methods: {
    async getPost(){
      try {
        const responce = await getPost(this.$route.params.id)
        if (responce.status === 200) {
          return responce.data
        }

        return {};
      } catch (e) {
        return {};
      }
    },
    async getComments(){
      try {
        const responce = await getCommentsByPost(this.$route.params.id)

        if (responce.status === 200) {
          return responce.data
        }

        return [];
      } catch (e) {
        return [];
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .post-image>img{
    height: 400px;
    object-fit: cover;
  }
</style>
