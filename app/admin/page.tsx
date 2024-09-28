import CreateEventForm from "@/components/CreateEventForm";
import React from "react";

const Page = () => {
	return (
		<div>
			<h2 className="text-4xl font-bold p-8 pb-2">Admin Dashboard</h2>
			<CreateEventForm />
		</div>
	);
};

export default Page;
