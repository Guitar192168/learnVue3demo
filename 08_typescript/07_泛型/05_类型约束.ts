function getLength<T>(arg: T) {
    return arg.length
}

getLength('123')

function getLength1<T extends { length: number }>(arg: T) {
    return arg.length
}

getLength2('123')

//

interface argLength {
    length: number
}

function getLength2<T extends argLength>(arg: T) {
    return arg.length
}


getLength2('123')
