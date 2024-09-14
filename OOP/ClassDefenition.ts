// when using strict mode, every class property has to be defined either at the top of the class or inside the constructor.
// If you want a class property to be undefined, you will have to mark it as optional with the ? symbol.
class Point {
    lat = 0;
    lng = 0;
    elevation?: number;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}


const p1 = new Point(10,20);
console.log(p1.elevation)
console.log(p1)
p1.elevation = 124;
console.log(p1);