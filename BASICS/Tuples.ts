// tuples are like array's but with fixed length and type
const sampleTuple: [number, string] = [1, 'one'];

// why the below code will work??!
const numberT: [number] = [1];
numberT.push(2);
numberT.push(4);

console.log(numberT); // -> [1, 2, 4]

// check the link below.
//https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array