import { Request, Response } from 'express';
import { editPilotsData, getPilotsData } from './drivers.services';

export async function getPilots(req: Request, res: Response) {
	const pilots = await getPilotsData();

	res.send(pilots);
}

export async function editPilots(req: Request, res: Response) {
	const { id } = req.params;

	if (!id || isNaN(parseInt(id))) {
		throw new Error('PARAM NOT A NUMBER');
	}

	const pilots = await editPilotsData(parseInt(id));

	res.send(pilots);
}
