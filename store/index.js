import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      introAnimationComplete: false,
      workAnimationCompleted : false,
    },
    getters : {
        introAnimationStatus(state) {
            return state.introAnimationComplete;
        },
        workAnimationStatus(state) {
            return state.workAnimationCompleted;
        },
    },
    mutations : {
        completeIntroAnimation(state) {
            state.introAnimationComplete = true;
        },
        completeWorkAnimation(state) {
            state.workAnimationCompleted = true;
        }
    }

})
}

export default createStore
