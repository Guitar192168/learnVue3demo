//类型的参数化


//在定义这个函数时，我不决定参数的类型
//而是让调用者以参数的形式告知，我这里的函数需要什么类型的参数
function foo<T>(num: T): T {
    return num
}

//1.明确的传入类型
foo<number>(1)
foo<string>('abc')
foo<string[]>(['123', 'cba'])

//2.类型推导
foo(233)


function bar<T>(num1: T, num2: T) {
    return num1 + num2
}

bar(1, 2)


// bar<string>('abc', 'cba')
// bar([123], [321])