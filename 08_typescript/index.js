let a = 123

function foo() {
    console.log(this.a)
}

function bar(n) {
    n()
}

bar(foo)

