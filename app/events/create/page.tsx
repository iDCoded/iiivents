"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateEventPage() {
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [ticketPrice, setTicketPrice] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log({ eventName, eventDate, ticketPrice });
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<h1 className="mb-4 text-2xl font-bold">Create Event</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<Input
					value={eventName}
					onChange={(e) => setEventName(e.target.value)}
					placeholder="Event Name"
					required
				/>
				<Input
					type="date"
					value={eventDate}
					onChange={(e) => setEventDate(e.target.value)}
					placeholder="Event Date"
					required
				/>
				<Input
					type="number"
					value={ticketPrice}
					onChange={(e) => setTicketPrice(e.target.value)}
					placeholder="Ticket Price"
					required
				/>
				<Button type="submit">Create Event</Button>
			</form>
		</div>
	);
}
