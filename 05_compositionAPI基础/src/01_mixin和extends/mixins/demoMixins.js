export const foo = function () {
  console.log('mixin导入的foo函数')
}

export const mixinData = {
  data() {
    return {
      age: 19
    }
  },
  created() {
    console.log('混入的created')
  },
  methods:{
    bar(){
      console.log('mixin内的bar')
    }
  }
}

// 定义一个使用混入对象的组件
// Vue.extend也使用同样的合并策略
// var Component = Vue.extend({
//   mixins: [myMixin]
// })
//
// var component = new Component() // => "hello from mixin!"
