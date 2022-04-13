<template>
  <div class="home">
    <child></child>
  </div>
</template>

<script>
// @ is an alias to /src
import child from "./child";

export default {
  name: 'Home',
  components: {
    child
  }
}
</script>
<style scoped>
.home {
  color: #008c8c;
}
</style>
