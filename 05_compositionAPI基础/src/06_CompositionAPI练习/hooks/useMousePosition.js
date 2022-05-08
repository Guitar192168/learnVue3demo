import {ref} from "vue";

export function useMousePosition() {

  const mouseX = ref(0)
  const mouseY = ref(0)

  document.addEventListener('mousemove', (event) => {
    // console.log('event', event)
    mouseX.value = event.pageX
    mouseY.value = event.pageY
  })

  return {
    mouseX,
    mouseY
  }
}
