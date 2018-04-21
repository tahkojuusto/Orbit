import { StellarPosition } from './position';
import { IStellarObject, StellarTypeEnum } from '../interfaces/stellarObject';

export class Spacecraft implements IStellarObject {
  private name: string;
  private mass: number;
  private position: StellarPosition;

  /**
   * Creates an instance of Spacecraft.
   * @param {string} name 
   * @param {number} mass Mass of the spacecraft in kilograms (kg).
   * @param {number} x0 X-coordinate of the initial position.
   * @param {number} y0 Y-coordinate of the initial position.
   * @memberof Spacecraft
   */
  public constructor(name: string, mass: number, x0: number, y0: number) {
    this.name = name;
    this.mass = mass;
    this.position = new StellarPosition(x0, y0);
  }

  public getName(): string {
    return this.name;
  }

  public getType(): StellarTypeEnum {
    return StellarTypeEnum.Spacecraft;
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