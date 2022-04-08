// interface IPerson {
//     name: string
//     age: number
// }

// 如果不传T或者P，则会默认给T一个string类型，给p一个number类型
interface IPerson<T = string, P = number> {
  name: T;
  age: P;
}

const info: IPerson<string, number> = {
  name: "123",
  age: 19,
};

console.log(info);
