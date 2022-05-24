<template>
  <div>
    包括动态插槽，具名插槽，简写
    <child>
      普通插槽
    </child>
    <hr>
    <child>
      作用域插槽,不是v-slot='left'
      而是v-slot:left，是冒号，且不需要引号
      <!--      不是v-slot='left'-->
      <template v-slot:left>我是左边</template>
      <template v-slot:center>我是中间</template>
      <template v-slot:right>我是右边</template>
    </child>
    <hr>
    <!--    具名插槽的默认default-->
    具名插槽默认不传，就是default,
    但是需要显示的写v-slot:default
    <child>
      <template v-slot:default>
        <h2>我是默认的</h2>
      </template>
      <template v-slot:left>我是左边</template>
      <template v-slot:center> 具名插槽默认不传，就是default,
        但是需要显示的写v-slot:default
      </template>
      <template v-slot:right>我是右边</template>
    </child>
    <hr>
    <!--    具名插槽的简写-->
    <child>
      <template #left>我是左边</template>
      <template #center>具名插槽的简写 #left</template>
      <template #right>我是右边</template>
    </child>
    <!--    动态插槽-->
  </div>

  <hr>
    <child :name="name">
<!--      <template v-slot:[name]>我是动态插槽</template>-->
      <template #[name]>
        <h2>我是动态插槽的简写</h2>
      </template>
      <template v-slot:[name]>我是动态插槽</template>
      <template v-slot:[name]>我是动态插槽</template>
    </child>
</template>

<script>
import child from "./child";

export default {
  name: "App.vue",
  components: {
    child
  },
  data() {
    return {name: 'yang'}
  }
}
</script>

<style scoped>

</style>