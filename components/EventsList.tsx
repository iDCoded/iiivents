import { EventProps } from "@/global";
import EventCard from "./EventCard";

const EventsList = async () => {
	const fetchEvents = async () => {
		const res = await fetch("http://localhost:3000/api/events", {
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
			<div>
				{events.map((event: EventProps) => {
					return (
						<EventCard
							key={event.eventName}
							eventName={event.eventName}
							eventDescription={event.eventDescription}
							eventPrice={event.eventPrice}
						/>
					);
				})}
			</div>
		</>
	);
};

export default EventsList;
