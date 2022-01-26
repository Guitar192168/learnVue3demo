// instance 
function foo(date: Date | string) {
    if (date instanceof Date) {
        console.log('date是Date的实例', date, Date);
    } else {
        console.log(date);
    }
}
// foo('1')
foo(new Date())

// in  
type Person = {
    // run: () => void
    run: () => void
}

type Student = {
    swimming: () => void
}

function bar(user: Person | Student) {
    if ('run' in user) {
        user.run()
    } else {
        user.swimming()
    }
}

const user = {
    run: () => {
        console.log('running');
    }
}
bar(user)

export {

}