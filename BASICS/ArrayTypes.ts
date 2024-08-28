// TypeScript has a specific syntax for typing arrays.
const numbers: number[] = []; 
// or
const numbers_: number[] = [1, 2, 3];

numbers_.push(2) // -> it's ok because type is number. but example below will throw error because type can not be string.
// numbers.push("test") 



// more advanced example
type NumberOrString = number | string;

function getSumOfArr(nums: NumberOrString[]) {
    return nums.map(n => convertToNumber(n)).reduce((total, value) => total + value, 0);
}

function convertToNumber (input: number | string): number {
    if(typeof(input) === 'string') {
        input = Number.parseInt(input)
    }

    return input;
}

console.log(getSumOfArr([1, "2", "3", 4])); // -> 10


// take care of assigning empty array to a variable
const Arr: [] = [];
// the code below will throw error
// Arr.push(2);
