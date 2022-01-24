
// const { counter, setCounter } = {counter:1, setCounter:function(){}}使用对象就不具备通用性

function useState(state: any) {
    let currentState = state
    // changeState(newState: any){
    //     state = newState
    // }
    const changeState = (newState: any) => {
        currentState = newState
        console.log(newState,'22');
    }

    const tuple: [number, (newState: any) => void] = [currentState, changeState]
    return tuple
}

const [counter, setCounter] = useState(10)
console.log(counter);
setCounter(20)

const [title, setTitle] = useState('我是title')
console.log(title);
setTitle('修改后的title')
console.log(title);