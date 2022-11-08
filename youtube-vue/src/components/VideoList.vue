<template>
  <div>
    <ul>
      <VideoListItem
        v-for="(video, index) in videos"
        :key="`videoListItem-${index}`"
        :video="video"
      
      />
    </ul>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
export default {
  name:'VideoList',
  components:{
    VideoListItem
  },
  props:{
    videos: Array,
  }
}
</script>

<style>

</style>