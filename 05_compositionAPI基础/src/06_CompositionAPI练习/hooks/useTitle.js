import {ref, watch} from 'vue'

/**
 * 这么做是为了让useTitle返回的一个ref对象，然后我们还能去修改title
 * @param title
 * @returns {*}
 */
export function useTitle(title) {
  const titleRef = ref(title)
  // document.title = title

  watch(titleRef, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })

  return titleRef
}
