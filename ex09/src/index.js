const Person = require('./Person');

const person = new Person("John", "john@example.com", 35);

console.log(`Name: ${person._name}, email: ${person.email}, age: ${person.age}`);