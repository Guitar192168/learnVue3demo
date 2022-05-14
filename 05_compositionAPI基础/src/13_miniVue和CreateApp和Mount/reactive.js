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
  let proxy = new Proxy(raw, {
    //是对proxy实例进行劫持，而不是对原对象raw进行劫持
    get(target, prop) {
      const dep = getDep(raw, prop)
      // let value = target[prop]
      dep.depend()
      // return value
      return target[prop]
    },
    set(target, prop, newValue) {
      const dep = getDep(raw, prop)
      target[prop] = newValue
      dep.notify()
    }
  })
  return proxy
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

// const info = reactive({name: 'yang', age: 18})
// const bar = reactive({num: 123})
//
// watchEffect(function () {
//   console.log(info.name, 'info.name')
// })
//
// watchEffect(function () {
//   console.log(info.age + 1, 'info.age+1')
// })
//
// watchEffect(function () {
//   console.log(bar.num, 'bar.num')
// })
//
// bar.num = bar.num + 1
