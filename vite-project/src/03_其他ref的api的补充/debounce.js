// 自定义ref

import {
  customRef
} from 'vue';

// export function debounceRef(fn, delay = 500) {
// export  function debounceRef(value, delay = 500) {
// default就不需要起名字
export default function (value, delay = 1000) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track(); //用到这个值的时候就需要收集一下依赖
        return value;
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue;
          trigger()
        }, delay)
      }
    }
  })
}


// 如果不写 default就需要给function  起名字，然后import需要使用  import {} 来导入
