import { Astronaut, Cargo, Rocket } from './Rocket.js';
var name1=prompt("Enter name:");
var weight1=prompt("Enter weight");
var name2=prompt("Enter name:");
var weight2=prompt("Enter weight");

const astronaut1=new Astronaut(parseInt(weight1,10),name1);
const astronaut2=new Astronaut(parseInt(weight2,10),name2);

// Create astronauts and cargo
// const astronaut1 = new Astronaut(75, 'John');
// const astronaut2 = new Astronaut(82, 'Jane');
// const cargo1 = new Cargo(500, 'Food');
// const cargo2 = new Cargo(1000, 'Equipment');

// Create a rocket
const rocket = new Rocket('Chandrayan', 5000);

// Load astronauts and cargo into the rocket
// rocket.addAstronaut(astronaut1);
// rocket.addAstronaut(astronaut2);
// rocket.addCargo(cargo1);
// rocket.addCargo(cargo2);

// Check the current mass of the rocket
//console.log(`Rocket's current mass: ${rocket.currentMassKg()} kg`);
console.log(rocket.addAstronaut(astronaut1));
console.log(astronaut1.name);
console.log(rocket.name);
console.log(astronaut1.name);
console.log(astronaut1.massKg);
console.log(astronaut2.name);
console.log(astronaut2.massKg);