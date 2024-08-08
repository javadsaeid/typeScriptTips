// when we need to override a method of parent class we can do it like this example.
// to using override currectly it is better to uncomment "noImplicitOverride": true in the tsconfig.json

class Override {
    constructor(public input1: string, public input2: string) {};

    get concatInputs(): string {
        return this.input1 + " " + this.input2;
    }
}

class Overrided extends Override {
    override get concatInputs(): string {
        return "some text" + super.concatInputs
    }
}


let test = new Overrided('hello', 'world!');
console.log(test.concatInputs); // some texthello world!