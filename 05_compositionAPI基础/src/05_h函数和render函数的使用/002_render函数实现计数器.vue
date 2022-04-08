<script>
import {h} from 'vue'

export default {
  name: "002_render函数实现计数器",
  data() {
    return {
      counter: 0
    }
  },
  render() {
    return h('div', null, [
        h('h2', null, `当前计数${this.counter}`),
        h('button', {
          onclick: () => this.counter++
        }, '增加'),
        h('button', {
          onClick: () => this.counter--
        }, '减少')
      ]
    )
  }
}
</script>

<style scoped>

</style>
