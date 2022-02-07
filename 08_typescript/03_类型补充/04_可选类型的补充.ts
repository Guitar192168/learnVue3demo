/** 其实可选类型可以当作是 类型和undefined的补充
 * 
 * @param message 
 */
function foo(message?: string) {
    console.log(message);
}

foo()
foo(undefined)
foo('nihao')

export {
    
}