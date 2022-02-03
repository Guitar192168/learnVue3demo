// implements
interface IAnimal {
    swimming: () => void
}

interface IPerson {
    eating: () => void
}

class Animals {

}

//让类去实现多个接口
class Fish extends Animals implements IAnimal, IPerson {
    swimming() {

    }

    eating() {

    }
}

class Student implements IAnimal {
    swimming() {

    }
}

// function foo(fish: Animal) {
//     // 我们这里只用swimming ,没必要传一整个Fish对象
//     fish.swimming()
// }

//面向接口编程
//实现了接口的类对应的的对象，都是可以传入的
function foo(fish: IAnimal) {
    // 我们这里只用swimming ,没必要传一整个Fish对象
    fish.swimming()
}

foo(new Fish())
foo(new Student())
foo({
    swimming() {
    }
})

