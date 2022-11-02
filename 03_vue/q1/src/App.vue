<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>이곳은 App.vue입니다.</h1>
    <HelloWorld msg="SSAFY 여러분을 응원합니다!" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
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
</style>
