<template>
  <li @click="selectVideoItem">
    <br>
    <img :src="video.snippet.thumbnails.default.url" alt="">
    <span>{{video.snippet.title}} </span>
  </li>
</template>
<!-- 5번 부터 하세요!!!!!!!!!!!!!!!!!!!!!!!!! -->
<script>
export default {
  name:'VideoListItem',
  props:{
    video: Object,
  },
  methods:{
    selectVideoItem(){
      this.$emit("select-video-item", this.video)
    }
  }
}
</script>

<style>

</style>