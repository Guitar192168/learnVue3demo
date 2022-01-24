// const obj = {
//   name: string,
//   age: number,
// };
// 错误的写法

//默认推导出类型
const info: object = {
    name: 'lisi',
    age: 18
}
// console.log(info.name)
// 不可以直接定义一个object类型，object类型里没有name


// 类型
type objectType = {
    name: string;
    age: number;
    class?: number;
    sex?: number;
};

const obj: objectType = {
    name: "zhangsan",
    age: 18,
    class: 1,
};

// obj = {
//   name:'lisi',
//   age:19,
//   class:2
// }

obj['name'] = 'lisi'

// 接口
// 接口与类型写法不同，类型 = {}  interface是直接一个对象{}
interface person {
    name: string;
    age: number;
}

console.log(obj);
/**
 * 由此可得  对象必须严格按照定义的类型来赋值，不能多也不能少（可选类型另说）
 */
