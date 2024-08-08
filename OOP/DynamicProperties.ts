// the code below is imposible in type script uncomment to see.
// let obj = {};
// obj.name = 'a';

// to solve this issue we shuold use indes signatures

class Obj {
    [name: string]: string;
}

const obj = new Obj;
obj.name = 'a';

//-----------------------------------------------------------------

// if we need some fix properties then we need to add the type of that property to the index signature too

class SecondObj {
    [name: string]: string | number, // remove the number to see the error
    id: number = 0;
}

//-----------------------------------------------------------------

// antother usefull exampel

class Seats {
    [seatNumber: string] : string
}

const seat = new Seats;
seat['A1'] = 'mona'; // or seat.A1
seat['A2'] = 'mina'; // or seat.A2

console.log(seat) // { A1: 'mona', A2: 'mina' }
