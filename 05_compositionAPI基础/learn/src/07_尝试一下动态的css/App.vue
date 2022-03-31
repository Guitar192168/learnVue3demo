<template>
  <div class="title">测试一下动态css</div>
</template>

<script lang="ts">
export default {
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

<style>
.title {
  color: v-bind("obj.name");
}
</style>
