<template>
  <div id="nav">
    <input type="text" @change="demo" :value="inputValue">

    <hr>

    <!-- tag元素，vue3版本已经废弃   tag="button"  原本会渲染成a链接的router-link 最终渲染成了 button元素 -->
    <router-link to="/home" active-class="yjq-active">
      <template v-slot:default>
        <button>
          Home
        </button>
        <button> 还可以展示组件</button>
      </template>
    </router-link>
    |
    <router-link to="/about" active-class="yjq-active">About</router-link>
    <div>
      有to属性 有replace属性
      已经不使用tag属性了
    </div>

    <div>哈哈</div>
    <router-view></router-view>
    <div>你好</div>

    <!-- <keep-alive :include="['About']">
      <router-view />
    </keep-alive> -->

    <!--    <router-view v-slot="{ Component }">-->
    <!--      <keep-alive :include="['About']">-->
    <!--        <component :is="Component"/>-->
    <!--      </keep-alive>-->
    <!--    </router-view>-->


    <!--  还有个属性 router-link-exact-active 

      如果路径全匹配，则自动添加这个属性

      如果只是部分匹配 如 home/detail为全路径
      但是只匹配了 /home  则只自动添加上 router-link-active 属性
    -->

    <button @click="testAddRoute">测试动态路由</button>
    <hr>
    <button @click="testAddChildRoute">测试动态添加二级路由</button>
  </div>
</template>
<script>
import {useRouter, ref} from 'vue-router';

export default {
  setup() {
    const router = useRouter()
    const testAddRoute = () => {
      router.push('/addHome')
    }

    const testAddChildRoute = () => {
      router.push('/home/addChildHome')
    }

    const demo = () => {

    }

    return {
      testAddRoute,
      testAddChildRoute
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: red;
}

.router-link-active {
  /*  直接写, 不生效 应该是层级不够*/
}

#nav a.router-link-active {
  color: orange;
}

#nav a.yjq-active {
  color: #008c8c;
}

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
