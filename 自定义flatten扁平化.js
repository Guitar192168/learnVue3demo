function flatten(obj) {
    let result = {}
    let toString = Object.prototype.toString

    function flat(obj) {
        Object.keys(obj).forEach(key => {
            if (toString.call(obj[key]) === '[object Object]') {
                const obj1 = {}
                Object.keys(obj[key]).forEach(objKey => {
                    obj1[key + '.' + objKey] = obj[key][objKey]
                })
                flat(obj1)
            } else if (toString.call(obj[key]) === '[object Array]') {
                const arrObj = {}
                Object.keys(obj[key]).forEach((item, arrKey) => {
                    arrObj[key + '[' + arrKey + ']'] = obj[key][arrKey]
                })
                flat(arrObj)
            } else {
                result[key] = obj[key]
            }
        })
    }
    flat(obj)
    console.log(result, 'result');
}

flatten({
    a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
    b: [1, 3, {a: 2, b: 3}],
    c: 3
})