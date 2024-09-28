"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateEventForm() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const newEvent = {
			eventName: title,
			eventDate: date,
			eventPrice: Number(price),
			eventDescription: description,
		};

		try {
			const res = await fetch("/api/events", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newEvent),
			});

			if (res.ok) {
				const data = await res.json();
				setMessage(`Event created successfully: ${data.event.eventName}`);
				setTitle("");
				setDate("");
				setPrice("");
				setDescription("");
			} else {
				setMessage("Failed to create event");
			}
		} catch (error) {
			console.error("Error creating event:", error);
			setMessage("Error creating event");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<Label htmlFor="title">Event Title</Label>
					<Input
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="date">Date</Label>
					<Input
						id="date"
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="price">Price</Label>
					<Input
						id="price"
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						required
					/>
				</div>
				<div>
					<Label htmlFor="description">Description</Label>
					<Input
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
				<Button type="submit">Create Event</Button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}
