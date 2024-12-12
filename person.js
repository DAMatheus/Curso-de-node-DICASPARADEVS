class Person {
    constructor(name) {
        this.name = name
    }

    sayMyName() {
        return `My name this ${this.name}`
    }
}

module.exports = {
    Person,
}

