type thisType = {
    name: string
}

// 指定this为对象类型，该对象内一定有个name
function eating(this: thisType, message: string) {
    console.log(this.name, message);
}

const info = {
    name: '张三',
    eating: eating
}

info.eating('第二个参数')

// eating()//这样直接调用  上下文中的this类型是void的，是没有name属性的，不能这样直接调用
eating.call({ name: '我是call指定的this' }, '第二个参数222')

export {

}