function flatten(obj) {
    let flatObj = {};

    (function check(data, pKey = '') {
        Object.keys(data).forEach((key, i) => {
            const k1 = +key === +key ? `[${key}]` : key

            if (typeof data[key] !== 'object') {
                flatObj[pKey + k1] = data[key]
            } else {
                const k = data[key] instanceof Array ? pKey + key : `${pKey}${k1}.`
                check(data[key], k)
            }
        })
    })(obj);

    return flatObj
}

flatten({
        a: {
            b: 1,
            c: 2,
            d: {
                e: 5
            }
        },
        b: [1, 3, {
            a: 2,
            b: 3
        }],
        c: 3
    }
)