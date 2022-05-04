<template>
  <div>
    {{ name }}
    <div>
      {{ age }}
    </div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import {ref, reactive, watchEffect} from "vue";
import {log} from "console";

export default {
  setup() {
    const age = ref(18);
    const name = ref("张三");

    /**
     * watchEffect 会自动的收集使用到的属性
     *  不用刻意指定侦听哪个属性，只要你在回调函数里，有使用到那个响应式数据ref/reactive就会自动监听到
     *   获取watchEffect返回值的函数 可以执行stopWatch来清除监听
     */
    const stopWatch = watchEffect((onInvaidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求");
      }, 2000);

      onInvaidate(() => {
        clearTimeout(timer);
        //   我们一般是在这个函数里清除上一个请求   request.value
        console.log("onInvaidate:", age);
      });
      console.log("监听name:", name.value);
      console.log("监听age:", age.value);
    });

    const changeAge = () => {
      age.value++;

      if (age.value > 22) {
        stopWatch();
      }
    };

    const changeName = () => {
      name.value = "李四";
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style>
</style>
