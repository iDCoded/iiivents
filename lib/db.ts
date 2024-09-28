import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function connectToDatabase() {
	try {
		await client.connect();
		console.log("Connected to MongoDB");
		return client.db();
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		throw error;
	}
}

export default client;
