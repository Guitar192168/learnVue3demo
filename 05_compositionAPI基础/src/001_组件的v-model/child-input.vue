<template>
  <div>
    <!-- <input :value="modelValue" @click="btnClick" type="text" /> -->
    <!-- 犯错，这里可不是@click, 是@input -->

    <!-- <input :value="modelValue" @input="btnClick" type="text" /> -->

    <!-- 如果学v-model='modelValue'是不对的，直接通过props进行双向绑定是不对的 -->
    <input v-model="message" type="text" />
    <input v-model="titleValue" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    message: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
    titleValue: {
      get() {
        return this.title;
      },
      set(newValue) {
        this.$emit("update:title", newValue);
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
</style>