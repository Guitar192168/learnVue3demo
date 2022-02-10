const data = {
    a: {
        b: 1,
        c: 2,
        d: {
            e: 5
        }
    },
    b: [1, 3, {
        a: 2,
        b: {
            c: [1, 2, {d: 123}]
        }
    }],
    c: 3
}


function flatten(obj) {
    const res = {}

    function getType(val) {
        return Object.prototype.toString.call(val).toLowerCase().slice(8, -1)
    }

    function getKey(keys) {
        let key = ''
        keys.forEach(element => {
            if (element.includes('[')) {
                key += element
            } else {
                key += (key ? `.${element}` : element)
            }
        });
        return key
    }

    function pushKey(key, depKey) {
        const intKey = parseInt(key)
        //key是number的时候就代表是数组元素
        if (getType(intKey) === 'number' && !isNaN(intKey)) {
            depKey.push(`[${key}]`)
        } else {
            depKey.push(key)
        }
    }

    function flat(obj, depKey = []) {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                if (getType(element) === 'object') {
                    pushKey(key, depKey)
                    flat(element, depKey)
                } else if (getType(element) === 'array') {
                    pushKey(key, depKey)
                    flat(element, depKey)
                } else {
                    pushKey(key, depKey)
                    let resKey = getKey(depKey)
                    res[resKey] = element
                }
                depKey.pop()
            }
        }
    }

    flat(obj)

    return res

}


console.log(flatten(data))
