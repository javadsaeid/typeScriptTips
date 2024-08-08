class Account {
    constructor(
        private readonly id: number,
        private owner: string,
        private _balance: number
    ){}

    get balance(): number {
        return this._balance;
    }

    set balance(inputNumber: number) {
        this._balance = inputNumber;
    }

    get someMethod(): string {
        return "some string";
    }

    set someMethod(inputString: string) {
        this.someMethod = inputString;
    }
 }

 const a = new Account(1, 'test', 2);
 a.someMethod = 'another string';
 console.log(a);

 // The error "Maximum call stack size exceeded" occurs because the someMethod setter is calling itself recursively,
 // which leads to an infinite loop. This happens because inside the setter for someMethod,
 // you're trying to assign a value to this.someMethod, which calls the setter again, and so on, indefinitely.
 //  *** To fix this issue, you should define a private property to store the value of someMethod and use this property inside the getter and setter.