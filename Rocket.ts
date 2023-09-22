import { Payload } from './Payload.js';
import{ Cargo } from './Cargo.js'
import { Astronaut } from './Astronaut.js';


class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[]=[];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let sum = 0;
    for (const item of items) {
      sum += item.massKg;
    }
    return sum;
  }
  

  currentMassKg(): number {
    var sum=this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    return sum;
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;
  }
};

export { Astronaut, Cargo, Rocket }
