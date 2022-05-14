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
  // dep.depend(effect)
  activeEffect = null
}

function reactive(raw) {
  Object.keys(raw).forEach(key => {
    let value = raw[key]
    let dep = getDep(raw, key)
    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        //不能直接raw[key]，这样会被get再次拦截到
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
    // WeakMap的key只能是对象类型的 后面这里就得用普通Map了
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

const info = reactive({name: 'yang', age: 18})
const bar = reactive({num: 123})

watchEffect(function () {
  console.log(info.name, 'info.name')
})

watchEffect(function () {
  console.log(info.age + 1, 'info.age+1')
})

watchEffect(function () {
  console.log(bar.num, 'bar.num')
})

bar.num = bar.num+1
