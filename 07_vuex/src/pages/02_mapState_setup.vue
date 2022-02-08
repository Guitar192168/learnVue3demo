<template>
  <!--  <div>{{ store }}</div>-->
  <!--  <div>{{ sName }}</div>-->
  <!--  <div>{{ sAge }}</div>-->

  <!--  返回的函数-->
  <!--  <div>{{ name() }}</div>-->
  <div>{{ name }}</div>
  <hr>
  <div>{{ age }}</div>

  <!--  <button @click="$store.commit('increment')">-->
  <!--    +1-->
  <!--  </button>-->
  <!--  <button @click="delAge">-->
  <!--    -1-->
  <!--  </button>-->
</template>

<script>
import {useStore, mapState} from 'vuex'
import {computed} from "vue";

export default {
  computed: {
    fullName() {
      return 'firstName' + 'lastName'
    },
    //正常的格式都是一个key对应一个函数
    fullName2: function () {
      return 'firstName' + 'lastName'
    },
    // 看起来像mapState, 其实还是读取了this.$store.state.name
    // ...mapState(['name', 'age'])
  },
  setup() {
    // computed(() => {
    //   mapState(['name', 'age'])
    // })
    const store = useStore()

    const storeState33 = mapState({
      sName1: state => state.name,
      sAge1: state => state.age
    })


    // computed(接收一个函数或者一个对象)
    const sName = computed(() => store.state.name)
    const sAge = computed(() => store.state.age)

    //这里如何将 storeState的属性 => 由function => 经过computed(function)包裹 => 返回ref对象

    //{name:ref对象, age: ref } 再解构的时候就是将这些ref对象return了出去
    const storeStateFns = mapState(['name', 'age'])

    const stateStore = {}
    Object.keys(storeStateFns).forEach(fnKey => {
      //错误写法，还是对computed掌握不熟练
      // stateStore[fnKey] = computed(() => store.state[storeStateFns[fnKey]])
      const fn = storeStateFns[fnKey].bind({$store: store}) //这个参数是没有this的，this是undefined 取不到$store
      //每个函数都有bind方法, 这里使用bind不使用call和apply是因为computed内部接收一个function
      stateStore[fnKey] = computed(fn)//传进来的fn没有this

      // stateStore[fnKey] = computed(storeStateFns[fnKey].bind({$store: store})) 不简写，可读性不强
    })

    console.log(stateStore)
    //这样写，相当于
    const storeState2 = {
      name: function () {
      },
      age: function () {
      }
    }
    //然后...解构出去，页面上就还是函数

    return {
      store,
      sName,
      sAge,
      // ...storeState,
      ...stateStore
    }
  }
}
</script>

<style scoped>

</style>