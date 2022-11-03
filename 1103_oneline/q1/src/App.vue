<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <div id="page">
      <h2>예약 페이지</h2>
      <h3>시간 선택</h3>
      <s v-for="(time, index) in times" :key="index">
        <button class="btn"  > {{time}} </button>
        <s v-if="index % 5 == 4"><br>  </s>
      </s>
      <hr style="background-color: #0F4C81; height:1px; border: 0;">
      <p style="text-align: left ;">선택 시간: </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
        "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
        "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');


#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#page {
  width: 500px;
  height: 400px;
  box-shadow: 1px 2px 3px 2px gainsboro;
  margin: auto;
  padding-top: 7px;
}
.btn {
  background-color: white;
  width: 80px;
  height: 30px;
  margin: 2px;
  border: white;
}
</style>
