import PilotsData from '../static/drivers.json';
import shuffleDriversArray from '../utils';
import { Driver, OriginalDriver } from './driver.type';

const originalDrivers: OriginalDriver[] = [...(PilotsData as OriginalDriver[])];
const shuffledDrivers = shuffleDriversArray(originalDrivers);

export function getPilotsData() {
	return shuffledDrivers;
}

export function editPilotsData(id: number) {
	const selectedPilotIndex = shuffledDrivers.findIndex(
		(driver) => driver.id === id
	);

	if (selectedPilotIndex < 0) {
		return false;
	}

	if (selectedPilotIndex === 0) return shuffledDrivers;

	const temp = shuffledDrivers[selectedPilotIndex - 1];
	const tempPosition = shuffledDrivers[selectedPilotIndex].place;

	shuffledDrivers[selectedPilotIndex - 1] = shuffledDrivers[selectedPilotIndex];
	shuffledDrivers[selectedPilotIndex - 1].place = temp.place;

	shuffledDrivers[selectedPilotIndex] = temp;
	shuffledDrivers[selectedPilotIndex].place = tempPosition;

	return shuffledDrivers;
}
