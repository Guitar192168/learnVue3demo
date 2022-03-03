<template>
  <div class="home">我是Home</div>
  <div>{{ num }}</div>
  <button @click="add">增加</button>
  <hr />
  <button @click="to">跳转</button>
</template>

<script >
import { ref, } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    name: 'Home';
    let num = ref(10);
    const route = useRouter()

    const add = () => {
      num.value++
    }

    const to = () => {
      route.push({
        path: '/about'
      })
    }
    return {
      to,
      add,
      num,
      name
    }
  }
}

</script>
