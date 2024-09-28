"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function GenerateTicketsPage({
	params,
}: {
	params: { eventId: string };
}) {
	const [quantity, setQuantity] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log({ eventId: params.eventId, quantity });
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<h1 className="mb-4 text-2xl font-bold">Generate Tickets</h1>
			<p>Event ID: {params.eventId}</p>
			<form onSubmit={handleSubmit} className="space-y-4">
				<Input
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					placeholder="Number of tickets"
					required
				/>
				<Button type="submit">Generate Tickets</Button>
			</form>
		</div>
	);
}
