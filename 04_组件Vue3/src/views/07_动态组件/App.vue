<template>
  <div>
    测试一下动态组件
  </div>
  <hr>

  <component is="about"></component>
  这种是直接固定一个值
  <br>
  <br>
  <br>
  <hr>
  <template v-for="(item, index) in ['child','about', 'category']" :key="item">
    <button @click="btnChilk(item)">{{item}}</button>
  </template>
  <!--  动态组件-->
  <component :name="name" :is="currentItem"></component>
</template>

<script>
import child from './child';
import category from "@/views/07_动态组件/category";
import about from './about'

export default {
  name: "App",
  components: {
    child,
    category,
    about
  },
  data() {
    return {
      currentItem: 'child',
      name:'传值'
    }
  },
  methods: {
    btnChilk(e) {
      console.log(e)
      this.currentItem = e
    }
  }
}
</script>

<style scoped>

</style>