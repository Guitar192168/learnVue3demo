import { createStore } from 'vuex'
// import store from '../../../src/store'
const moduleA = {
    namespaced: true,
    state: () => {
        age: 18
    },
    mutations: {
        increment(state) {
            state.age++
            //   store.state.a.commit('demo')
        },
        demo() {
            console.log('111');
        }
    }
}
const moduleB = {

}
export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
