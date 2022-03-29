import {
    computed
} from "vue";
import {
    mapState,
    useStore
} from "vuex";

export default function useState(storeStateFns, mapFn) {
    console.log(mapFn)
    storeStateFns = mapFn(storeStateFns)
    console.log(storeStateFns)
    const stateStore = {}
    const store = useStore()
    Object.keys(storeStateFns).forEach(fnKey => {
        //错误写法，还是对computed掌握不熟练
        // stateStore[fnKey] = computed(() => store.state[storeStateFns[fnKey]])
        const fn = storeStateFns[fnKey].bind({
            $store: store
        }) //这个参数是没有this的，this是undefined 取不到$store
        //每个函数都有bind方法, 这里使用bind不使用call和apply是因为computed内部接收一个function
        stateStore[fnKey] = computed(fn) //传进来的fn没有this

        // stateStore[fnKey] = computed(storeStateFns[fnKey].bind({$store: store})) 不简写，可读性不强
    })
    return stateStore
}