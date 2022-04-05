<script>
import { h } from "vue";
import helloWorld from "./components/helloWorld.vue";
export default {
  //   setup() {
  //     return () => {
  //       h(helloWorld, {}, "");
  //     };
  //   },
  render() {
    return h(
      helloWorld,
      {},
      {
        default: (props) =>
          h("h2", {}, `app传给helloWorld组件插槽${props.name}`),
      }
    );
  },
};
</script>

<style>
</style>
