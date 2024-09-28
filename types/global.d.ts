interface EventProps {
	eventName: string;
	eventDescription: string;
	eventPrice: number;
}

export interface EventInput {
	eventName: string;
	eventDate: string; // Assuming date is in string format
	eventPrice: number;
	eventDescription: string;
}

interface ErrorResponse {
	error: string;
}
