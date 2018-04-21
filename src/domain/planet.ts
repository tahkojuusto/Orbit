import { StellarPosition } from './position';
import { IStellarObject, StellarTypeEnum } from '../interfaces/stellarObject';

/**
 * A planet in the space. Affects other planets and spacecrafts through gravity force.
 * 
 * @export
 * @class Planet
 * @implements {IStellarObject}
 */
export class Planet implements IStellarObject {
  private name: string;
  private mass: number;
  private radius: number;
  private position: StellarPosition;

  /**
   * Creates an instance of Planet.
   * @param {string} name 
   * @param {number} mass Mass of the planet in kilograms (kg).
   * @param {number} radius Radius of the planet in kilometers (km).
   * @param {number} x0 X-coordinate of the initial position.
   * @param {number} y0 Y-coordinate of the initial position.
   * @memberof Planet
   */
  public constructor(name: string, mass: number, radius: number, x0: number, y0: number) {
    this.name = name;
    this.mass = mass;
    this.radius = radius;
    this.position = new StellarPosition(x0, y0);
  }

  public getName(): string {
    return this.name;
  }

  public getType(): StellarTypeEnum {
    return StellarTypeEnum.Planet;
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