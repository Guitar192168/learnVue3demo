<template>
  <div>
    <!-- <input v-model="message" type="text" /> -->

    <!-- 相当于一个v-bind + v-on绑定了一个@input事件，并为message变量进行赋值 -->
    <!-- <input  :message="message"  @input="message = $event.target.value" type="text"> -->

    <!-- 组件的v-model -->
    <!-- <children v-model="message"></children> -->

    <!-- 约等于 -->
    <!-- 下面是自己写的错的 -->
    <!-- <children :modelValue=" message" @update="modelValue = $event"></children> -->

    <!-- <children :modelValue="message" @update:modelValue="message = $event"></children> -->

    <br />
    如果子组件是input呢？表单组件
    <!-- <child-input-vue v-model="message" ></child-input-vue> -->

    <!-- 如果不止一个v-model -->
    <child-input-vue v-model="message" v-model:title="title"></child-input-vue>

    <h2>父组件的{{ message }}</h2>
    <h2>父组件的{{ title }}</h2>
  </div>
</template>

<script>
import children from "./children.vue";

import childInputVue from "./child-input.vue";
export default {
  components: { children, childInputVue },
  data() {
    return {
      message: "hello",
      title: "123我是头部",
    };
  },
};
</script>

<style>
</style>