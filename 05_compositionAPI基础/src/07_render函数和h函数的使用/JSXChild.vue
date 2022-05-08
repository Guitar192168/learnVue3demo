<template>

</template>

<script>
export default {
  name: "JSXChild",
  setup(props, context) {
    return () => <div>
      {context.slots.default ? context.slots.default({name: 123}) : '我是JSX子组件的默认插槽'}
    </div>
  }
}
</script>

<style scoped>

</style>
