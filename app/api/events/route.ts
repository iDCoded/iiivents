import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	await dbConnect();

	try {
		const events = await Event.find({});
		return NextResponse.json(events);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		return NextResponse.json({ err: err.message });
	}
}

export async function POST(req: NextRequest) {
	await dbConnect();
	try {
		const body = await req.json();

		// const { eventName, eventDescription, eventPrice, eventDate } = body;

		const newEvent = new Event({
			eventName: body.eventName,
			eventDescription: body.eventDescription,
			eventPrice: body.eventPrice,
			eventDate: body.eventDate,
		});

		await newEvent.save();

		return NextResponse.json({
			message: "Event created successfully",
			event: newEvent,
		});
	} catch (error) {
		console.error("Error creating event:", error);

		const errorResponse: ErrorResponse = { error: "Failed to create event" };
		return NextResponse.json(errorResponse, { status: 500 });
	}
}
