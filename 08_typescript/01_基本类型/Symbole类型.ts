// const person = {
//     name: '张三',
//     name: 'lisi'
// }
//在es5中，我们没法给对象定义同样的名字，这里可以借助symbol

const n1: symbol = Symbol('name');
const n2: symbol = Symbol('name');
//虽然我这里传入的都是字符串name，但是n1 n2是不同的，不会冲突

const person = {
    [n1]: 111,
    [n2]: '王五'
}
console.log(person)


export {}