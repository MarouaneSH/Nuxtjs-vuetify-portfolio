import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      introAnimationComplete: false,
      workAnimationCompleted : false,
      backgroundChanged : false,
    },
    getters : {
        introAnimationStatus(state) {
            return state.introAnimationComplete;
        },
        workAnimationStatus(state) {
            return state.workAnimationCompleted;
        },
        backgroundStatus(state) {
            return state.backgroundChanged;
        },
    },
    mutations : {
        completeIntroAnimation(state) {
            state.introAnimationComplete = true;
        },
        completeWorkAnimation(state) {
            state.workAnimationCompleted = true;
        },
        changeBgImage() {
            document.querySelector("body").style.backgroundImage = 'url("/svg/bg.svg"),linear-gradient(180deg,#303fd9 0,#031b4e)'
        }
    }

})
}

export default createStore
