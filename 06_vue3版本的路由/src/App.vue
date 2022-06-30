<template>
  <div id="nav">
    <router-link to="/home"  active-class="yjq-active">Home</router-link>
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

  </div>
</template>
<script>

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

.router-link-active{
  /*  直接写, 不生效 应该是层级不够*/
}

#nav a.router-link-active {
  color: orange;
}
#nav a.yjq-active{
  color:#008c8c;
}
/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

</style>
