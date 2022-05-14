class Dep {
  constructor() {
    // this.subscribers = []
    this.subscribers = new Set() // 为啥防止重复添加，使用Set数据结构
  }

  // addEffect(effect) {
  //   this.subscribers.add(effect)
  // }
  depend() {
    if (hasEffect) {
      this.subscribers.add(hasEffect)
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}


let hasEffect = null;

function watchEffect(effect) {
  hasEffect = effect
  //先立即执行一下
  effect();
  // dep.addEffect(hasEffect)
  // dep.depend(hasEffect)
  hasEffect = null
}


function reactive(raw) {
  Object.keys(raw).forEach(item => {
    // let dep = new Dep()
    let value = raw[item];
    const dep = getDep(raw, item)
    Object.defineProperty(raw, item, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        value = newValue
        dep.notify()
      }
    })
  })
  return raw
}

let targetMap = new WeakMap()

//获取dep实例
function getDep(target, key) {
  // 拿到存放着所有dep的Map 比如info里面的dep(name) dep(age) 这些deps
  let depMaps = targetMap.get(target)
  if (!depMaps) {
    // targetMap.set(target, depMaps)
    depMaps = new Map()
    targetMap.set(target, depMaps)
  }
  // const dep = new Dep()
  let dep = depMaps.get(key)
  if (!dep) {
    dep = new Dep()
    depMaps.set(key, dep)
  }
  // }
  return dep
}

let info = reactive({name: 'yang', age: 1})
// watchEffect(function Double() {
//     console.log(info.age * 2, info.name);
//   }
// )

watchEffect(function () {
    console.log(info.age * info.age);
  }
)

// watchEffect(function () {
//   console.log(11)
// })

// dep.addEffect(Double)
info.age = info.age + 2
// dep.notify()
//
// info.name = 'ji'
/**
 * 这样的坏处就是比如info对象里面有name和age，但是某个函数只用到了name，另一个函数只用到了age。但是我们之间把整个函数进行了跟踪
 * 导致如果只是age变化了，但是会通知到所有函数都去更新。我们希望能只通知到使用了info.age的这个函数
 */
// dep.notify()
