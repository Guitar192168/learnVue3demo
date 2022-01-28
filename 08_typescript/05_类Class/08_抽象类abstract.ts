function makeArea(shape: Shape) {
    return shape.getArea()
}

// class Shape {
//      getArea(){
//      //    不应该有实现体
//      }
// }

abstract class Shape {
    abstract getArea()//抽象函数必须在抽象类里面
    //抽象类里面的方法必须被子类实现，没有实现就会报错  (否则该类必须是一个抽象类
}

class Rectangle extends Shape {
    private width: number
    private height: number

    constructor(width: number, height: number) {
        super()//父类内即使没有属性，也需要调用super
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    private r: number

    constructor(r: number) {
        super()
        this.r = r
    }

    getArea() {
        return Math.pow(this.r, 2) * 3.14
    }
}

const rectangle = new Rectangle(10, 20)
const circle = new Circle(10)
console.log(makeArea(rectangle));
console.log(makeArea(circle));

// console.log(makeArea(undefined))

// console.log(makeArea('123'));
//传入这个实例，class Shape内的getArea没有具体实现
// console.log(makeArea(new Shape()))

export {}