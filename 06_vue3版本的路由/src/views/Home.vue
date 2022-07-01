<template>
  <div class="home">我是Home</div>
  <!-- <div>{{ num }}</div> -->
  <!-- <button @click="add">增加</button> -->
  <hr />
  <button @click="to"> 跳转</button>
  <button @click="demo">测试一下同名</button>

</template>

<script>
// import { ref, } from 'vue'
// import { useRouter } from 'vue-router'
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
        return {name: 456}
      },
      // ??todo  有待考证!!  props的优先级更高，拿不到data和computed里面的内容
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

