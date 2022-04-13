<template>
  <div class="title">测试一下动态css</div>
  <About></About>
</template>

<script lang="ts">
import About from './About.vue'

export default {
  components: {
    About
  },
  setup() {
    const obj = {
      name: "#008c8c",
    };
    return {
      obj
    }
  },
};
</script>>

<style scoped>
.title {
  color: v-bind("obj.name");
}
</style>
