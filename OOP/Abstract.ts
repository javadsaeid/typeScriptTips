
abstract class Animal {
    constructor(public name: string, public color: string){}

    abstract getName(): string;
}

class Dog extends Animal {
    constructor(name: string, color: string) {
        super(name, color);
    }

    override getName(): string {
       return this.name;
    }
}

// abstarct classes can not be initialized for using they just can be inherited. uncomment below code to see.
// let a = new Animal('test name', 'test color');

