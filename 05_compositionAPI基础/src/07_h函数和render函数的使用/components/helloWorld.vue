
<script>
import { h } from "vue";
export default {
  //   setup() {
  //     return () => {
  //       return h("h1", null, "我是子组件");
  //     };
  //   },
  render() {
    console.log(this.$props);
    // return h("h1", null, "我是子组件");
    return h("h1", null, [
      h("div", {}, "我是子组件"),
      this.$slots.default
        ? this.$slots.default({name: "作用域插槽"})
        : h("h3", {  }, "我是子组件插槽的默认值"),
    ]);
  },
};
</script>

<style>
</style>