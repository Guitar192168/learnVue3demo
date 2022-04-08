<template>
  <div>
    111
    <input v-focus />
  </div>
</template>

<script>
export default {
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
};
</script>

<style>
</style>