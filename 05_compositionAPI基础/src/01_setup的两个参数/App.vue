<template>
  <div>
    <home-vue :message="message" :userName="userName" :namesArr="namesArr">
      <!-- <p style="color: #008c8c; font-size: 30px">我是父组件传给插槽的</p> -->

      <!-- <template v-slot:title>
        <p style="color: #008c8c; font-size: 30px">我是父组件传给具名插槽的</p>
      </template> -->

      <template v-slot="slotProps">
        <h1>{{ slotProps.item }}</h1>
      </template>

    </home-vue>

    <h2>
      <slot name="left"></slot>
    </h2>
    <home-vue :message="message" :userName="userName" :namesArr="namesArr">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}</strong>
      </template>
    </home-vue>
  </div>
</template>

<script>
import HomeVue from "./Home";
import {reactive} from "@vue/runtime-core";

export default {
  components: {
    HomeVue,
  },
  name: "App",
  // 如果setup写在script里，则不需要显式的写props
  props: {
    age: {
      type: Number,
      default: 19
    }
  },
  /**
   * 两个参数:
   * props
   *
   * context 上下文
   */
  setup(props, context) {
    console.log(props, 'props')
    const message = "该数据来自父组件";
    const userName = "kobe";
    console.log(context, 'context')
    // console.log(context.attrs, 'context.attrs，相当于$attrs')
    console.log(context.slots, 'context.slots, 相当于$slots')
    // console.log(context.emit, 'context.emits, 相当于$emit')
    const namesArr = ["kobe", "curry", "iryne"];


    /**
     * setup的返回值，可以用在template模板里
     */
    return {
      message,
      userName,
      namesArr,
    };
  },
};
</script>

<style scoped>
</style>
