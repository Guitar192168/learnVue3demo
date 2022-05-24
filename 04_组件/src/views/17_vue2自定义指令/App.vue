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
      isArg:'demo'
    }
  },
  directives: {
    'focus': {
      // bind不行
      inserted: function (el) {
        // console.log(el.focus())
        el.focus()
      },
      update(el, binding, vNode, oldVnode) {
        //这里无法触发很正常，得是v-focus='xx'这个xx的值在变才行
        // console.log('update', binding.value, 'vNode', vNode, 'oldVnode', oldVnode)
      },
      //指令所在组件的 VNode 及其子 VNode 全部更新后调用
      componentUpdated(el, binding, vNode, oldVnode) {
        // console.log('componentUpdated', binding.value, 'vNode', vNode, 'oldVnode', oldVnode)
      }
    },
    'message': {
      update(el, binding) {
        // v-message:isArg.a.b="message"
        /*
                binding这里的参数
                name是指令的名字，不包括v-这块
                :isArg是arg是参数名
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
