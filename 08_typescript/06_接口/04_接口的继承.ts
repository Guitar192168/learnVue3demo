interface Person {
    teach: () => void
}

interface Student {
    study: () => void
}

interface Child extends Person, Student {

}

const info: Child = {
    teach() {

    },
    study() {

    }
}

export {}