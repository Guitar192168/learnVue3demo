class Animal {
    action() {
        console.log('Animal run')
    }
}

class Dog extends Animal {
    action() {
        console.log('running')
    }
}

class Fish extends Animal {
    action() {
        console.log('swimming')
    }
}

//继承是多态的前提
//父类引用指向子类对象 const animal:Animal = new Dog()
//多态可以编写通用性更强的代码，而不是用联合类型或者函数重载，反复书写
function foo(animals: Animal[]) {
// function foo(animals: (Dog | Fish)[]) {
    animals.forEach(animal => {
        animal.action()
    })
}

foo([new Dog(), new Fish()])