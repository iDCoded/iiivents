"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HomeButton = () => {
	const router = useRouter();

	return (
		<div>
			<Button
				onClick={() => {
					router.push("/");
				}}
				variant={"destructive"}>
				Home
			</Button>
		</div>
	);
};

export default HomeButton;
