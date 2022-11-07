import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data
  state: {
    message: 'message in store'
  },
  // 기존의 computed, state를 활용해 계산된 값을 얻을떄
  getters: {
    messageLength(state) {
      return state.message.length
    }
  },
  // 기존의 methods, state를 변경하는 유일한 방법, 동기적
  mutations: {
    CHANGE_MESSAGE(state, newMessage) {
      // console.log(state)
      // console.log(newMessage)
      state.message = newMessage
    }
  },
  // 비동기,dispatch=> mutations 호출해서 state 변경, 직접변경x
  //  context 에 state
  actions: {
    changeMessage(context, newMessage) {
      // console.log(context)
      // console.log(newMessage)

      //commit:mutation 호출 
      //                  메서드 이름, 추가데이터
      context.commit('CHANGE_MESSAGE', newMessage)
    }
  },
  modules: {
  }
})
