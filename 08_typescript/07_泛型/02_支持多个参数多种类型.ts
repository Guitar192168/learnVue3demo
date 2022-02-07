function foo<T, P>(a: T, b: P) {
    console.log(a, b)
}

foo<number, string>(1, '23')