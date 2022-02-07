import {createStore} from "vuex";

const store = new createStore({
    // state错误写法
    // state:{
    //     name:'张三',
    //     age:19
    // },
    state() {
        return {
            name: '张三',
            age: 19
        }
    },
    mutations: {
        increment(state) {
            //错误写法
            // this.this.state.
            state.age++
        },
        decrement(state){
            state.age--
        }
    }
})

export default store