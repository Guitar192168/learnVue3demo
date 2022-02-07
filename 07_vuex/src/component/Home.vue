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
    ...mapState(['name', 'age'])
  },
  setup() {
    // computed(() => {
    //   mapState(['name', 'age'])
    // })
    const store = useStore()

    // computed(接收一个函数或者一个对象)
    const sName = computed(() => store.state.name)
    const sAge = computed(() => store.state.age)

    //这里如何将 storeInfo的属性 => 由function => 经过computed(function)包裹 => 返回ref对象
    const storeInfo = mapState(['name', 'age'])
    //这样写，相当于
    const storeInfo2  = {
      name:function (){},
      age:function (){}
    }
    //然后...结构出去，页面上就还是函数


    return {
      store,
      sName,
      sAge,
      ...storeInfo
    }
  }
}
</script>

<style scoped>

</style>