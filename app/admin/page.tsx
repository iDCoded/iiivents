import CreateEventForm from "@/components/CreateEventForm";
import HomeButton from "@/components/HomeButton";
import React from "react";

const Page = () => {
	return (
		<div>
			<div className="flex flex-row justify-between px-12 pt-8">
				<h2 className="text-4xl font-bold">Admin Dashboard</h2>
				<HomeButton />
			</div>
			<CreateEventForm />
		</div>
	);
};

export default Page;
