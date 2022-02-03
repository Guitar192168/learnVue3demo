// interface可以重复的对某个接口定义属性和方法，会合并到一起
// 而type的会冲突
// type 一般使用联合类型


interface Info {
    name: string
}

interface Info {
    age: number
}

const a: Info = {
    name: '张三',
    age: 18
}

//
// type Message = {
//     name: string
// }
//
// type Message = {
//     age: number
// }


interface Window {
    age: number
}

window.age = 19
console.log(window.age)
