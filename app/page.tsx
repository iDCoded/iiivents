import EventsList from "@/components/EventsList";
import React from "react";

const Home = () => {
	return (
		<>
			<div className="flex p-8">
				<h1 className="text-4xl font-bold">Upcoming Events</h1>
			</div>
			<div className="events p-8 flex flex-row gap-8 flex-wrap">
				<EventsList />
			</div>
		</>
	);
};

export default Home;
