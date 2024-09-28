"use client";

import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const EventCard = ({ eventName, eventDesc, eventPrice }: EventProps) => {
	return (
		<>
			<div>
				<Card className="w-80 min-w-48">
					<CardHeader>
						<CardTitle className="text-xl">{eventName}</CardTitle>
						<CardDescription className="pt-4">{eventDesc}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="pb-2">Price : ₹{eventPrice}</p>
						<Button>Purchase</Button>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default EventCard;
