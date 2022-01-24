// type

type Student = {
    name: string,
    age: number,
    class?: number
}

function person(student: Student) {
    console.log(student);
}

person({ name: 'zhang', age: 19 })
person({ name: 'zhang', age: 19, class: 19 })

