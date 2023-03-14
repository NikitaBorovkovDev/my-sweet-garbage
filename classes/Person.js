class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(anotherPerson) {
        if (this.age === anotherPerson.age) {
            console.log(`${this.name} age = ${anotherPerson.name} age`)
        } else if (this.age < anotherPerson.age) {
            console.log(`${this.name} младше, чем ${anotherPerson.name}`)
        } else if (this.age > anotherPerson.age) {
            console.log(`${this.name} старше, чем ${anotherPerson.name}`)
        }
        
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);



person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1)