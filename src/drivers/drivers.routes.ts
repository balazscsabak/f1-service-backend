import { Express, Request, Response } from 'express';
import { editPilots, getPilots } from './drivers.controller';

export default function (app: Express) {
	app.get('/api/drivers', getPilots);

	app.get('/api/drivers/:id/overtake', editPilots);
}
