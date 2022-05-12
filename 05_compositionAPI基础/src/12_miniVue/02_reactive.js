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
  dep.depend(hasEffect)
  hasEffect = null
}


const dep = new Dep()
const info = {name: 'yang', age: 1}
watchEffect(function Double() {
    console.log(info.age * 2);
  }
)

watchEffect(function pingfang() {
    console.log(info.age * info.age);
  }
)

// dep.addEffect(Double)
info.age = info.age + 2
dep.notify()
