<template>
  <button @click="sendPost">发送请求</button>
  {{name}}
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
  name: "04_watchEffect的副作用",
  setup() {
    let name = ref(123)
    const sendPost = () => {
      // console.log('使用了侦听器，对name进行侦听。！！必须是ref.value才可以。')
      name.value++;
    }

    /**
     * 如果在侦听器内发请求
     * 侦听器再次改变，或者停止了侦听器。我们应该取消上一次的请求。这就是清除副作用。
     */
    watchEffect((onInvalidate) => {
      console.log(name.value)

      const timer = setTimeout(() => {
        console.log('发送网络请求成功')
      }, 1000)

      onInvalidate(() => {
        console.log('这个最先执行。比监听器里面监听name.value的变化，都先执行。如果对name.value的侦听，' +
          '再次发生变化。就先执行这里的代码，清除上一次的定时器。绝！')
        clearTimeout(timer)
      })
    }, {
      flush: 'post'
    })
    return {
      sendPost,
      name
    }
  }
}
</script>

<style scoped>

</style>
