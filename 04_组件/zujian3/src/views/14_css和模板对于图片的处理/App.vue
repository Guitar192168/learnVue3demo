<template>
  <div class="demo">
    这里没有内容撑起来， background: url("~@/assets/logo.png") no-repeat;只是一个属性，所以需要设置宽和高
  </div>
  <br>
  <hr>
  <hr>
  <hr>
  <h2>这种是行内写法</h2>
  <div :style="{background:'url(~@/assets/logo.png)'}"></div>
  <hr>
  <br>
  <br>
  <br>
  image标签已废弃，不建议生产环境使用
  img标签是自闭合标签，必须有一个开始标签，不允许有闭合标签
  <img :src="imgUrl"/>
  <button @click="getList">测试</button>
</template>

<script>
import Big from 'big.js';

export default {
  name: "App",
  components: {},
  data() {
    return {
      imgUrl: require('@/assets/logo.png')
    }
  },
  created() {
    let x = new Big(12255.21)
    console.log(x)
    console.log(x.times(19.5).toNumber())
  },
  methods:{
    test(){
      return new Promise((resolve, reject) => {
        // resolve('我是结果')
        reject('错误')
      })
    },
    async getList(){
      try{
        const res = await this.test().catch(e =>{
          console.log(e,'紧跟着的catch')
          // return 123
        })
        console.log(res,'res')
      }catch (e){
        console.log(e,'try catch')
      }
    }
  }
}


</script>

<style scoped>
.demo {
  height: 300px;
  height: 200px;
  background: url("~@/assets/logo.png") no-repeat;
}
</style>
