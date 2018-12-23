import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      introAnimationComplete: true
    },
    getters : {
        introAnimationStatus(state) {
            return state.introAnimationComplete;
        }
    },
    mutations : {
        completeIntroAnimation(state) {
            state.introAnimationComplete = true;
        }
    }

})
}

export default createStore
