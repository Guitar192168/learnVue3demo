<template>
  <!--  最普通的插槽-->
  <slot></slot>
  <!--  -->
  <!--  具名插槽-->
  <div class="container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
  <!--  动态插槽-->
  <div>
    <slot :name="name"></slot>
  </div>

</template>

<script>
export default {
  props: {
    name: {
      type: String,
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

div {
  height: 100px;
}

.left, .right {
  width: 100px;
  background-color: #009900;
}

.center {
  flex: 1
}
</style>