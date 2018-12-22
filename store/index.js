import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      introAnimation: false
    },
    getters : {
        introAnimationStatus(state) {
            return state.introAnimation;
        }
    }

})
}

export default createStore
