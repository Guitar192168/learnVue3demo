<template>
  <div>
    <!-- <input v-model="modelValue" type="text" /> -->
    <button @click="btnClick">子组件触发事件</button>
    <div>子组件的数据{{ modelValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    btnClick() {
      this.$emit("update:modelValue", "1233");
    },
  },
};
</script>

<style>
</style>