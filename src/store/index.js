import { createStore } from "vuex";

export default createStore({
    state:{
        user:null
    },
    //mutations affect state
    mutations:{
        SET_USER(state,user){
            state.user = user
        }
    },
    //actions are called to my app to trigger a mutation
    actions:{
        setUser({commit}, user){
            commit('SET_USER',user)
        }
    },
    modules:{},
})