import {ref} from 'vue'

/**
 * 页面滚动的位置
 * @returns {{scrollY, scrollX}}
 */
export function useScrollPosition() {
  const scrollX = ref(0)
  const scrollY = ref(0)

  // window.scroll()
  document.addEventListener('scroll', () => {
    // console.log(window.scrollX, 'window.scroll')
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  })
  return {
    scrollX,
    scrollY
  }
}

