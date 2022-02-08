<template>
  <div>
    <div>{{ name }}</div>
    <hr/>
    <div>{{ age }}</div>
  </div>

  <div>
    {{ sName1 }}
    {{ sAge1 }}
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
    const stateStore = useState(["name", "age"], mapState);
    console.log(stateStore);

    //useState传入对象也可
    const storeState33 = useState({
      sName1: state => state.name,
      sAge1: state => state.age
    }, mapState)


    return {
      ...storeState33,
      ...stateStore,
    };
  },
};
</script>

<style scoped>
</style>