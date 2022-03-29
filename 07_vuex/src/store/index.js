import {
    createStore
} from "vuex";
import {
    IN_CREMENT,
    DE_CREMENT
} from "./mutations-type";

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
            discount: 0.9,
            booksList: [{
                name: '不知道的js',
                price: 30
            }, {
                name: "深入浅出vue",
                price: 20
            }, {
                name: "webpack数书籍",
                price: 150
            }]
        }
    },
    getters: {
        //
        totalPrice(state, getters) {
            console.log(getters, 'getters')
            return (state.booksList.reduce((acc, cur) => {
                console.log(acc, 'acc', cur, 'cur')
                return acc + cur.price
                //可以在这个getters里调用其他的getters
            }, 0)) * getters.discount
        },
        //getters的第二个参数
        //比如这里计算出来的总价还要打个折扣
        discount(state) {
            return state.discount * 0.1
        },
        //getters本身不能接收参数，想让它接收参数就可以返回一个function
        defineArg(state) {
            return function foo(n) {
                return n
            }
        },
        //计算价格大于25块的
        totalPriceAboutNumberThanThree(state) {
            return function (n) {
                return state.booksList.reduce((acc, cur) => {
                    return acc + (cur.price > n ? cur.price : 0)
                    //可以在这个getters里调用其他的getters
                }, 0)
            }
        }
    },
    mutations: {
        increment(state, payload) {
            //没传值参数时，默认payload为点击事件的属性
            // console.log(payload, 'payload')
            //错误写法
            // this.this.state.
            // 我这里只是++,不管传的是什么值
            state.age++
            store.commit('demo');
        },
        demo() {
            console.log('111')
        },
        // decrement(state, payload) {
        //     console.log(payload, 'payload')
        //     state.age -= payload.number
        // },
        [DE_CREMENT](state, payload) {
            console.log(payload, 'payload')
            state.age -= payload.number
        }
    },
    actions: {
        increment(context) {
            console.log(context)
            context.commit('increment')
            // 有 commit dispatch getters RootGetters rootState state
            //    RootGetters rootState其中这两个是比store实例多出来的两个
        },
        decrement(context) {

        },
        send(context) {
            console.log('context', context);
            context.commit('demo')
        }
    },
})

export default store