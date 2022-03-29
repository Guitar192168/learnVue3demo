function getLength<T>(arg: T) {
  return arg.length; // 泛型T身上不一定有length属性s
}

getLength("123");

function getLength1<T extends { length: number }>(arg: T) {
  return arg.length;
}

getLength2("123");

// 泛型约束

interface argLength {
  length: number;
}

function getLength2<T extends argLength>(arg: T) {
  return arg.length;
}

getLength2("123");
