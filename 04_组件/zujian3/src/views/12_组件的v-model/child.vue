<template>
  <h2>子组件</h2>
  <!--  {{modelValue}}-->
  <br>
  <br>
  <br>
  <!--  <button @click="changeValue">切换值</button>-->


  <!--  <input type="text" :value="modelValue" @input="modelValue = $event.target.value">-->
  <!--  <input type="text" :value="modelValue" @input="changeValue">-->

  <!--  绑定到props中的值，是不对的-->
  <!--  <input v-model="bookNum">-->
  <!--  如果想直接就写个v-model的话，可以使用计算属性-->
  <input v-model="nums">
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      bookNum: ''
    }
  },
  computed: {
    nums: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods: {
    changeValue($event) {
      // this.$emit('update:modelValue', '123')
      this.$emit('update:modelValue', $event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
