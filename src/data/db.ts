import { DynamoDB } from 'aws-sdk';
import { IStellarObject, StellarTypeEnum } from '../interfaces/stellarObject';
import { IStellarRepository } from '../interfaces/stellarRepository';
import { Planet } from '../domain/planet';

export class StellarRepository implements IStellarRepository {
  private dynamoDB: DynamoDB;

  public constructor() {
    this.dynamoDB = new DynamoDB({ region: 'eu-west-1' });
  }

  public saveStellarObject(stellarObject: IStellarObject) {
    const name: string = stellarObject.getName();
    const type: StellarTypeEnum = stellarObject.getType();
    const json = stellarObject.toJSON();

    const params = {
      Item: {
        'StellarType': {
          S: StellarTypeEnum[type]
        },
        'Name': {
          S: name
        },
        'StellarObject': {
          S: JSON.stringify(json)
        }
      },
      TableName: process.env.DYNAMODB_TABLE_NAME
    };

    return this.dynamoDB.putItem(params).promise();
  }

/*   public getPlanets(): Planet[] {
    const type: StellarTypeEnum = StellarTypeEnum.Planet;

    const params = {
      RequestItems: {}
    };

    params.RequestItems[process.env.DYNAMODB_TABLE_NAME] = {
      Keys: [
        {
          'StellarType': {
            S: 'Planet'
          }
        }
      ],
      ProjectionExpression: 'StellarObject'
    };

    return ;
  } */
}