class Person {
    constructor(name, email, age) {
        this._name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        const personInfo = `Name: ${this._name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}

module.exports = Person;