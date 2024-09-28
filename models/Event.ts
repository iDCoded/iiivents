import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IEvent extends Document {
	eventName: string;
	eventDate: Date;
	eventDescription: string;
	eventPrice: number;
}

const eventSchema: Schema = new mongoose.Schema({
	eventName: {
		type: String,
		required: true,
	},
	eventPrice: {
		type: Number,
		required: true,
	},
	eventDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
	eventDescription: {
		type: String,
	},
});

const Event =
	mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);

export default Event;
