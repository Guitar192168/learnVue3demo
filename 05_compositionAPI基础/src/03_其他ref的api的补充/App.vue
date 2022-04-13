<template>
  <div>
    <input type="text" v-model="number" />
    {{ number }}

    <button @click="changenumber">修改</button>
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core";
import debounce from "./debounce";
export default {
  setup() {
    // const number = ref(0);
    const number = debounce(0);

    const changenumber = () => {
      number.value++;
    };

    return {
      number,
    };
  },
};
</script>

<style>
</style>