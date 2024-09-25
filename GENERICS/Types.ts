type MyGenericTyep<TData> = {
    data: TData;
}

const example: MyGenericTyep<string> = {
    data: 'test'
} 

console.log(example);

const example2: MyGenericTyep<{firstName: string}> = {
    data: {firstName: "javad"}
} 