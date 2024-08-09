// union types mean you can use multiple type for a variable.

let testUnionTypes: string | number | boolean = false;

testUnionTypes = 'ali'; console.log(testUnionTypes) // ali
testUnionTypes = 12335; console.log(testUnionTypes) // 12335

// the variable only can assign to the defined types for other types you get error. uncomment below code to see.

// testUnionTypes = undefined;