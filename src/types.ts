export interface PropertyCapacityInfo {
	people: number;
	bedroom: number;
}

export interface PropertyData {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	superhost: boolean;
	location: string;
	capacity: PropertyCapacityInfo;
	image: string;
}