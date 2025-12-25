const sales = 'Toyota';

function carTypes(name){
    return name == 'Honda' ? name : `We don't sales this ${name}.`;
}
const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };
console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota