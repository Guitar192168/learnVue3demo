<template>
  <!--  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">-->
  <input type="text" :value="modelValue" @input="valueChange($event)">
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

// 这里也是需要定义props属性
const props = defineProps({
  modelValue: String,
  // 这个属性默认是个对象，它包含了我们刚刚自定义的修饰符 .demo   而且值为true。因为我们使用了它
  modelModifiers: {default: () => ({})}
})

// 返回这个emit
const emit = defineEmits(['update:modelValue'])


const valueChange = (e) => {
  let value = e.target.value
  // 直接这样写props，会报错的
  console.log('modelModifiers', props.modelModifiers)
  if (props.modelModifiers.demo) {
    // 针对首字母大写
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }


  // console.log(e.target.value)
  emit('update:modelValue', value)
}


</script>

<style>

</style>
