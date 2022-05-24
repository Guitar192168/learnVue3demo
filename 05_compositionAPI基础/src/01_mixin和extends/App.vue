<template>
  <div>
    <button @click="bar">测试一下混入同名的方法</button>
    <hr>
    {{name}}
    <h2>局部混入</h2>
    vue3里面，computed更高， props比data优先级高，data比mixins优先级高

    <h2>{{age}}</h2>
    <hr>
    <div>
      生命周期：会被合并到数组中，都会执行的
    </div>

    <h3> 全局混入:

       const app ={
      //类型是 ComponentOptions

      mixin:function (){

        }
      }
    </h3>
    <h3>有冲突时，以组件的优先。</h3>
  </div>
</template>

<script>
import {mixinData, foo} from "@/01_mixin和extends/mixins/demoMixins";

export default {
  name: "App.vue",
  mixins: [mixinData, foo],
  data() {
    // 同名属性，data比mixins的优先级更高
    return {
      // age: 20
    }
  },
  props: {
    age: {
      type: Number,
      default: 30   // props的优先级比data高
    }
  },
  computed: {
    age() {
      return 40
    }
  },
  beforeCreate() {
    console.log('组件的beforeCreate')
  },
  created() {
    console.log('来自组件的created')
    console.log('现在能理解为啥要先执行mixins的生命周期了，你得先能拿到mixins混入的内容，才能在被混入的组件里使用mixins的方法，数据和生命周期')
    foo()
    console.log(this.age)
  },
  methods: {
    bar() {
      console.log('组件内的方法')
    }
  }
}
</script>

<style scoped>

</style>
