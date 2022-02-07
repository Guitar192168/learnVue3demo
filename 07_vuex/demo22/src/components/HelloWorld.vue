<template>

</template>
<script lang="ts" setup>
import demo from './index.js'
import demo2 from './index.js'

console.log(demo)
demo.name = 1
console.log(demo2)
console.log(demo === demo2)
</script>