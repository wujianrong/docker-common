import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },  
    mutations: {
        setUserInfo(state, params) {
            state.userInfo = params
        }
    },
    actions: {
        getUserInfo({ commit }) {
            setTimeout(() => {
                const res = {
                    a: 1,
                    b: 2
                }
                commit('setUserInfo', res)
            }, 2000)
        }
    }
})