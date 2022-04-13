<template>
  <h2 class="home">我是父元素</h2>
  <child :type="type"></child>
</template>

<script setup>
import child from './child'
/*
  css作用域问题
  为了防止某个组件内定义的样式成为全局样式，需要加scoped
  但是及时加了scoped，也会有问题。 可能会影响到子组件的根元素的样式。

  比如父组件内使用了h2标签，然后导入子组件，子组件的根元素也是h2标签。
  比如 vue3这种，不像vue2, vue2我们一般会写一个父元素

  在父组件定义的h2的样式，属性选择器h2[data-v-be368014]在子组件的根元素也会得到一样的内容h2[data-v-be368014]

* */
import {reactive} from "vue";

const type = reactive({name: 1})
</script>
<style scoped>
.home{
  font-size: 50px;
  /*color:pink;*/
}
h2 {
  color: #008c8c;
}
</style>