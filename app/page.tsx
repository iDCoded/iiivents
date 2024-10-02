import EventsList from "@/components/EventsList";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Home = () => {
	return (
		<>
			<div className=" flex flex-row justify-between p-8">
				<h1 className="text-4xl font-bold">Upcoming Events</h1>
				<SignedOut>
					<SignInButton mode="modal" />
				</SignedOut>
				<SignedIn>
					<UserButton showName />
				</SignedIn>
			</div>
			<div className="events p-8 flex flex-row gap-8 flex-wrap">
				<EventsList />
			</div>
		</>
	);
};

export default Home;
