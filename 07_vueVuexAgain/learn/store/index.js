import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            count: 10,
            name: 'yang',
            title: '标题'
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
});


export default store