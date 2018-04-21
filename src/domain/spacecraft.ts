import { StellarPosition } from './position';
import { IJSON } from '../util/interface';

export class Spacecraft implements IJSON {
  private name: string;
  private mass: number;
  private position: StellarPosition;

  public constructor(name: string, mass: number, x0: number, y0: number) {
    this.name = name;
    this.mass = mass;
    this.position = new StellarPosition(x0, y0);
  }

  public toJSON(): JSON {
    return JSON.parse(JSON.stringify({
      name: this.name,
      mass: this.mass,
      x: this.position.getX(),
      y: this.position.getY()
    }));
  }
}