import axios from "axios"
const apiBase = "https://jsonplaceholder.typicode.com/";

const $api = axios.create({
    withCredentials: false,
    baseURL: apiBase,
})

export const getPosts = async (params) => {
  return await $api.get('/posts')
}

export const getPost = async (id) => {
  return await $api.get('/posts/'+id);
}

export const getCommentsByPost = async (id) => {
  return await $api.get('posts/'+id+'/comments')
}
