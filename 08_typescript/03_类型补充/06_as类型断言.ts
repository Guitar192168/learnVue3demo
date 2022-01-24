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

/**
 *  类型为 'yang'
 */
const name2 = 'yang'

const name = ('yang' as unknown) as number

console.log(typeof name)

export {}