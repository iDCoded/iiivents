import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Event";
import { NextResponse } from "next/server";

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
