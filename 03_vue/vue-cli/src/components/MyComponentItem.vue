<template>
  <!-- 3. 템플릿 상위 태그 만들기 -->
  <div>
    <h3>나는 MyComponent의 하위 컴포넌트</h3>
    <p>{{ staticProps }}</p>
    <p>{{ dynamicProps }}</p>
    <button @click="childToParent">클릭!</button>
    <input type="text" v-model="childInputData" @keyup.enter="childInput" />
  </div>
</template>

<script>
export default {
  // 1. 파일만들기
  // 2. 이름등록
  name: "MyComponentItem",
  props: {
    staticProps: String,
    dynamicProps: String,
  },
  data: function () {
    return {
      childInputData: null,
    };
  },
  methods: {
    childToParent: function () {
      this.$emit("child-to-parent", "나는 자식이 보낸 데이터이다.");
    },
    childInput: function () {
      this.$emit("child-input", this.childInputData);
      this.childInputData = null;
    },
  },
};
</script>

<style>
</style>