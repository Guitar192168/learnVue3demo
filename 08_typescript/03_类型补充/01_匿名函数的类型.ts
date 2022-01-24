
// const arr = [1, 2, 3, 4, 5]

const names = ['张三', '12345']

names.forEach(item => {
    console.log(item, item.length);
})

// 匿名函数与函数声明会有一些不同：
// 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时；
// 该函数的参数会自动指定类型
names.forEach(function (item) {
    console.log(item, item.length);
})

