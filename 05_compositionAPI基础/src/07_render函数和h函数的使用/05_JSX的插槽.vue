<template>

</template>

<script>
import JSXChild from "@/07_render函数和h函数的使用/JSXChild";

export default {
  name: "05_JSX的插槽",
  setup() {
    return () => <div>
      <JSXChild>
        {
          {default: props => <button>'我是父级'{'作用域插槽:' + props.name}</button>}
        }
      </JSXChild>
    </div>
  }
}
</script>

<style scoped>

</style>
