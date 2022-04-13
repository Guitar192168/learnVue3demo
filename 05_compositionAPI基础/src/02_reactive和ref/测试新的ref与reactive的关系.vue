.<template>
  <div>
    {{ message }}
    {{ info.message }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("hello world");

const info = {
  message,
};
</script>



<style>
</style>