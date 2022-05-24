<template>
  <div>
    <div v-message:isArg.a.b="message">{{message}}</div>
    <input type="text" v-focus v-model="message">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: 123,
      isArg: 'demo'
    }
  },
  directives: {
    'focus': {
      bind() {
        console.log('指令第一次绑定到元素上的时候，触发。可以在这儿进行一些初始化的配置')
      },
      // bind不行
      inserted: function (el) {
        console.log('这里类似mounted,是被绑定元素插入到父节点中。')
        // console.log(el.focus())
        el.focus()
      },
      update(el, binding, vNode, oldVnode) {
        console.log('\n' +
            'update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。' +
            '指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。')
        //这里无法触发很正常，得是v-focus='xx'这个xx的值在变才行
        // console.log('update', binding.value, 'vNode', vNode, 'oldVnode', oldVnode)
      },
      //指令所在组件的 VNode 及其子 VNode 全部更新后调用
      componentUpdated(el, binding, vNode, oldVnode) {
        console.log('指令所在组件的 VNode 及其子 VNode 全部更新后调用。')
        // console.log('componentUpdated', binding.value, 'vNode', vNode, 'oldVnode', oldVnode)
      },
      unbind(){
        console.log('指令与元素解绑的时候触发')
      }
    },
    'message': {
      update(el, binding) {
        // v-message:isArg.a.b="message"
        /*
                binding这里的参数
                name是指令的名字，不包括v-这块
                :isArg是arg是参数名 !!可以接受不同的参数了。动态的
                .a.b这种修饰符 modifiers
                ="message"中message是参数，是expression。它变了。才会触发的update和componentUpdated生命周期

                value和oldValue
        * */
        console.log(binding)
        console.log('binding.value', binding.value, 'binding.oldValue', binding.oldValue)
      }
    }
  }
}
</script>

<style scoped>

</style>
