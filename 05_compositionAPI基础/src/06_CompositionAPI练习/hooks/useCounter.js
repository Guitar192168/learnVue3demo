import {ref} from 'vue'

export function useCounter() {
  let counter = ref(1)
  const increment = () => counter.value++
  const decrement = () => counter.value--
  return {
    counter, increment, decrement
  }
}
