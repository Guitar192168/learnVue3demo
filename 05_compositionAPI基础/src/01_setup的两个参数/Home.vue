<template>
  <div>
    {{ message }}
    {{ namesArr[0] }}
    {{ info }}
    <button @click="changeInfo">
      看一下watch的那个newValue和oldValue为啥是一样的
    </button>
    <hr />
    <br />
    子组件的页面
    <div>
      <!-- <slot name="title">子组件插槽默认值</slot> -->

      <!-- 作用域插槽 -->
      <div v-for="item in namesArr" :key="item">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";

export default {
  name: "Home",
  props: {
    message: {
      type: String,
      default: "",
    },
    // namesArr: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   },
    // },
  },
  setup(props, context) {
    const namesArr = reactive(["kobe", "curry", "iryne"]);

    const info = reactive({ name: "kobe", age: "18" });
    const changeInfo = () => {
      info.name = "yang";
    };

    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      }
    );

    console.log(props);
    console.log(context.attrs); // 四个均是非响应式对象，等同于$attrs，没有被使用的props
    console.log(context.slots);
    console.log(context.emit);
    console.log(context.expose);

    return {
      namesArr,
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped>
</style>
