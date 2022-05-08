<script>
import {ref} from 'vue'

export default {
  name: "03_JSX的使用",
  setup() {
    const num = ref(0)
    const increment = () => num.value++
    const decrement = () => num.value--
    //原本写render函数，h函数的时候，在setup内部写的话，也是返回一个
    return () => <div>
      <div>计数:{num.value}
        <h2>方法也需要{}单大括号</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <hr/>
        // 错误写法
        // <button onClick="increment">+1</button>
        // <button onClick="decrement">-1</button>
      </div>
    </div>
  }
}
</script>

<style scoped>

</style>
