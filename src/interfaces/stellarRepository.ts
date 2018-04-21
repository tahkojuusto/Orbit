import { IStellarObject, StellarTypeEnum } from './stellarObject';
import { Planet } from '../domain/planet';
import { Spacecraft } from '../domain/spacecraft';

export interface IStellarRepository {
  saveStellarObject(stellarObject: IStellarObject);
  // getPlanets(): Planet[];
  // getSpacecrafts(): Spacecraft[];
  // getPlanetByName(name: string): Planet;
  // getSpacecraftByName(name: string): Spacecraft;
}