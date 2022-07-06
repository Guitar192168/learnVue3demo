<template>
  <div class="home">我是Home</div>
  <!-- <div>{{ num }}</div> -->
  <!-- <button @click="add">增加</button> -->
  <hr />
  <button @click="to"> 跳转</button>
  <button @click="demo">测试一下同名</button>
  <button @click="vue3Button">编程式导航</button>
  <button @click="vue3Button2">前进一步</button>

</template>

<script>
// import { ref, } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  data() {
    return {
      user: {
        name: 123
      },
      num: 456
    }
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return { name: 456 }
      },
      // todo  有待考证!!  props的优先级更高，拿不到data和computed里面的内容
      // validator: function (value) {
      //   return typeof value.name === this.num // props的优先级更高，拿不到data和computed里面的内容
      // }
    }
  },
  activated() {
    console.log('Home的activated');
  },
  created() {
    console.log('created', this.props, this.$props.user, this.user)
  },
  methods: {
    to() {
      this.$router.push({
        // path: "/about",
        name: 'About',
        query: {
          name: '约基奇'
        }
      })
    },
    demo() {

    }
  },
  setup(){
    // 注意 useRouter 和useRoute 两个  一个带r一个不带r       带r 的用作跳转 不带r用作接收和查询数据
    const router = useRouter()
    const vue3Button = () => {
      router.push('/about')
      // router.replace('/about')
    }

    const vue3Button2 = () => {
      // 前进一步  当然，你得有页面栈让你前进一步
      router.go(1)
      router.forward()
      router.back()
    }
    return {
      vue3Button,
      vue3Button2
    }
  }
  // setup() {
  //   name: 'Home';
  //   let num = ref(10);
  //   const route = useRouter()

  //   const add = () => {
  //     num.value++
  //   }

  //   const to = () => {
  //     route.push({
  //       path: '/about'
  //     })
  //   }
  //   return {
  //     to,
  //     add,
  //     num,
  //     name
  //   }
  // }
}

</script>

