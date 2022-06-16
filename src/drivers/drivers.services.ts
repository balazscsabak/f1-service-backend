import PilotsData from '../static/drivers.json';
import shuffleDriversArray from '../utils';
import { Driver, OriginalDriver } from './driver.type';

const originalDrivers: OriginalDriver[] = [...(PilotsData as OriginalDriver[])];
const shuffledDrivers = shuffleDriversArray(originalDrivers);

export function getPilotsData() {
	return shuffledDrivers;
}

export function editPilotsData(id: number) {
	return shuffledDrivers;
}
