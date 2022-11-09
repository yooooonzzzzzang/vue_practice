<template>
  <div id="app">
    <img src="./assets/pngwing.com.png" alt="">
    <SearchBar
      @input-change="onInputChange"/>
    <MainVideo
      :video="mainVideo"/>
    <VideoList
      :videos="videos.slice(1)" 
      @select-video-item="onMainVideoChange" />
  </div>
</template>

<script>
import axios from 'axios'
import MainVideo from "@/components/MainVideo"
import SearchBar from "@/components/SearchBar"
import VideoList from "@/components/VideoList"
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = "https://www.googleapis.com/youtube/v3/search"
export default {
  name: 'App',
  components: {
    SearchBar,
    MainVideo,
    VideoList,
  },
  data(){
    return{
      inputValue: null,   //사용자 검색어
      videos: [],         //검색 영상 목록
      mainVideo: null,    //메인 영상
    }
  },
  methods:{
    onInputChange(inputText){
      this.inputValue = inputText

      axios({
        methods:"get",
        url: API_URL,
        params:{
          key: API_KEY,
          part: "snippet",
          type: "video",
          q: this.inputValue,
        },
      })
        .then((response)=>{
          console.log(response)
          this.videos = response.data.items  //영상 목록
          this.mainVideo = this.videos[0]
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    onMainVideoChange(video){
      this.mainVideo =video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 20%;
  height: 20%;
}
</style>
