<template>
  <div>
    <h2>预期要一个字符串。异常情况下为null。为null的时候，可以被显式的用于属性移除</h2>
    <label for="demo">测试[]写方法</label>
    <input id="demo" type="text" v-on:[demo]="change">
    <hr>
    <div v-bind:[demoAttr]="attr">测试一下[]写属性</div>
    <div :[demoAttr]="attr">测试一下[]写属性</div>

<!--    这种不行,可以使用计算属性替代。-->
<!--    <div v-bind:['cla'+ a]="attr">测试一下[]写属性</div>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      a:'ss',
      attr:'TITle',
      demoAttr:"class", // 如果这里是非字符串类型的，则会触发警告  Invalid value for dynamic directive argument (expected string or null): 12
      demo:"focus"
    }
  },
  methods:{
    change(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>