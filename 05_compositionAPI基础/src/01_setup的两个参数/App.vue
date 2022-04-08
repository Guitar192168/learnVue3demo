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


    <home-vue :message="message" :userName="userName" :namesArr="namesArr">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}</strong>
      </template>
    </home-vue>
  </div>
</template>

<script>
import HomeVue from "./Home";
import { reactive } from "@vue/runtime-core";

export default {
  components: {
    HomeVue,
  },
  name: "App",
  setup() {
    const message = "该数据来自父组件";
    const userName = "kobe";

    // const namesArr = ["kobe", "curry", "iryne"];

    return {
      message,
      userName,
      // namesArr,
    };
  },
};
</script>

<style scoped>
</style>
