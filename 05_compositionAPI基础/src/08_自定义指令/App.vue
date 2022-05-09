<template>
  <div>
    <input v-focus />

    <!-- <children></children> -->
  </div>
</template>

<script>
import { onMounted, onBeforeMount } from "vue";
// import children from "./children.vue";
export default {
  setup() {
    onBeforeMount(() => {
      console.log("父组件的onBeforeMount");
    });
    onMounted(() => {
      console.log("父组件的onMounted");
    });
  },
  directives: {
    focus: {
      created(el) {
        console.log("指令的created", el);
      },
      beforeMount(el) {
        console.log("指令的beforeMount", el);
      },
      mounted(el) {
        console.log("指令的mounted", el);
        el.focus();
      },
    },
  },
  components: {
    // children,
  },
};
</script>

<style>
</style>
