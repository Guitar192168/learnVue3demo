<template>
  <div>
    {{ message }}
    <div>
      <!-- {{ username }} -->
    </div>
    <div>
      {{ userNumber }}
    </div>
    <!-- 对ref的解包是浅层的解包，如何将ref放到一个reactive里，那么在template模板里使用的时候，还是会进行解包的 -->
    <div>{{ refData }}</div>
    <br />
    <hr />
    <button @click="testToRefs">测试一下toRefs 和 toRef</button>
    age:{{ age }} name:{{ name }} height:{{ height }}
  </div>
</template>

<script>
// import { reactive } from "@vue/runtime-core"
import { reactive, ref, toRefs, toRef } from "vue";

export default {
  setup() {
    const message = reactive({ username: 111 });
    const refData = ref("我是ref的数据");
    // const username = reactive('123')  //会出现警告value cannot be made reactive: 123
    const user = ref("ref嵌套在reactive也是可以被解包的");
    const userNumber = reactive(user);

    //toRefs
    const state = reactive({
      age: 18,
      name: "张三",
      height: 180,
    });

    // 直接解构不行
    // let { age, name } = state;
    // toRefs 将reactive对象返回的属性都转换为ref , 建立了一个链接，任何一个修改都会引起另外一个变化
    let { age, name } = toRefs(state);

    // 对其中一个属性进行转换ref   传入两个参数，第一个参数是obj对象，第二个是想要解构的key
    // !!  let { height } = toRef(state, "height");
    // 这里不需要再解构了
    let height = toRef(state, "height");

    const testToRefs = () => {
      //   state.age++;
      //   state.name = "李四";
      //   我直接写age，和name不行
      age.value++;
      name.value = "李四";

      height.value++;
    };

    return {
      refData,
      message,
      //   username,
      userNumber,
      age,
      name,
      height,
      testToRefs,
    };
  },
};
</script>

<style>
</style>