"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

export default function CreateEventForm() {
	const { toast } = useToast();

	const curr = new Date();
	curr.setDate(curr.getDate() + 1);
	const today = curr.toISOString().substring(0, 10);

	const [title, setTitle] = useState("");
	const [date, setDate] = useState(today);
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

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
				setTitle("");
				setDate(today);
				setPrice("");
				setDescription("");

				toast({
					description: `Event created successfully: ${data.event.eventName}`,
				});
			} else {
				toast({
					variant: "destructive",
					description: "Failed to create event.",
				});
			}
		} catch (error) {
			console.error("Error creating event:", error);
			toast({
				variant: "destructive",
				description: "Error creating event",
			});
		}
	};

	return (
		<div className="flex flex-col p-8 justify-center items-center">
			<Card className="p-8 lg:w-[768px] md:w-[568px] sm:w-[368px]">
				<CardTitle className="pb-4 text-2xl font-bold">Create Event</CardTitle>
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
							defaultValue={today}
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
			</Card>
		</div>
	);
}
