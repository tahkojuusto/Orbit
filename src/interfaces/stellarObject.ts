export enum StellarTypeEnum {
  Planet,
  Spacecraft
}

export interface IStellarObject {
  getName(): string;
  getType(): StellarTypeEnum;
  toJSON(): JSON;
}