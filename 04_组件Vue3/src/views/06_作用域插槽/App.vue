<template>
  <div>
    最基本的作用域插槽
  </div>
  <child :names="names">
    <template v-slot="slotProps">
      <button>{{slotProps.item}}-{{slotProps.index}}</button>
    </template>
  </child>
  <hr>
  <div> 独占默认插槽缩写</div>
  <div>即使内部子组件内部还定义了具名插槽，但是只有不主动使用该具名插槽，也还是可以写成独占默认插槽缩写的形式的</div>
  <div>如果使用到了具名插槽，则不能使用独占插槽缩写了</div>
  <child :names="names" v-slot="slotProps">
    <button>{{slotProps.item}}</button>
<!--    <template v-slot:left>-->
<!--      <strong>{{slotProps.item}}</strong>-->
<!--    </template>-->
  </child>
  <hr>
  <div>具名 作用域插槽</div>
  <child :names="names">
    <template v-slot:default="slotProps">
      <i>{{slotProps.item}}</i>
    </template>
  </child>
</template>

<script>
import child from './child'

export default {
  name: "App.vue",
  components: {
    child
  },
  data() {
    return {
      names: ['yang', 'jing', 'qi']
    }
  }
}
</script>

<style scoped>

</style>