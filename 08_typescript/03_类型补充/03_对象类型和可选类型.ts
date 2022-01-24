function person(user: { name: string | number, age: number, class?: number }) {//可选类型
    console.log(user);

}


person({ name: '张三', age: 19 })
person({ name: 111, age: 19 }) // 联合类型
person({ name: '张三', age: 19, class: 29 })
