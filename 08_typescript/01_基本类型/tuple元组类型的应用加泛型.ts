// 加入泛型
function useState<T>(state: T) {

    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }

    const tuple: [T, (newState: T) => void] = [currentState, changeState]

    return tuple
}

const [counter, setCounter] = useState(10)
console.log(counter);
setCounter(20)
console.log(counter);

const [title, setTitle] = useState('我是title')
console.log(title);
setTitle('修改后的title')
console.log(title);

const [flag, changeFlag] = useState(true)
changeFlag(false)
export {

}