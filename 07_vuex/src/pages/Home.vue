<template>
  <div>
    <div>{{ name }}</div>
    <hr/>
    <div>{{ age }}</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import useState from "@/hooks/useState";

export default {
  setup() {
    // computed(接收一个函数或者一个对象)
    //这里如何将 storeState的属性 => 由function => 经过computed(function)包裹 => 返回ref对象
    //{name:ref对象, age: ref } 再解构的时候就是将这些ref对象return了出去
    const stateStore = useState(["name", "age"]);
    console.log(stateStore);
    return {
      ...stateStore,
    };
  },
};
</script>

<style scoped>
</style>