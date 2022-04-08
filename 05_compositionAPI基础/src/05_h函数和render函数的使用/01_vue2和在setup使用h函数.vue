
<script >
import { ref, h } from "vue";
export default {
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  setup() {
    const counter = ref(0);
    // return { counter };
    return () => {
      return h("div", { class: "title" }, [
        // h("h2", { class: "title" }, `当前计数: ${this.counter}`),
        h("h2", { class: "title" }, `当前计数: ${counter.value}`),//这里不会解包的，需要加 .value
        h(
          "button",
          {
            // onClick: () => this.counter++,
            // 需要去掉this，然后加一个   .value
            onClick: () => counter.value++,
          },
          "+1"
        ),
        h(
          "button",
          {
            onClick: () => counter.value--,
          },
          "-1"
        ),
      ]);
    };
  },

  // 在setup里你甚至可以不写这个render函数     然后在setup里面返回一个函数
  render() {
    // return h("div", { class: "title" }, [
    //   h("h2", { class: "title" }, `当前计数: ${this.counter}`),
    //   h(
    //     "button",
    //     {
    //       onClick: () => this.counter++,
    //     },
    //     "+1"
    //   ),
    //   h(
    //     "button",
    //     {
    //       onClick: () => this.counter--,
    //     },
    //     "-1"
    //   ),
    // ]);
  },
};
</script>

<style scoped>
.title {
  color: #008c8c;
}
.button {
  font-style: 20px;
}
</style>