class Person {
    name: string
}

function foo(p: Person) {

}


//应用
//可以传实例也可以直接传对象
foo(new Person())
foo({name: '张三'})