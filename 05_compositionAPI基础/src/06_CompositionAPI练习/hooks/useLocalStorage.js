import {ref} from "vue";

export function useLocalStorage(key, value) {
  let valueRef = ref(value)


  if (value) {
    window.localStorage.setItem(key, JSON.stringify(valueRef))
  } else {
    /**
     * 错误写法，既然是ref对象，那么修改的话就得是 .value
     */
    // valueRef = JSON.parse(window.localStorage.getItem(key))
    valueRef.value = JSON.parse(window.localStorage.getItem(key))
  }

  // return {
  //   valueRef
  //
  return valueRef
}
