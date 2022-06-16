import { Driver, OriginalDriver } from '../drivers/driver.type';

// credit: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
export default function shuffleDriversArray(
	originalArr: OriginalDriver[]
): Driver[] {
	const shuffledDrivers = [...originalArr];

	for (let i = shuffledDrivers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = shuffledDrivers[i];
		shuffledDrivers[i] = shuffledDrivers[j];
		shuffledDrivers[j] = temp;
	}

	return shuffledDrivers.map((driver, i) => ({
		...driver,
		place: i + 1,
		imgUrl: `/public/images/${driver.code.toLowerCase()}.png`,
	})) as Driver[];
}
