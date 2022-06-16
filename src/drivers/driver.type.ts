export type OriginalDriver = {
	id: number;
	code: string;
	firstname: string;
	lastname: string;
	country: string;
	team: string;
};

export type Driver = OriginalDriver & {
	place: number;
	imgUrl: string;
};
