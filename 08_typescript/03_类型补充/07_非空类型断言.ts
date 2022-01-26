// 非空断言
// 可选类型其实就 string | undefined 在这个例子里
function foo(message?: string) {
    console.log(message!.toUpperCase());
}
// 直接编译都不通过




foo('hello')

// foo()


export {

}
// 报错提示： Object is possibly 'undefined'.
