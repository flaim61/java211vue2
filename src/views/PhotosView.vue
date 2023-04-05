<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <Header />
        <Menu/>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9">
        <Photo
          v-for="photo in this.photos"
          :key="photo.id"
          :id="photo.id"
          :name="photo.name"
          :img="photo.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Header from '../components/Header.vue'
import Photo from '../components/Photo.vue'

export default {
  name: "PhotosView.vue",
  data(){
    return {
      photos: [
        {
          id: 1,
          name: "Фото 1",
          img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
        },
        {
          id: 2,
          name: "Фото 2",
          img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
        },
        {
          id: 3,
          name: "Фото 3",
          img: "https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
      ]
    }
  },
  components:{
    Menu,
    Header,
    Photo
  }
}
</script>

<style lang="css" scoped>
</style>
