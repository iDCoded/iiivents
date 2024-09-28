import { ErrorResponse, EventInput } from "@/global";
import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	await dbConnect();

	try {
		const events = await Event.find({});
		return NextResponse.json(events);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({ err: err.message });
		}
		// In case the error is not an instance of Error, handle it generically
		return NextResponse.json({ err: "An unexpected error occurred" });
	}
}

export async function POST(req: NextRequest): Promise<NextResponse> {
	await dbConnect();
	try {
		const body: EventInput = await req.json();

		const { eventName, eventDescription, eventDate, eventPrice } = body;

		const newEvent = new Event({
			eventName,
			eventDescription,
			eventPrice,
			eventDate,
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
