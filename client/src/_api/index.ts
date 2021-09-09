import axios from "axios";
import { ILogin, IPost, IRegister } from "../interfaces";
import { COOKIE_NAME } from "../_constants/app.const";

const API = axios.create();

API.defaults.withCredentials = true;
API.get("http://httpbin.org/get?answer=42", {
  // `proxy` means the request actually goes to the server listening
  // on localhost:3000, but the request says it is meant for
  // 'http://httpbin.org/get?answer=42'
  proxy: {
    host: "localhost",
    port: 5001,
  },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem(COOKIE_NAME) !== null) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem(COOKIE_NAME) as string).token
    }`;
  }

  return req;
});

export const fetchPost = (id: string) => API.get(`/posts/${id}`);
export const fetchPosts = (id: string) => API.get(`/posts/timeline/${id}`);
export const fetchPostsAll = () => API.get(`/posts/timeline`);
// export const fetchPostsBySearch = (searchQuery)     =>
// API.get(`/posts/search?${searchQuery.search && `searchQuery=${searchQuery.search}&`}tags=${searchQuery.tags}`);
export const createPost = (newPost: IPost) => API.post("/posts", newPost);
export const updatePost = (id: string, updatedPost: IPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id: IPost) => API.delete(`/posts/${id}`);
export const likePost = (id: IPost) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (value: string, id: IPost) =>
  API.post(`/posts/${id}/commentPost`, { value });

export const register = (formData: IRegister) =>
  API.post("/user/register", formData);
export const login = (formData: ILogin) => API.post("/user/login", formData);

export const getUser = (id: string) => API.get(`/user/${id}`);
export const getJwt = () => API.get(`/login`);
