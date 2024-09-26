// type-safe generic class
class Model<T> {
    constructor(public data: T) {
    }
}

interface UserModel {
    id: number;
    name: string;
    age: number;
}

const users = [{
    id: 1,
    name: 'ali',
    age: 33
}]

const wrapper = new Model<UserModel[]>(users);
console.log(wrapper)