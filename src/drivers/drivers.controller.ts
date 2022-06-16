import { Request, Response } from 'express';
import { editPilotsData, getPilotsData } from './drivers.services';

export function getPilots(req: Request, res: Response) {
	const pilots = getPilotsData();

	res.send(pilots);
}

export function editPilots(req: Request, res: Response) {
	const { id } = req.params;

	if (!id || isNaN(parseInt(id))) {
		throw new Error('TODO: HANDLE ERROR - PARAM NOT A NUMBER');
	}

	const pilots = editPilotsData(parseInt(id));

	if (pilots) {
		res.send(pilots);
	} else {
		throw new Error('TODO:HANDLE ERROR - INVALID ID');
	}
}
