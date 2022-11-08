<template>
  <div>
    <button @click="getCatImage">Get Cat</button><br/>
    <img v-if="imgSrc" :src="imgSrc" alt="">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'CatComponent',
  data(){
    return{
      imgSrc: null,
    }
  },
  methods:{
    getCatImage(){
      const CatImageSearchURL = 'https://api.thecatapi.com/v1/images/search'
      
      axios({
        method: 'get',
        url: CatImageSearchURL
      })
        .then ((response)=>{
          const imgSrc = response.data[0].url
          this.imgSrc =imgSrc
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  },
  created(){
    this.getCatImage()
  },
  updated(){
    console.log('이미지 리소스가 업데이트 되었습니다.')
  }
}
</script>

<style>

</style>