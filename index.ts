import * as express from 'express';
import * as bodyParser from 'body-parser';

import { Planet } from './src/domain/planet';
import { Spacecraft } from './src/domain/spacecraft';

let app: express.Application = express();

let planetRepository = new Object();

app.use(bodyParser.json());

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('Hello, world!');
});

app.post('/planets', (request: express.Request, response: express.Response) => {
  const planetJSON: JSON = request.body;
  const name: string = planetJSON['name'];
  const mass: number = planetJSON['mass'];
  const radius: number = planetJSON['radius'];
  const x0: number = planetJSON['x0'];
  const y0: number = planetJSON['y0'];

  const planet: Planet = new Planet(name, mass, radius, x0, y0);
  response.send(planet.toJSON());
});

app.post('/spacecrafts', (request: express.Request, response: express.Response) => {
  const spacecraftJSON: JSON = request.body;
  const name: string = spacecraftJSON['name'];
  const mass: number = spacecraftJSON['mass'];
  const x0: number = spacecraftJSON['x0'];
  const y0: number = spacecraftJSON['y0'];

  const spacecraft: Spacecraft = new Spacecraft(name, mass, x0, y0);
  response.send(spacecraft.toJSON());
});

app.listen(8080);