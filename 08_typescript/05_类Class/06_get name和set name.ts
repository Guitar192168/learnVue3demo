class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  //如果写了很多私有属性的话，可以这样写
  //访问器 getter     取值器
  get name() {
    return this._name;
  }

  //访问器 setter     属性的赋值器
  set name(newName: string) {
    this._name = newName;
  }
}

let person = new Person("张三");
console.log(person.name);
person.name = "1112221";
console.log(person.name);
export {};
