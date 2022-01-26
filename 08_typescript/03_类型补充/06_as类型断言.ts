// // <img id="my-app">
//
// const myEl = document.getElementById('#my-app') as HTMLImageElement // 类型是 HTMLElement
// /**
//  * 这里默认是类型推导为了HTMLElement 但是该类型上没有src属性
//  * 我们能够确定类型的情况下，可以进行类型断言,转换为更具体（或者不太具体的）类型版本。
//  * HTMLImageElement
//  */
//
// myEl.src = '图片地址' //类型HTMLElement上不存在属性"src"
//将一个相对普遍的类型转成比较具体的类型,从而能使用具体类型的某些方法

/**
 *  类型为 'yang'
 */
const name2 = 'yang'

const name = ('yang' as unknown) as number

console.log(typeof name)

/*  举例补充
* */
class Person {
    teaching() {
        console.log('教书')
    }
}

class Student extends Person {
    //  这里构造器+super也不行
    studying() {
        console.log('学生的专属方法:学习')
    }
}

function foo(user: Person) {
    // user.teaching() 有该方法
    //  user.studying()//Person类型上找不到该方法
    (user as Student).studying()
}

const stu = new Student()
foo(stu)


export { }