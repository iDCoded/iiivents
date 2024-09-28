"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { EventProps } from "@/types/global";

const EventCard = ({ eventName, eventDescription, eventPrice }: EventProps) => {
	return (
		<>
			<div className="hover:scale-105 cursor-pointer">
				<Card className="w-80 min-w-48">
					<CardHeader>
						<CardTitle className="text-xl">{eventName}</CardTitle>
						<CardDescription className="pt-4">
							{eventDescription}
						</CardDescription>
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
