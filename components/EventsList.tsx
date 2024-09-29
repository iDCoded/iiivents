import { EventProps } from "@/types/global";
import EventCard from "./EventCard";
import { Alert, AlertTitle } from "./ui/alert";
import { headers } from "next/headers";

const EventsList = async () => {
	const fetchEvents = async () => {
		const host = headers().get("host");
		const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
		const res = await fetch(`${protocol}://${host}/api/events`, {
			cache: "no-store",
		});
		const events = await res.json();

		if (!res.ok) {
			throw new Error("Failed to fetch events");
		}
		return events;
	};

	const events = await fetchEvents();

	return (
		<>
			<div className="flex flex-row flex-wrap gap-8 sm:justify-normal justify-center">
				{events.length > 0 ? (
					events.map((event: EventProps) => {
						return (
							<EventCard
								key={event.eventName}
								eventName={event.eventName}
								eventDescription={event.eventDescription}
								eventPrice={event.eventPrice}
							/>
						);
					})
				) : (
					<>
						<Alert className="text-xl">
							<AlertTitle>There are no active events</AlertTitle>
						</Alert>
					</>
				)}
			</div>
		</>
	);
};

export default EventsList;
