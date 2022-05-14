class Dep {
  constructor() {
    this.subscribers = new Set()
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

// const dep = new Dep()

let activeEffect = null

function watchEffect(effect) {
  activeEffect = effect
  effect()
  // dep.depend()
  activeEffect = null
}


function reactive(raw) {
  Object.keys(raw).forEach(key => {
    let value = raw[key]
    const dep = getDep(raw, key)
    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        //不能直接raw[key]，这样写的话会引起对[key]的get拦截，疯狂死循环, 直到栈溢出
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

function getDep(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}

let info = reactive({name: 'yang', age: 19})
let obj = reactive({age: 1, name: 'qi'})

watchEffect(function () {
  console.log(info.age, 'info.age')
})

watchEffect(function () {
  console.log(info.name, 'info.name')
})

watchEffect(function () {
  console.log(obj.age, 'obj.age')
})

info.age = info.age + 10
