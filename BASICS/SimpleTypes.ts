// define a new type

type N = number;
const n: N = 123;
// n only accept number values


type AnotherN = number | string;
const an: AnotherN = 'some text';
// an onlye accept number or string

//you can define another types with combination of different types:

type MoreComplexType = N | AnotherN;
const more: MoreComplexType = 345;
// only accept type of N or AnotherN