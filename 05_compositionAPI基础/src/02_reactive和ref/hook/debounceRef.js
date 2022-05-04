import {customRef} from "vue";

export function debounceRef(value) {
  let timer = null
  // 1接收一个工厂函数，里面两个参数 track和trigger， 对其依赖项进行跟踪和更新触发
  return customRef((track, trigger) => {
    // let timer = null
    return {
      get() {
        // 跟踪，收集
        track()
        console.log(value, 'track收集')
        return value
      },
      set(newValue) {
        // 触发
        // console.log(newValue, 'trigger触发')
        clearTimeout(timer)
        // 防抖是先清理之前定义的timer，要放在代码上面
        timer = setTimeout(() => {
          console.log(newValue, 'trigger触发')
          value = newValue
          trigger()
        }, 1000)
        // clearTimeout(timer)
      }
    }
  })
}
