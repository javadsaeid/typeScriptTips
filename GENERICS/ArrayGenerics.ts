// array generic is a alternative way to create arrays in typescript
let someNumber: number[] = [1, 2, 3];
let someNumber_: Array<number> = [1, 2, 3];

// for array generic using other types are also valid.
interface TestInterface {
    name: string;
    date: Date;
}
let cosutomeArrayG: Array<TestInterface>;

// also union types.
let customeArrayGUnion: Array<TestInterface|number|string>;

customeArrayGUnion = [
    1,
    'test string',
    {name: "some name", date: new Date()}
];
