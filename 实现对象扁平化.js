function flatten(obj) {
    let resObj = {}

    function flat(obj, lastKey = '') {
        Object.keys(obj).forEach(item => {
            let objKey = +item === +item ? `[${item}]` : item
            if (typeof obj[item] === 'number') {
                resObj[lastKey + objKey] = obj[item]
            } else {
                // const newKey = obj[item] instanceof Array ? item : lastKey ? lastKey + item : item + '.'
                const newKey = obj[item] instanceof Array ? item : (lastKey ? lastKey + objKey + '.' : item + '.')
                console.log(newKey, 'newKey')
                flat(obj[item], newKey)
            }
        })
    }


    flat(obj)
    console.log(resObj, 'resObj')

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