// TypeScript has a specific syntax for typing arrays.
const numbers: number[] = []; 

// or

const numbers_: number[] = [1, 2, 3];

numbers_.push(2) // -> it's ok because type is number. but example below will throw error because type can not be string.
// numbers.push("test") 