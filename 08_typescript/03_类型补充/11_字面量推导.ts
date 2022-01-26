
function request(url: string, method: "POST" | "GET") {
    console.log(url);
    console.log(method);
}

type Method = "POST" | "GET"

type request = {
    url: string,
    method: Method //可以对options进行限制
}

const options: request = {
    url: 'http:xx',
    method: 'POST' //这里进行了字面量推理，string类型
}

// const options = {
//     url: 'http:xx',
//     method: 'POST' //这里进行了字面量推理，string类型
// } as const //也可以实现字面量推导

request(options.url, options.method)


// 类型断言，成更具体的类型
// request(options.url, options.method as Method)

export {

}