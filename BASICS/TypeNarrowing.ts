// type narrowing is used when we need realize to exact type while using union types.
function buyFunction(stuff: string, count: string | number) {
    if(typeof(count) === 'string') {
        return `${count.toLowerCase()} of ${stuff} is ordered`;
    }

    return `${count} of ${stuff} is ordered`;
}

// uncomment the below function to see the error!
// function buyFunction(stuff: string, count: string | number) {
//     return `${count.toLowerCase()} of ${stuff} is ordered`;
// }



