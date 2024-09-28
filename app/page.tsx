import EventsList from "@/components/EventsList";
import React from "react";
import AdminButton from "@/components/AdminButton";

const Home = () => {
	return (
		<>
			<div className=" flex flex-row justify-between p-8">
				<h1 className="text-4xl font-bold">Upcoming Events</h1>
				<AdminButton />
			</div>
			<div className="events p-8 flex flex-row gap-8 flex-wrap">
				<EventsList />
			</div>
		</>
	);
};

export default Home;
