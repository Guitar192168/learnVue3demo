<template>
  <div>
    <h2>分开写</h2>
    <div class="static" :class="{active:isActive,'text-danger':demo}">测试一下动态class。这种是静态的跟动态的分开写的</div>
    <hr>
    <h2>换种写法</h2>
    <div :class="{static, active:isActive}">合到一块好像不行</div>

    <hr>
    <h2>对象写法</h2>
    <div> 换种思路，甚至可以直接给:class绑定一个对象，属性都是class们</div>
    <div :class="classObj">给:class一个对象</div>
    <div>当然也可以用计算属性来</div>

    <hr>
    <h2>数组写法</h2>
    <div :class="[testArr,testArr2]">数组写法尝试</div>
    <div :class="[{active:isActive}]">多个变量时用数组比较繁琐，可以在数组内用对象的</div>

    <div>style同</div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      isActive: true,
      demo: true,
      // classObj: {
      //大错特错，不是写data中的变量，是写css中的class类
      //   isActive: true,
      //   demo: true,
      // }
      classObj: {
        active: true,
        'text-danger': true,
        static: true
      },
      //数组的
      testArr:'active',
      testArr2:'static',
    }
  }
}
</script>

<style scoped>
.text-danger {
  border: 2px solid orange;
}

.static {
  font-size: 30px;
}

.active {
  color: #008c8c;
}
</style>