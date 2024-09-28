import EventCard from "@/components/EventCard";
import React from "react";

const Home = () => {
	const events: EventProps[] = [
		{
			eventName: "Event 1",
			eventDesc: "Desciption of event 1",
			eventPrice: 250,
		},
		{
			eventName: "Event 2",
			eventDesc: "Desciption of event 2",
			eventPrice: 450,
		},
		{
			eventName: "Event 3",
			eventDesc: "Desciption of event 3",
			eventPrice: 350,
		},
		{
			eventName: "Event 4",
			eventDesc: "Desciption of event 4",
			eventPrice: 1250,
		},
	];

	return (
		<>
			<div className="flex p-8">
				<h1 className="text-4xl font-bold">Upcoming Events</h1>
			</div>
			<div className="events p-8 flex flex-row gap-8 flex-wrap">
				{events.map((event) => {
					return (
						<EventCard
							key={event.eventName}
							eventName={event.eventName}
							eventDesc={event.eventDesc}
							eventPrice={event.eventPrice}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Home;
