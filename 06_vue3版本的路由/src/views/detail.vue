<template>
  <div>
    <h3>
      About组件嵌套的路由
      <div>
        子组件detail
      </div>
    </h3>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from){
    console.log('children里面的beforeRouteLeave的to', to, from)
  }
}
</script>

<style>
h3 {
  color: #008c8c;
  font-size: 30px;
}
</style>