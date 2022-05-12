class Dep {
  constructor() {
    // this.subscribers = []
    this.subscribers = new Set() // 为啥防止重复添加，使用Set数据结构
  }

  watchEffect(effect) {
    this.subscribers.add(effect)
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

const info = {name: 'yang', age: 1}

function Double() {
  console.log(info.age * 2);
}

const dep = new Dep()
Double()
dep.watchEffect(Double)
info.age = info.age + 2
dep.notify()
