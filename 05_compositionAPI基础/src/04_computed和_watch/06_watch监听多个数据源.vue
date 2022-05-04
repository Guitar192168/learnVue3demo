<template>
  <div>
    侦听多个数据源
    <h2>{{user}}</h2>
    <hr>
    <h2>{{number}}</h2>
    <button @click="changeData">修改数据</button>
    <hr>
    {{obj}}
    <button @click="changeObjDeep">测试一下深层嵌套+watch一个数组的时候，直接先解构了数组内的参数,解构成普通的对象</button>
  </div>
</template>

<script>
import {reactive, ref, watch} from "vue";

export default {
  setup() {
    const user = reactive({name: "zhangsan", age: 19});
    const number = ref(100);
    const changeData = () => {
      user.name = "lisi";
      user.age++;
      number.value++;
    };
    /**
     * 默认的
     */
    watch([user, number], (newValue, oldValue) => {
      console.log(newValue, 'newValue', oldValue, 'oldValue')
    })

    /**
     * 默认的 + 对newValue进行解构
     */
    watch([user, number], ([newUser, newNumber], [oldUser, oldNumber]) => {
      console.log('newUser => ', newUser, 'newNumber => ', newNumber, 'oldUser => ', oldUser, 'oldNumber => ', oldNumber)
    })

    const obj = reactive({
      name: 123,
      age: 456,
      friend: {
        name: 789
      }
    })

    const changeObjDeep = () => {
      obj.friend.name++
    }
    /**
     * 希望返回的user的值是普通的对象
     */
    // watch([user, number], (newValue, oldValue) => {
    watch([() => ({...obj})], (newValue, oldValue) => {
      console.log('直接传入的时候reactive对象的时候，源码里默认给了深度侦听deep = true')
      console.log('而直接把[]里面的深层嵌套的对象，拓展运算符解构成普通的对象了,就不会给自动加深度侦听了')
      console.log('如果也想深度侦听的话，就得给第二个参数，加')
      // watch(obj, (newValue, oldValue) => {
      console.log(newValue, "希望返回的user的值是普通的对象。newValue", oldValue, "oldValue");
    });

    // 默认就是深度侦听
    // watch(
    //   () => ({...user}),
    //   (newValue, oldValue) => {
    //     console.log(newValue, "newValue", oldValue, "oldValue");
    //   },
    //   {
    //     deep: true,
    //     immediate: true,
    //   }
    // );
    return {
      user,
      number,
      obj,
      changeData,
      changeObjDeep
    };
  },
};
</script>

<style>
</style>
