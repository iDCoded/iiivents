/* eslint-disable @typescript-eslint/no-explicit-any */
import EventCard from "@/components/EventCard";

export default async function Page() {
	const fetchEvents = async () => {
		const res = await fetch("/api/events", {
			cache: "no-store",
		});
		const events = await res.json();
		return events;
	};
	const events = await fetchEvents();

	return (
		<>
			<div>
				{events.map((event: any) => {
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
}
