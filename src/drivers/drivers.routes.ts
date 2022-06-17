import { Express } from 'express';
import { editPilots, getPilots } from './drivers.controller';

export default function (app: Express) {
	app.get('/api/drivers', getPilots);

	app.post('/api/drivers/:id/overtake', editPilots);
}
