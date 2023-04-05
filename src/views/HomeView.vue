<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <Header />
        <Menu/>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9">
        <Post
          v-if='this.posts.length'
          v-for="post in this.posts"
          :key="post.id"
          :name="post.title"
          :text="post.body"
          :img="post.img"
          :id="post.id"
        />
        <div v-else class='text-center'>
          <h2>
            Новых постов пока что нет :(
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import Post from '../components/Post.vue'
  import Header from '../components/Header.vue'
  import { getPosts } from '../services/index.js';

  export default {
    name: "HomeView",
    data(){
      return {
        posts: []
      }
    },
    components: {
      Menu,
      Post,
      Header
    },
    async created(){
      this.posts = await this.getPosts();
    },
    methods: {
      async getPosts(){
        try {
          const responce = await getPosts();

          if (responce.status === 200) {
            return responce.data
          }
        } catch (e) {
          return [];
        }
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
