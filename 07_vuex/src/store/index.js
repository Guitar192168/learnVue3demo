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
            age: 19,
            booksList: [{name: '不知道的js', price: 30}, {name: "深入浅出vue", price: 20}, {name: "webpack数书籍", price: 100}]
        }
    },
    getters: {
        totalPrice(state, getters) {
            console.log(getters,'getters')
            return state.booksList.reduce((acc, cur) => {
                console.log(acc, 'acc', cur, 'cur')
                return acc + cur.price
            }, 0)
        }
    },
    mutations: {
        increment(state) {
            //错误写法
            // this.this.state.
            state.age++
        },
        decrement(state) {
            state.age--
        }
    }
})

export default store