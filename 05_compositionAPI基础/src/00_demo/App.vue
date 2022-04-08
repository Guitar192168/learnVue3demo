.<template>
  <div>
    <input id="MyInputId" type="foo" value="11" class="head" @click="shuRu" />
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log(document.getElementsByClassName("head"));
    });

    const shuRu = () => {
      console.log("11");
    };
    return {
      shuRu,
    };
  },
};
</script>

<style>
</style>