<template>
  <div>
    <h2> {{ info }}</h2>
    <button @click="changeAge"> 修改对reactive对象侦听的的数据</button>
    <hr>
    <button @click="changeRefNum"> 修改对ref对象侦听的数据</button>
    <h2>{{number}}</h2>
  </div>
</template>
<script>
import {reactive, ref, watch, isReactive} from "vue";

export default {
  setup() {
    let info = reactive({name: "zhangsan", age: 19});
    const changeAge = () => {
      info.age++;
      number.value++;
    };

    /**
     * 1.传入一个getter函数 必须引用一个可响应式的对象
     */
    watch(
      // info, // 虽然这里要求传入的是个getter函数，但是也是支持传入一个响应式对象的。源码有做处理
      () => info.age,
      (newValue, oldValue) => {
        console.log(isReactive(newValue), newValue, "newValue", oldValue, "oldValue");
      }
    );

    //传入一个可响应式对象  reactive或者ref对象 。源码有做处理
    // 情况1 传入一个reactive对象     newValue和oldValue返回的是reactive对象
    watch(info, (newValue, oldValue) => {
      console.log(newValue, "传入的的reactive对象的，返回的也会是reactive对象的newValue", oldValue, "oldValue");
    });

    /**
     *   情况2  传入一个ref对象   返回的是value值，而不是ref对象
     */
    const number = ref(10);
    const changeRefNum = () => {
      number.value++
    }
    watch(number, (newValue, oldValue) => {
      console.log(newValue, "传入ref的返回值。直接返回ref.value的newValue", oldValue, "传入ref的返回值oldValue");
    }, {immediate: true});

    /**
     *    情况3:如果希望返回的newValue和oldValue是普通的对象   则可以对info对象进行解构处理。
     *    因为普通的解构，不使用toRefs或者toRef的情况下，解构出来的就是普通的对象了
     */
    // 其实，还可以重叠，多个watch监听同一个对象，也不会冲突，覆盖，都会执行的
    watch(
      () => {
        return {...info};
      },
      (newValue, oldValue) => {
        console.log(newValue, "普通对象的newValue", oldValue, "普通对象的oldValue")
      }
    );


    return {
      info,
      number,
      changeAge,
      changeRefNum
    };
  },
};
</script>

<style>
</style>
