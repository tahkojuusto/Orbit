import { StellarPosition } from './position';
import { IJSON } from '../util/interface';

export class Planet implements IJSON {
  private name: string;
  private mass: number;
  private radius: number;
  private position: StellarPosition;

  public constructor(name: string, mass: number, radius: number, x0: number, y0: number) {
    this.name = name;
    this.mass = mass;
    this.radius = radius;
    this.position = new StellarPosition(x0, y0);
  }

  public toJSON(): JSON {
    return JSON.parse(JSON.stringify({
      name: this.name,
      mass: this.mass,
      radius: this.radius,
      x: this.position.getX(),
      y: this.position.getY()
    }));
  }
}