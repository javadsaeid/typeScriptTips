interface Car {
    name: string;
    drive(): void;
}

// interface is a boilerplate to forces classes use property and methods that defiend in that interface. uncomment drive method in below class to see.

class Benz implements Car {
    constructor(public name: string) {};

    drive(): void {
        console.log("car is driving")
    }
}