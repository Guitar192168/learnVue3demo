class Person<T> {
  age: T;

  constructor(age: T) {
    this.age = age;
  }
}

const p1 = new Person(18);
// 其实下面这个提前用到了泛型
interface argLength {
  length: number;
}

function foo<Type extends argLength>(arg: Type) {
  return arg.length;
}

console.log(foo("abc"));
console.log(foo([1, 2, 3, 4, 5]));
console.log(foo({ length: 200, name: 18 }));

export {};
