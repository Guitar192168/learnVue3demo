<script>
import {h} from 'vue'

export default {
  name: "myChild",
  setup(props, context) {
    return () => h('div', null, [
      // setup里面没有this的
      // this.$slots.default ?

      // console.log(context.slots.default())

      // 执行default函数的时候，可以传入参数给父组件
      context.slots.default ? context.slots.default({info: {age: 18, name: '\n我是作用域插槽'}}) : '我是子组件默认插槽的内容'
    ])
  }
}
</script>

<style scoped>

</style>
