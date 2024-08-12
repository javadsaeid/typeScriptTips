interface Person {
    name: string,
    age: number,
    gender: string,
}

// we can create a dynamic shape of Person Object using type mapping
type SecondPerson =  {
    [P in keyof Person]: Person[P]
}

// with this tecnique we always can have a