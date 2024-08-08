class Person {
    constructor(public firstName: string, public lastName: string){}

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }

    walk() {
        console.log("walking");
    }
}

// when we need a Student Class with same propeties of person class
class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log("taking test");
    }
}

let st = new Student(1, 'ahmad', 'saeid');

console.log(st.takeTest()); // taking test
console.log(st.fullName); // ahmad saeid